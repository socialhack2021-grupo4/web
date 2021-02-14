import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

import { getExperiences, createOrder, placeOrder } from './api';
import {
  Experience,
  Host,
  Ngo,
  ShallowExperience,
  ShallowHost,
  ShallowNgo,
  getExperienceFromShallowExperience,
  getHostFromShallowHost,
  getNgoFromShallowNgo,
  getShallowExperienceFromExperience,
  isSoon,
} from './models';
import { groupBy } from './utils/collection';

export interface State {
  shallowHosts: Record<string, ShallowHost>;
  shallowNgos: Record<string, ShallowNgo>;
  shallowExperiences: Record<string, ShallowExperience>;
  activeFilters: {
    hosts: Record<string, boolean>;
    ngos: Record<string, boolean>;
  };
  order: {
    isLoading: boolean;
    sessionId: string | null;
  };
  user: {
    id: string;
    name: string;
    profilePicUrl: string;
  } | null;
}

export const key: InjectionKey<Store<State>> = Symbol();

export enum Mutation {
  upsertHosts = 'upsertHosts',
  upsertNgos = 'upsertNgos',
  upsertExperiences = 'upsertExperiences',
  enableHostFilter = 'enableHostFilter',
  disableHostFilter = 'disableHostFilter',
  enableNgoFilter = 'enableNgoFilter',
  disableNgoFilter = 'disableNgoFilter',
  removeAllFilters = 'removeAllFilters',
  startOrder = 'startOrder',
  cancelOrder = 'cancelOrder',
  setOrderSessionId = 'setOrderSessionId',
}

export enum Action {
  createOrder = 'createOrder',
}

const upsertHosts = (state: State, hosts: Array<ShallowHost>) => {
  for (const singleHost of hosts) {
    state.shallowHosts[singleHost.id] = singleHost;
  }
};

const upsertNgos = (state: State, ngos: Array<ShallowNgo>) => {
  for (const singleNgo of ngos) {
    state.shallowNgos[singleNgo.id] = singleNgo;
  }
};

const store = createStore<State>({
  state() {
    return {
      shallowExperiences: {},
      shallowHosts: {},
      shallowNgos: {},
      activeFilters: {
        hosts: {},
        ngos: {},
      },
      order: {
        isLoading: false,
        sessionId: null,
      },
      user: {
        id: '1',
        name: '',
        profilePicUrl: '',
      },
    };
  },
  mutations: {
    [Mutation.upsertHosts]: upsertHosts,
    [Mutation.upsertNgos]: upsertNgos,
    [Mutation.upsertExperiences](state, experiences: Array<Experience>) {
      for (const singleExperience of experiences) {
        state.shallowExperiences[singleExperience.id] = getShallowExperienceFromExperience(
          singleExperience,
        );
      }

      upsertHosts(
        state,
        experiences.map(({ host }) => host),
      );
      upsertNgos(
        state,
        experiences.map(({ ngo }) => ngo),
      );
    },
    [Mutation.enableHostFilter](state, hostId) {
      state.activeFilters.hosts = {
        ...state.activeFilters.hosts,
        [hostId]: true,
      };
    },
    [Mutation.disableHostFilter](state, hostId) {
      state.activeFilters.hosts = {
        ...state.activeFilters.hosts,
        [hostId]: false,
      };
    },
    [Mutation.enableNgoFilter](state, ngoId) {
      state.activeFilters.ngos = {
        ...state.activeFilters.ngos,
        [ngoId]: true,
      };
    },
    [Mutation.disableNgoFilter](state, ngoId) {
      state.activeFilters.ngos = {
        ...state.activeFilters.ngos,
        [ngoId]: false,
      };
    },
    [Mutation.removeAllFilters](state) {
      state.activeFilters = {
        hosts: {},
        ngos: {},
      };
    },
    [Mutation.startOrder](state) {
      state.order.isLoading = true;
    },
    [Mutation.cancelOrder](state) {
      state.order.isLoading = false;
    },
    [Mutation.setOrderSessionId](state, sessionId) {
      state.order.sessionId = sessionId;
    },
  },
  getters: {
    experiencesById(state): Record<string, Experience> {
      return Object.values(state.shallowExperiences).reduce(
        (otherExperiences, shallowExperience) => ({
          ...otherExperiences,
          [shallowExperience.id]: getExperienceFromShallowExperience({
            shallowExperience,
            shallowHost: state.shallowHosts[shallowExperience.hostId],
            shallowNgo: state.shallowNgos[shallowExperience.ngoId],
          }),
        }),
        {},
      );
    },
    experiencesByHostId(state): Record<string, Array<Experience>> {
      const experiences = Object.values(state.shallowExperiences).map((shallowExperience) =>
        getExperienceFromShallowExperience({
          shallowExperience,
          shallowHost: state.shallowHosts[shallowExperience.hostId],
          shallowNgo: state.shallowNgos[shallowExperience.ngoId],
        }),
      );

      return groupBy(experiences, ({ host }) => host.id);
    },
    experiencesByNgoId(state): Record<string, Array<Experience>> {
      const experiences = Object.values(state.shallowExperiences).map((shallowExperience) =>
        getExperienceFromShallowExperience({
          shallowExperience,
          shallowHost: state.shallowHosts[shallowExperience.hostId],
          shallowNgo: state.shallowNgos[shallowExperience.ngoId],
        }),
      );

      return groupBy(experiences, ({ ngo }) => ngo.id);
    },
    hosts(state, getters) {
      return Object.values(state.shallowHosts)
        .map(
          (shallowHost): Host =>
            getHostFromShallowHost({
              shallowHost,
              experiencesCount: getters.experiencesByHostId[shallowHost.id].length,
              isFilterActive: state.activeFilters.hosts[shallowHost.id],
            }),
        )
        .sort((lhs, rhs) => lhs.experiencesCount - rhs.experiencesCount);
    },
    ngos(state, getters) {
      return Object.values(state.shallowNgos)
        .map(
          (shallowNgo): Ngo =>
            getNgoFromShallowNgo({
              shallowNgo,
              experiencesCount: getters.experiencesByNgoId[shallowNgo.id].length,
              isFilterActive: state.activeFilters.ngos[shallowNgo.id],
            }),
        )
        .sort((lhs, rhs) => lhs.experiencesCount - rhs.experiencesCount);
    },
    isSomeFilterActive(state) {
      return (
        Object.values(state.activeFilters.hosts).some((isFilterActive) => isFilterActive) ||
        Object.values(state.activeFilters.ngos).some((isFilterActive) => isFilterActive)
      );
    },
    experiencesForYou(state, getters) {
      return Object.values(getters.experiencesById as Record<string, Experience>)
        .filter(({ isStarred }) => isStarred)
        .filter(
          ({ host, ngo }) =>
            !getters.isSomeFilterActive ||
            state.activeFilters.hosts[host.id] ||
            state.activeFilters.ngos[ngo.id],
        )
        .sort((lhs, rhs) => lhs.priority - rhs.priority);
    },
    experiencesEndingSoon(state, getters) {
      return Object.values(getters.experiencesById as Record<string, Experience>)
        .filter(({ dateEnd }) => isSoon(dateEnd))
        .filter(
          ({ host, ngo }) =>
            !getters.isSomeFilterActive ||
            state.activeFilters.hosts[host.id] ||
            state.activeFilters.ngos[ngo.id],
        )
        .sort((lhs, rhs) => lhs.priority - rhs.priority);
    },
    popularExperiences(state, getters) {
      return Object.values(getters.experiencesById as Record<string, Experience>)
        .filter(
          ({ host, ngo }) =>
            !getters.isSomeFilterActive ||
            state.activeFilters.hosts[host.id] ||
            state.activeFilters.ngos[ngo.id],
        )
        .sort((lhs, rhs) => lhs.priority - rhs.priority);
    },
  },
  actions: {
    async [Action.createOrder]({ commit, state }, experience: Experience) {
      if (state.order.isLoading) {
        return;
      }

      commit(Mutation.startOrder);

      try {
        const order = await createOrder(state.user.id, experience);
        commit(Mutation.setOrderSessionId, order.sessionId);
        await placeOrder(order);
      } catch (error) {
        commit(Mutation.cancelOrder);
      }
    },
  },
});

export default store;

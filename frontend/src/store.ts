import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
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
  },
});

export default store;

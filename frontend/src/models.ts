export interface ShallowNgo {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

export interface Ngo extends ShallowNgo {
  experiencesCount: number;
  isFilterActive: boolean;
}

export const getNgoFromShallowNgo = ({
  shallowNgo,
  experiencesCount,
  isFilterActive,
}: {
  shallowNgo: ShallowNgo;
  experiencesCount: number;
  isFilterActive: boolean;
}): Ngo => ({
  id: shallowNgo.id,
  name: shallowNgo.name,
  logoUrl: shallowNgo.logoUrl,
  websiteUrl: shallowNgo.websiteUrl,
  experiencesCount,
  isFilterActive,
});

export interface ShallowHost {
  id: string;
  name: string;
  profilePicUrl: string;
  instagramUsername: string;
}

export interface Host extends ShallowHost {
  experiencesCount: number;
  isFilterActive: boolean;
}

export const getHostFromShallowHost = ({
  shallowHost,
  experiencesCount,
  isFilterActive,
}: {
  shallowHost: ShallowHost;
  experiencesCount: number;
  isFilterActive: boolean;
}): Host => ({
  id: shallowHost.id,
  name: shallowHost.name,
  profilePicUrl: shallowHost.profilePicUrl,
  instagramUsername: shallowHost.instagramUsername,
  experiencesCount,
  isFilterActive,
});

export interface ShallowExperience {
  id: string;
  hostId: string;
  ngoId: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnailUrl: string;
  images: Array<{
    url: string;
    isVideo: boolean;
  }>;
  isBought: boolean;
  isStarred: boolean;
  participantsCount: number;
  priority: number;
  dateStart: Date;
  dateEnd: Date;
  dateAt: Date;
  currency: string;
  priceInCents: number;
}

export interface Experience extends Omit<ShallowExperience, 'hostId' | 'ngoId'> {
  host: ShallowHost;
  ngo: ShallowNgo;
}

export const getShallowExperienceFromExperience = (experience: Experience): ShallowExperience => ({
  currency: experience.currency,
  dateAt: experience.dateAt,
  dateEnd: experience.dateEnd,
  dateStart: experience.dateStart,
  fullDescription: experience.fullDescription,
  hostId: experience.host.id,
  id: experience.id,
  images: experience.images,
  isBought: experience.isBought,
  isStarred: experience.isStarred,
  ngoId: experience.ngo.id,
  participantsCount: experience.participantsCount,
  priceInCents: experience.priceInCents,
  priority: experience.priority,
  shortDescription: experience.shortDescription,
  thumbnailUrl: experience.thumbnailUrl,
  title: experience.title,
});

export const getExperienceFromShallowExperience = ({
  shallowExperience,
  shallowHost,
  shallowNgo,
}: {
  shallowExperience: ShallowExperience;
  shallowHost: ShallowHost;
  shallowNgo: ShallowNgo;
}): Experience => ({
  id: shallowExperience.id,
  title: shallowExperience.title,
  shortDescription: shallowExperience.shortDescription,
  fullDescription: shallowExperience.fullDescription,
  thumbnailUrl: shallowExperience.thumbnailUrl,
  images: shallowExperience.images,
  isBought: shallowExperience.isBought,
  isStarred: shallowExperience.isStarred,
  participantsCount: shallowExperience.participantsCount,
  priority: shallowExperience.priority,
  dateStart: shallowExperience.dateStart,
  dateEnd: shallowExperience.dateEnd,
  dateAt: shallowExperience.dateAt,
  currency: shallowExperience.currency,
  priceInCents: shallowExperience.priceInCents,
  host: shallowHost,
  ngo: shallowNgo,
});

export const isSoon = (date: Date) => date.getTime() - Date.now() < 24 * 60 * 60 * 1000;

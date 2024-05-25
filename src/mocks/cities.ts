import { CityType } from '../constant/types';
import { CityString } from '../constant/consts';

export type CityMock = {
  [key in CityString]: CityType;
}

export const cities: CityMock = {
  [CityString.AMSTERDAM]: {
    id: 1,
    name: 'Amsterdam',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 12
    }
  },
  [CityString.COLOGNE]: {
    id: 2,
    name: 'Cologne',
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 12
    }
  },
  [CityString.PARIS]: {
    id: 3,
    name: 'Paris',
    location: {
      latitude: 48.8575,
      longitude: 2.3514,
      zoom: 12
    }
  },
  [CityString.DUSSELDORF]: {
    id: 4,
    name: 'Dusseldorf',
    location: {
      latitude: 51.2230,
      longitude: 6.7825,
      zoom: 12
    }
  },
  [CityString.BRUSSELS]: {
    id: 5,
    name: 'Brussels',
    location: {
      latitude: 50.8476,
      longitude: 4.3572,
      zoom: 12
    }
  },
  [CityString.HAMBURG]: {
    id: 6,
    name: 'Hamburg',
    location: {
      latitude: 53.5488,
      longitude: 9.9872,
      zoom: 12
    }
  }
};

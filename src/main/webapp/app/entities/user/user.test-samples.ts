import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 16100,
  login: 'D',
};

export const sampleWithPartialData: IUser = {
  id: 6544,
  login: '9Qas0',
};

export const sampleWithFullData: IUser = {
  id: 958,
  login: 'OT',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

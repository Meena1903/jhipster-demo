import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '88decb20-3590-4dcc-b3c5-65beb5c199b1',
};

export const sampleWithPartialData: IAuthority = {
  name: '0f21740e-29a5-4980-a28c-4a8383892929',
};

export const sampleWithFullData: IAuthority = {
  name: '40707cbf-dc67-4442-9047-656ba103bafa',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

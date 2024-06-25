import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 17863,
  name: 'who although knottily',
};

export const sampleWithPartialData: ITag = {
  id: 9730,
  name: 'duh',
};

export const sampleWithFullData: ITag = {
  id: 9008,
  name: 'poleaxe skinny',
};

export const sampleWithNewData: NewTag = {
  name: 'skirmish how',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

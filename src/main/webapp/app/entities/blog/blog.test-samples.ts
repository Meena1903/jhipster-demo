import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 13534,
  name: 'so enormously studious',
  handle: 'truncate dreamily after',
};

export const sampleWithPartialData: IBlog = {
  id: 24173,
  name: 'old-fashioned afore lest',
  handle: 'thoroughly',
};

export const sampleWithFullData: IBlog = {
  id: 5766,
  name: 'ick',
  handle: 'gigantism besides derrick',
};

export const sampleWithNewData: NewBlog = {
  name: 'fooey',
  handle: 'discipline furthermore',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

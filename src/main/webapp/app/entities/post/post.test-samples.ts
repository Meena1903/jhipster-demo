import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 8492,
  title: 'quill',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-24T21:00'),
};

export const sampleWithPartialData: IPost = {
  id: 3291,
  title: 'rejoin whether titanium',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-24T23:55'),
};

export const sampleWithFullData: IPost = {
  id: 15644,
  title: 'yippee',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-24T17:48'),
};

export const sampleWithNewData: NewPost = {
  title: 'queasily',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-06-25T06:42'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

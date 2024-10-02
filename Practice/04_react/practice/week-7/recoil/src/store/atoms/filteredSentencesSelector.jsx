import { selector } from 'recoil';
import { getAllWords } from './getAllWords';
import { filterAtom } from './filterAtom';

export const filteredSentencesSelector = selector({
  key: 'filteredSentencesSelector',
  get: ({ get }) => {
    const sentences = get(getAllWords);
    const filter = get(filterAtom);

    return sentences.filter(sentence => sentence.includes(filter));
  },
});

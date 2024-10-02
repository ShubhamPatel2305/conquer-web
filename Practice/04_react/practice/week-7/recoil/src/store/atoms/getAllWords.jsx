import { atom } from 'recoil';

export const getAllWords = atom({
  key: 'allWordsAtom',
  default: [],
  effects: [
    ({ setSelf }) => {
      const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
      const TOTAL_LINES = 1000;
      const ALL_WORDS = [];

      for (let i = 0; i < TOTAL_LINES; i++) {
        let sentence = "";
        for (let j = 0; j < words.length; j++) {
          sentence += words[Math.floor(words.length * Math.random())] + " ";
        }
        ALL_WORDS.push(sentence);
      }

      // Set the generated sentences as the value of the atom
      setSelf(ALL_WORDS);
    }
  ]
});

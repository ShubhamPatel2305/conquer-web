import { atomFamily } from "recoil";
import { TODOS } from "./todos";

//Returns a function that returns a writeable RecoilState atom 
export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});
/* eslint-disable no-unused-vars */
import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      //this is a function that returns another function
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res.data);
      return res.data;
    },
  })
});
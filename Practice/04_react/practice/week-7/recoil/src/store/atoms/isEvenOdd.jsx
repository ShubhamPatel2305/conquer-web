import { selector } from "recoil";
import { countAtom } from "./count";

export const isEvenOdd=selector({
    key:'isEvenOdd',
    get: ({get})=>{
        const count=get(countAtom);
        return count%2===0 ? 'It is even':'It is odd';
    },
})
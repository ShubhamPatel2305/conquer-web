/* eslint-disable no-unused-vars */
import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { getAllWords } from '../store/atoms/getAllWords'
import { filterAtom } from '../store/atoms/filterAtom'
import { filteredSentencesSelector } from '../store/atoms/filteredSentencesSelector'

const TodoFilter = () => {
    const setFilter=useSetRecoilState(filterAtom);
    const filteres=useRecoilValue(filteredSentencesSelector);
  return (
    <div>TodoFilter
        <input type="text" onChange={(e) => {
            setFilter(e.target.value)
        }} />
        <ul>
            {filteres.map((sentence, index) => {
            return <li key={index}>{sentence}</li>
            })}
        </ul>
    </div>
  )
}

export default TodoFilter
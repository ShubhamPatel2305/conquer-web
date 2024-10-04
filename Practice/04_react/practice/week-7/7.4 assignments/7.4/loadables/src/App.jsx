/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return (
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  )
}

function Todo({id}) {
  const [todoLoadable, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
   
  switch (todoLoadable.state) {
    case 'hasValue':
      return (
        <div>
          <h2>{todoLoadable.contents.title}</h2>
          <p>{todoLoadable.contents.description}</p>
        </div>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      return <div>Error: {todoLoadable.contents.message}</div>;
  }
}

export default App
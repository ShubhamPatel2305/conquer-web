/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
import { RecoilRoot, useRecoilStateLoadable, useRecoilValue } from 'recoil';
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
  // const todo=useRecoilValue(todosAtomFamily(id));
   //we could have also fetched data using the commented simple useRecoilValue but as this is a backend call it can take time we can use the current useRecoilLoadable and handle loading and error stages. also we can use suspense
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
  // return (
  //   <div>
  //     <h2>{todo.title}</h2>
  //     <p>{todo.description}</p>
  //   </div>
  //   );
}

export default App
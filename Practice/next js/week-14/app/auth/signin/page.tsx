import { TestComponent } from "@/components/Test"

const page = () => {

  function handleClick(){
    alert("click");
  }
  return (
    <div>
      sgnin
      <TestComponent />  
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default page
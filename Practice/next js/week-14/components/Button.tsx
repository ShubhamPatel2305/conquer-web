"use client"
const Button = () => {
    function handleClick(){
        alert("hii")
    }
  return (
    <div>
        <button onClick={handleClick}>Click me!</button>
    </div>
  )
}

export default Button
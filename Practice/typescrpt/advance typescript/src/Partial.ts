/*Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional. 
Specifically useful when you want to do updates
*/

interface User1 {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

type UpdateProps = Pick<User1, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
    console.log(updatedProps)
}
updateUser({
    name: 'John'
})
/*
 Omit
Purpose: The Omit utility type creates a new type by picking all properties from an existing type and then removing specified keys.
*/

type Usersss = {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
};  

type UserWithoutEmail = Omit<Usersss, 'email'>;

const displayUserWithoutEmail = (user: UserWithoutEmail) => {
    console.log(`Name: ${user.name}`);
};      

const userWithoutEmail: UserWithoutEmail = {
    id:1,
    name:'John',
    createdAt:new Date()
}

/*
Exclude
Purpose: The Exclude utility type constructs a type by excluding certain types from a union type.

Syntax:
*/

type Fruit = 'apple' | 'banana' | 'orange' | 'mango';

// Exclude 'banana' and 'mango' from the Fruit type
type SelectedFruits = Exclude<Fruit, 'banana' | 'mango'>;

const fruit: SelectedFruits = 'apple'; // Valid
// const fruit2: SelectedFruits = 'banana'; // Error: Type '"banana"' is not assignable to type 'SelectedFruits'

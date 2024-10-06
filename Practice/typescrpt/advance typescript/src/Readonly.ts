/*
Need: well you might think we had const but try doing : 
const obj = {name: 'John'}; obj.name="Shubham"; 
this will not give error cause you are changing insides of the objects not the whole reference like obj={ name:"Shubham"}; this will surely give error also this stands for arrays you can change elements of array even if its const 

readonly solves this issue. 

When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

This is compile time checking, not runtime (unlike const)
*/

interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
  }
  
  const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456'
  };

    console.log(config.endpoint); // Output: https://api.example

  
  // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
/*
Record let’s you give a cleaner type to objects
You can type objects like follows - 
interface User {
  id: string;
  name: string;
}

type Users = { [key: string]: User };

const users: Users = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

or use record:
*/

interface Userss {
    id: string;
    name: string;
  }
  
  type Users = Record<string, Userss>;
  
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

  /*
  Map
maps gives you an even fancier way to deal with objects. Very similar to Maps in C++
  */

    const map = new Map<string, Userss>();
    map.set('abc123', { id: 'abc123', name: 'John Doe' });
    map.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
    console.log(map.get('abc123')); 
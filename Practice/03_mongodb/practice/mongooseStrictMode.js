const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://admin:admin@cluster0.6c3q0.mongodb.net/");

//

const schema=new mongoose.schema({
    name:String,
    age:Number
},{strict:false});

/*
Mongoose: it's an ODM (Object Data Modeling) library for MongoDB that provides schema-based data modeling and various other features such as validation, middleware, and query-building functionalities.

In MongoDB itself, you can store any type of document, and it's not strictly bound to a schema. However, Mongoose enforces the schema you've defined, which means it controls what fields are allowed based on that schema.

Scenario:
You've defined a schema in Mongoose with fields like username and password.
MongoDB allows storing documents with any fields, but you're working with Mongoose, which validates the data according to the schema before it gets stored.
What happens if you try to add fields outside of the schema?
By default, Mongoose will strip out any fields that are not in the schema. For example, if you try to add a profilePic field that isn't defined in the schema, it will be ignored when saving the document unless you configure your schema to handle it.

If you want to allow additional fields outside of your defined schema, you can set the strict option to false. This allows Mongoose to store data that isn't defined in the schema.
*/
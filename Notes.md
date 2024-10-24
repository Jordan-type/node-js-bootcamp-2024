Week one

// http methods - get, post, update, delete, put - CRUD operation MVC - 

// post == Create
// get == Read
// put == Update
// delete == Delete

// Mongodb, Firebase which is a noSQL vs MYSQL, MariaDB, postgres - python(flask and django)
// Express
// React - frontend - interact with the apis
// Node.js
// MERN Stack - full stack development 


Week Two
// MVC - Models - tables, schemas  view and controllers || logic operators (|| => or && ) = migration everytime you update sql model

    // user - entity - attributes - username first_name, last_name, email, phone_number, county, country, password, role 
    // DataTypes - string, enum (admin, user, guest, superAdmin, client),  number, bool - (Yes, No)
    // if you gonna be adding something like Login with Gmail you mmake not required
    // country code such +254 checking - backend level or frontend - select code 
    // jordan@gmail.com add more validation - '@ .!'

Week Three
// key to Note - 
// 1. camelCase  "fetchData" other case snake_case "fetch_user_data"
// 2. write discriptive function names "fetch_user_data" is more discriptive do the same for variables  varibale x = i * zor write a comment to discribe the variables


//  1. asynchronous function  const functionName = async => { await - i.e promise } - promise rep the eventual completion or faailer of asynchronous operation
//     example basic const fetchData = async () => { try {} catch (error) {} } or const great function(name){ return `Hello, {name}`}
//     usage for featching data
//     Making a http request using axios  - apis 
//     error handling - try-catch
//     statements most common is  - try {} catch (error) {} || if else || for loop 
//     export - to use in another file

//  2. Named functions 
//     example function great(name){ return `Hello, {name}`}

// 3. Arror functions 
//     example const great = (name) => { return `Hello, {name}`

// 4. immediately invoked function expressions (IIFE)
//     example (function(){})() - used to create a new scope and avoid polluting the golbal scope encapsulation varible - 
// oop  inheritance, encapsulation, etc 

// 5. Constructor function
//  - function Person(name, age) {this.name = name; this.age = age}

// 7. callbacks - function passed as an argument to another function
// 8. Higher order function - function that takes another function as an argument or returns a function
// 9. Generator Functions
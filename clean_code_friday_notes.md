
# Clean Code Friday

## Week One: Understanding HTTP Methods & Full-Stack Development Basics

1. **HTTP Methods:**
   - **GET**: Read (Retrieve data)
   - **POST**: Create (Add new data)
   - **PUT**: Update (Modify existing data)
   - **DELETE**: Delete (Remove data)

   *CRUD Operations within the MVC framework:*
   - **C**: Create (POST)
   - **R**: Read (GET)
   - **U**: Update (PUT)
   - **D**: Delete (DELETE)

2. **Databases:**
   - **NoSQL Databases**: MongoDB, Firebase
   - **SQL Databases**: MySQL, MariaDB, PostgreSQL

3. **Backend Frameworks:**
   - **Python**: Flask, Django
   - **Node.js**: Express.js

4. **Frontend Framework:**
   - **React**: Used to interact with APIs.

5. **Full-Stack Development:**
   - **MERN Stack**: MongoDB, Express.js, React, Node.js (Complete full-stack development framework)

## Week Two: MVC Architecture, MomngoDB and SQL Models

1. **MVC Architecture**:
   - **Model**: Represents the data (Tables, Schemas)
   - **View**: Handles what the user sees
   - **Controller**: Manages the logic and connects the model to the view

2. **Entities & Attributes**:
   - **User Entity**: Attributes such as `username`, `first_name`, `last_name`, `email`, `phone_number`, `county`, `country`, `password`, `role`
   - **Data Types**: 
     - `string`
     - `enum` (admin, user, guest, superAdmin, client)
     - `number`
     - `bool` (Yes/No)

3. **Additional Concepts**:
   - Adding **Login with Gmail** functionality requires making some fields optional.
   - Country code (e.g. `+254`) validation: Should this be handled on the backend or frontend?
   - Email validation rules: Ensure validation like requiring `'@'`, `'.'`, etc.

## Week Three: Key Clean Code Concepts & Best Practices

1. **Naming Conventions**:
   - **camelCase**: e.g., `fetchData`
   - **snake_case**: e.g., `fetch_user_data`
   - Use **descriptive function names**: e.g., `fetch_user_data` instead of `x = i * z` (add comments if the variable names aren't obvious).

2. **Asynchronous Programming**:
   - Use `async/await` for asynchronous operations:
     ```javascript
     const fetchData = async () => {
         try {
             // logic
         } catch (error) {
             // error handling
         }
     };
     ```
   - Promises represent the eventual success or failure of asynchronous operations.
   - Common usage: Fetching data with `axios` and handling errors using `try-catch`.

3. **Function Types**:
   - **Named Functions**: 
     ```javascript
     function greet(name) {
         return `Hello, ${name}`;
     }
     ```
   - **Arrow Functions**: 
     ```javascript
     const greet = (name) => {
         return `Hello, ${name}`;
     };
     ```
   - **Immediately Invoked Function Expressions (IIFE)**: Used to create a new scope and avoid polluting the global scope.
     ```javascript
     (function() {
         // code here
     })();
     ```

4. **Object-Oriented Programming Concepts**:
   - **Constructor Functions**:
     ```javascript
     function Person(name, age) {
         this.name = name;
         this.age = age;
     }
     ```

5. **Callbacks & Higher-Order Functions**:
   - **Callback**: A function passed as an argument to another function.
   - **Higher-Order Functions**: Functions that take other functions as arguments or return functions.

6. **Generator Functions**:
   - Functions that can pause execution and resume later.

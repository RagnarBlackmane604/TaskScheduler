/* Step 1: Working with Dates
● Create a function getCurrentDate that returns the current date in the format:
YYYY-MM-DD.
● Use the Date object to extract the year, month, and day.
● Log the result to the console.
console.log(getCurrentDate()); // Example output: "2023-10-05" */

function getCurrentDate() {
// Get current Date
let CurrentDate = new Date();
// Return Date in correct format
return CurrentDate.toLocaleDateString("en-CA"); 
};

console.log(getCurrentDate());

/* Step 2: Using Regex
● Create a function validateTaskName that checks if a task name is valid.
● A valid task name should:
○ Start with a letter.
○ Contain only letters, numbers, spaces, or underscores.
○ Be between 3 and 50 characters long.
● Use a regular expression to validate the task name.
● Log the result to the console.
console.log(validateTaskName("Task 1")); // true
console.log(validateTaskName("1Task")); // false */

function validateTaskName(taskName) {
    // Regular Expression to match required pattern
    const regex = /^[a-zA-Z][a-zA-Z0-9_ ]{2,49}$/;
    // Validate task name with regular expression
    return regex.test(taskName);
}

console.log(validateTaskName("Task 1")); // True    
console.log(validateTaskName("1Task"));  // False

/* Step 3: Using Callbacks
● Create a function scheduleTask that takes three arguments:
○ taskName (string): The name of the task.
○ callback (function): A callback function to execute after scheduling.
○ delay (number): The delay in milliseconds before executing the callback.
● Inside the function, log the task name and the current date.
● Use setTimeout to execute the callback after the specified delay.
scheduleTask("Clean room", () => console.log("Room cleaned!"), 2000); */

function scheduleTask(taskName, callback, delay) {
    // Log the task name and the current date
    const currentDate = new Date();
    console.log(`Task: ${taskName}`);
    console.log(`Scheduled on: ${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`);
    
    // Set Timeout to execute the callback after specified delay
    setTimeout(callback, delay);
}

scheduleTask("Clean room", () => console.log("Room cleaned!"), 2000);

/* Step 4: Using setInterval
● Create a function repeatTask that takes three arguments:
○ taskName (string): The name of the task.

○ callback (function): A callback function to execute repeatedly.
○ interval (number): The interval in milliseconds between executions.
● Use setInterval to execute the callback repeatedly at the specified interval.
● Log the task name and the current date each time the callback runs.
repeatTask("Water plants", () => console.log("Plants watered!"), 3000); */

function repeatTask(taskName, callback, interval) {

    // Log task name and current date each time the callback runs
    
    setInterval(() => {
    const currentDate = new Date();
    console.log(`Task: ${taskName}`);
    console.log(`Current date and time: ${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`);
   
    // Execute the callback
    callback();
    }, interval);
}

repeatTask("Water plants", () => console.log("Plants watered!"), 3000);

/* Step 5: Using Promises
● Create a function checkTaskStatus that returns a promise.
● The promise resolves if the task status is "completed".
● The promise rejects if the task status is "pending".
● Simulate an asynchronous operation using setTimeout.
● Log the result of the promise use then-catch and async-await */

function checkTaskStatus() {
   return new Promise((resolve, reject) => {
    
   setTimeout(() => {
        // Simulating an asynchronous operation  with setTimeout
        let success = true;
        if (success) {
            resolve("completed"); // Resolves if task is completed
        } else {
            reject("pending"); // Rejects if task is pending
        }
    }, 2000);
    });
}



// Using then-catch to handle the promise
checkTaskStatus()
    .then((status) => {
        console.log("Task status:", status); // Logs "completed" if success
        })
        .catch((error) => {
            console.log("Task status:", error); // Logs "pending" if failure
        });
    
        // Using async-await (alternative to then-catch)
async function handleTask() {
    try {
        const status = await checkTaskStatus(); // Awaits the promise resolution
        console.log("Task status:", status); // Logs "completed"
    } catch (error) {
        console.log("Task status:", error); // Logs "pending"
    }
}

handleTask(); // Calls the async function to handle the promise

/* Step 6: Using FetchAPI
● Use the FetchAPI to fetch data from a public API (e.g., JSONPlaceholder).
● Fetch a list of todos and log the titles of the first 5 todos.
 */

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response)  => {
        return response.json(); // Parse the JSON response
    })
    .then((data) => {

        // Get the first 5 todos from the data and log their titles
        const firstFiveTodos = data.slice(0, 5);  // Get the first 5 items
        firstFiveTodos.forEach((todo, index) => {
            console.log(`${index + 1}. ${todo.title} `); // Log the title of each todo
        });
        })
        .catch((error) => {
            console.log("Error fetching data:", error);
        });
    
/* Step 7: Using Higher-Order Functions of Arrays
● Use the fetched todos from Step 6.
● Filter the todos to include only completed tasks.
● Map the filtered todos to an array of task titles.
● Log the results. */

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
        return response.json(); // Parse the JSON response
    })
    .then((data) => {
        console.log('Data received:', data);
        const completedTodos = data.filter(todo => todo.completed === true);
        
        const taskTitles = completedTodos.map(todo => todo.title);
        
        console.log(taskTitles); // Log the titles of completed tasks
    })
    .catch((error) => {
        console.log("Error fetching data:", error); // Handle errors
    });

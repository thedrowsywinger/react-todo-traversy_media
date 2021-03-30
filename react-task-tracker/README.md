# A todo list app using React
Replicating Traversy Media React Crash Course [Youtube](https://www.youtube.com/watch?v=w7ejDZ8SWv8)

## _Front End with React JS_

## Features

- Add Task
    - Set Reminders in the task to be added
    - Button Changes to "Close" and vice-versa
    - Show alert message upon addition of empty task
- Remove Tasks
    - Upon Removal of all tasks, show a message.    
- Tasks can be double clicked to toggle reminder setting


## Production

The Front End part has been deployed to netlify in the following URL: 
[thdrowsywinger-replicates-traversy-todo-react.netlify.app](https://thdrowsywinger-replicates-traversy-todo-react.netlify.app/)

I plan to add a Backend to this application, preferrably first with DjangoRestFramework, and then go on to explore javascript options

## Installation

### Install the dependencies 

```sh
npm install
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```
### Run React dev server (http://localhost:3000)

```
npm start
```

### To build for production

```
npm run build
```
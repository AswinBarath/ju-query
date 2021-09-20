# JU Query

An **Online QnA (Question and Answer) platform** for students and faculties of Jain University.

- “JUQuery” web application is a deliverable for students and faculties of the university
  incorporated with production-grade coding standards.

- It is platform university students and faculties to provide complete information about 
  campus life from a student point of view, and academic information from university point of view. 

- It features a simple and attractive user interface for posting a query, giving an
  answer to a query.

- Students can register/ host any campus related events and also can take the feedback from
  other students through this platform.

---

## Table of content

- [Screenshots](#Screenshots)
- [Technologies](#Technologies)
- [What's unique in this Project](#whats-unique-in-this-project)
- [System Design](#system-design)
- [Contributors](#Contributors)
- [Developer instructions](#developer-instructions)

---

## Screenshots

### Registration page
<p>
<img src="assets/screenshots/JU%20Query%20Registration%20Page.png" alt="Registration page" width=800px />
</p>

### Home page
<p>
<img src="assets/screenshots/JU%20Query%20Feed.png" alt="Home page" width=800px />
</p>

### Add Query feature
<p>
<img src="assets/screenshots/JU%20Query%20Add%20Query.png" alt="Add Query feature" width=800px />
</p>

### Add Answer feature
<p>
<img src="assets/screenshots/JU%20Query%20Add%20Answer.png" alt="Add Answer feature" width=800px />
</p>

---

## Technologies

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
&nbsp;
![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
&nbsp;
![Redux JS](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
&nbsp;
![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
&nbsp;


---

## What's unique in this Project

### Functional programming using functional components

<p>
<img src="assets/Functional%20programming%20using%20functional%20components.png" alt="Functional programming using functional components" />
</p>


- Functional programming is a concept of creating pure functions for software logic 
  and depends only on the arguments passed to the function.

- Functional programming is based more on expressions and declarations
  rather than the statements.

- JU Query incorporats functional programming using functional components
  where we pass data as shared state through functional arguments.

### State management using Redux.js library

<p>
<img src="assets/Redux.jpg" alt="State management using Redux.js library 1" width=800px />
</p>

- Redux is a predictable state container that stores the state of the application in a store, 
  and each component can access any state that it needs from this store.

- State management is essentially a way to facilitate communication and sharing of data
  across components.

<p>
<img src="assets/Redux%20state%20tree.png" alt="State management using Redux.js library 2" width=800px />
</p>

- It creates a tangible data structure to represent the state of the web app that we can read from
  and write to.

- JU Query manages the state of the platform event triggers such as user login/logout, show/hide popup,
  user inputs to provide a user friendly experience.

### Specific re-rendering using ReactDOM in React.js

<p>
<img src="assets/State%20-%20action%20-%20UI%20using%20React%20Redux.jpg" alt="Specific re-rendering using ReactDOM in React.js" width=800px />
</p>

- In React every UI part is a component, and each component has a state.

- React follows the observable pattern and listens for state changes.

- When the state of a component changes, React updates the virtual DOM tree.

- ReactDOM.render() controls the contents of the container node you pass in. Any existing
DOM elements inside are replaced when first called. Later calls use React’s DOM diffing
algorithm for efficient updates.

- JU Query takes advantage of this React.js feature to re-render only those parts of the website
which require a refresh, saving a lot of data usage from the user experience with our
platform.

### Secure API authentication using Firebase

<p>
<img src="assets/Firebase.png" alt="Secure API authentication using Firebase" width=800px />
</p>

- Firebase Authentication is an extensible token-based auth system and provides out-of-the box
integrations with the most common providers such as Google, Facebook, and Twitter,
among others.

- JU Query takes leverage over this secure features of Firebase Authentication API to keep our users
secure and gain their trust over our platform's user experience.


### Real time fetching data using Firebase Firestore database

<p>
<img src="assets/Firebase firestore.png" alt="Real time fetching data using Firebase Firestore database" width=800px />
</p>

- Firestore features richer, faster queries and scales further which is very helpful.

- Real time fetching of data from backend and rendering data on front-end with a very low
  latency which makes the user experience very effective.

- JU Query uses these technologies and techniques along with testing each component of the 
  codebase locally and in production using in-built react-testing-library.

- In JU Query, React components follows the separation of concern principle which is connected 
  together using Dependency injection and component re-rendering to make coding implementation 
  effective along with ease to extend and maintain in the future making it scalable and flexible.

- This component structure provides the user with on-time delivery of update releases and
  upgrades.

---

## System Design

### Architecture

<p>
<img src="assets/system-design/JU%20Query%20Architecture%20Diagram.jpeg" alt="Architecture" width=800px />
</p>

### Use case diagram

<p>
<img src="assets/system-design/JU%20Query%20Use%20Case%20Diagram.png" alt="Use case diagram" width=800px />
</p>

### JU Query Activity Diagram for User Side

<p>
<img src="assets/system-design/JU Query Activity Diagram for User Side.png" alt="JU Query Activity Diagram for User Side" width=800px />
</p>

### JU Query Activity Diagram for Admin Side

<p>
<img src="assets/system-design/JU Query Activity Diagram for Admin Side.png" alt="JU Query Activity Diagram for Admin Side" width=800px  />
</p>

### Class Diagram

<p>
<img src="assets/system-design/JU Query Class Diagram.png" alt="Class Diagram" width=800px />
</p>


### JU Query Sequence Diagram for User Side

<p>
<img src="assets/system-design/JU Query Sequence Diagram for User Side.jpg" alt="JU Query Sequence Diagram for User Side" width=800px />
</p>


### JU Query Sequence Diagram for Admin Side

<p>
<img src="assets/system-design/JU Query Sequence Diagram for Admin Side.jpg" alt="JU Query Sequence Diagram for Admin Side" width=800px />
</p>


### ER Diagram

<p>
<img src="assets/system-design/JU Query ER Diagram.png" alt="ER Diagram"  width=800px />
</p>


---

## Contributors

- T Aswin Barath <https://github.com/AswinBarath>
- Souvik kar <https://github.com/souvik-21>
- Sri Sarvesh <https://github.com/SriSarveshA1>
- Vyshnav Raj <https://github.com/vyshnav99>
- G Kishore <https://github.com/gkrockz>

---

### Developer instructions
<details>
	<summary>Yarn set up</summary>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

</details>


---

**[⬆ Back to Top](#JU-Query)**
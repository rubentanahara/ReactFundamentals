import "./App.css";
import reactLogo from "./assets/react.svg";
function App() {
  return (
    <>
      <div className="header">
        <h1 className="title">Learn React</h1>
        <a href="https://react.dev" target="_blank">
          <img className="logo" src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h2>What is React?</h2>
      <p>
        React is an Open source front end javascript library to create user
        interfaces. React was created by Jordan Walke, a software Engineer at
        Meta, who released an early prototype of React called FaxJS
      </p>
      <h2>Features of React</h2>
      <p>
        <p>
          Virtual DOM: React uses something called the virtual dom instead of
          directly interacting with the browser dom(Document Object Model). The
          Virtual is like a light weight copy of the real dom that react uses to
          efficiently update and render changes to the user interface.{" "}
        </p>
        One-way daa binding: React follows a unidirectional data flow. All the
        data flow from a parent component to its child components.When the data
        in a parent component vhanges , react automatically updates the child
        components that depend on thar data.
      </p>
      <p>
        Web an mobile development: ypu can creaate mobile app using react too!
        You only write code once and deploy it on multiple platforms like iOS
        and Android
      </p>
      <h2>How to start a new project in React</h2>
      <code> npx create-react-app my-app</code>
      <p>However, React recommend use a framework like Vite</p>
      <code>yarn create vite</code>
      <p>It will guide you of how to setup your project in react </p>
      <h2>What does DOM Stand for?</h2>
      <p>
        DOM = Document Object Model and refers to the representation of the
        entire user interface of a web aplication as a tree data structure There
        are two types of dom:
        <ul>
          <li>Virtual DOM</li>
          <li>Real DOM</li>
        </ul>
      </p>
      <h2>Advantages and Disadvantages of React</h2>
      <p>
        <h3>Advantages of using React</h3>
        <ol>
          <li>
            Reasusable components: React components based architecture allows
            developer to create UI reusable components that can be used across
            the all app.
          </li>
          <li>
            Virtual Dom: React use a lightway copy of the real DOM. This allows
            react to efficiently update and render changes to the user interface
          </li>
          <li>React has a quick rendering</li>
        </ol>

        <h3>Disadvantages of using React</h3>
        <ol>
          <li>
            It can be difficult for inexperienced programmers to understand
            because it employs JSX
          </li>
          <li>
            Existing documentation is quickly out of date due to the short
            development cycles
          </li>
        </ol>
      </p>
      <h2>What is JSX?</h2>
      <p>
        Javascript XML is abbreviated as JSX. its enables and simplifies the
        creation of HTML in React, resulting in more readable and understandable
        markup.
      </p>
      <p>For example:</p>
      <pre>
        <code>
          {`const App = () => {
          return (

          <div>
              <h1>Hello, World!</h1>
            </div>

          );
        }; `}
        </code>
      </pre>
      <h2>Why can't Browsers Read JSX?</h2>
      <p>
        JSX is not valid Javascript code and the browser can't read either we
        need to use Babel, a compile/transpiler.
      </p>
      <h2> What are Components?</h2>
      <p>
        A component is a reusable code block that divides the user interface
        into smaller pieces rather than buiding the entire UI in a single file.
        <br />
        There are two kinds of component in React: Functional and class
        components
      </p>
      <h2>What is a Class Component</h2>
      <p>
        Class components are ES6 classes that return JSX and necessitate the use
        of React extensions.
        <br />
        Example:
        <pre>
          <code>
            {`
            import React , {Component} from 'react';
            export default class App extends Component {
              render () {
                return (    
                  <div>
                    <h1>Hello, World!</h1>
                  </div>
                )
              }
            }
            `}
          </code>
        </pre>
      </p>
      <h2>What is a Functional Component?</h2>
      <p>
        A javascript/ES6 function that return a React element is referred to as
        a functional component (JSX). Since the introduction of React Hooks, we
        have been able to use states in functional components, due to their
        cleaner syntax.
      </p>
      <p>Example</p>
      <pre>
        <code>
          {`
            import React from 'react';
            const App = () => {
              return (
                <div>
                  <h1> Hello, World!</h1>
                </div>
              )
            }
          `}
        </code>
      </pre>
      <h2>Difference between Functional and Class components</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Class Components</th>
            <th>Function Components</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Syntax</td>
            <td>ES6 class syntax</td>
            <td>JavaScript function syntax</td>
          </tr>
          <tr>
            <td>State Management</td>
            <td>Can have state using `this.state`</td>
            <td>Can use state using `useState` hook</td>
          </tr>
          <tr>
            <td>Lifecycle Methods</td>
            <td>Has lifecycle methods</td>
            <td>Can use lifecycle methods with `useEffect` hook</td>
          </tr>
          <tr>
            <td>Code Length</td>
            <td>Typically longer and more verbose</td>
            <td>Typically shorter and more concise</td>
          </tr>
          <tr>
            <td>Reusability</td>
            <td>Can use inheritance for code reuse</td>
            <td>Can use composition for code reuse</td>
          </tr>
          <tr>
            <td>Context API</td>
            <td>Can use `this.context` for context access</td>
            <td>Can use `useContext` hook for context access</td>
          </tr>
          <tr>
            <td>Performance</td>
            <td>
              Slightly slower due to overhead of class methods and bindings
            </td>
            <td>Slightly faster due to functional nature and no bindings</td>
          </tr>
          <tr>
            <td>Learning Curve</td>
            <td>Steeper learning curve for beginners</td>
            <td>Easier for beginners to grasp</td>
          </tr>
          <tr>
            <td>Preferred Usage</td>
            <td>Still widely used in existing codebases</td>
            <td>Increasingly preferred and recommended</td>
          </tr>
        </tbody>
      </table>
      <h2>How to use CSS in React</h2>
      <p>
        Thre are 3 ways to style a react appp with CSS:
        <ul>
          <li>Inline styles</li>
          <li>External styling</li>
          <li>CSS in JS</li>
        </ul>
      </p>
      <h2>What is the use of render() in React?</h2>
      <p>
        <ol>
          <li> To return the HTML that will be displayed</li>
          <li>To read props and states </li>
          <li>Return out jsx code to the app root component</li>
        </ol>
      </p>
      <h2> What are Props?</h2>
      <p>
        Props are referred to properties and the main usage is to transfer data
        from one component to the next, also know it Parent component to child
        component
        <br />
        Note: A Child component can never send props to a parent because the
        flow is unidirectional
      </p>
      <pre>
        <code>
          {` 
            function App ({name, hobby}) {
                return (
                  <div>
                      <h1> My name is {name}</h1>
                      <p> My hobby us {hobby}</p>
                  </div>
              )
            }
            export default App;
        `}
        </code>
      </pre>
      <h2>What is State in React ?</h2>
      <p>
        <strong> State is a built-in React Object</strong> that is used to
        create and manege data within our components. Basically, it is used to
        store data. State is mutable and accessible through{" "}
        <code>this.state()</code>
        Example:
      </p>
      <pre>
        <code>
          {`
            class App  extends React.Component {
              constructor(props) {
                super(props);
                this.state = {
                  name: "Foo"
                };
              }

              render() {
                return (
                  <div>
                    <h1> mt Name is {this.sate.name}</h1>
                  </div>
                )
              }
          }


          `}
        </code>
      </pre>
      <h2>How to update the Sate of a Component in React</h2>
      <p>
        If we want it to re-render, then we have to use the setSate() method
        which updates the components state object and re-reders the component.
        Example:
      </p>
      <pre>
        <code>
          {`

          class App extends React.Component {
              constructor(props) {
                super(props);
                this.state = {
                  name: "John Doe"
                };
              }
              changeName = () => {
                this.setState({name: "Jane Doe"});
              }
              render() {
                return (
                  <div>
                    <h1>My {this.state.name}</h1>
                    <button
                      type="button"
                      onClick={this.changeName}
                    >Change Name</button>
                  </div>
                );
              }
            }
        `}
        </code>
      </pre>
      <h2>What is an Event in React?</h2>
      <p>
        Action that can be triggered by a user action or system generated event.
        For example; MouseClicks , web page loading, keypress, window
        resizes,scrolls etc
      </p>
      <pre>
        <code>
          {`

          // For class component
          <button type="button" onClick={this.changeName} >Change Name</button>

          // For function component
          <button type="button" onClick={changeName} >Change Name</button>

          `}
        </code>
      </pre>
      <h2>How to handle Events in React</h2>
      <p>
        Events in react are handled similarly to DOM elements. But must be named
        in camelCase
      </p>
      <h2>Class Component</h2>
      <pre>
        <code>
          {`

            class App extends Component {
              constructor(props) {
                super(props);
                this.handleClick = this.handleClick.bind(this);
              }
              handleClick() {
                console.log('This button was Clicked');
              }
              render() {
                return (
                  <div>
                     <button onClick={this.handleClick}>Click Me</button>
                  </div>
               );
              }
            }
`}
        </code>
      </pre>
      <h2>Functional Component</h2>
      <pre>
        <code>
          {`
          const App = () => {
                 const handleClick = () => {
                  console.log('Click happened');
               };
               return (
                  <div>
                   <button onClick={handleClick}>Click Me</button>
                </div>
             );
          };
          export default App;

`}
        </code>
      </pre>
      <h2>How to pass parameters to an event handler</h2>
      <h2>Functional Component</h2>
      <pre>
        <code>
          {`
          const App = () => {
                 const handleClick = (name) => {
                  console.log(\`My name is \${name}\`);
               };
               return (
                  <div>
                   <button onClick={handleClick}>Click Me</button>
                </div>
             );
          };
          export default App;

`}
        </code>
      </pre>
      <h2>Class Component</h2>
      <pre>
        <code>
          {`

            class App extends React.Component {
              call(name) {
                console.log(\`My name is \${name}\`);
              }
              render() {
                return (
                  <button onClick= {this.call.bind(this,"John Doe")}>
                    Click the button!
                  </button>
                );
              }
            }
            export default App;
            `}
        </code>
      </pre>
      <h2>What is a Redux?</h2>
      <p>
        Redux is a popular open-source JavaScript library for{" "}
        <strong> managing and centralizing application state. </strong> It is
        commonly used with React or any other view-library.
      </p>
      <h2>What is React hooks?</h2>
      <p>
        React hooks were added in v16.8 to allow us to use state and other React
        features without having to write a class.
      </p>
      <h2>UseState()</h2>
      <p>
        The useState Hook is a store that enables the use of state variables in
        functional components. You can pass the initial state to this function,
        and it will return a variable containing the current state value (not
        necessarily the initial state) and another function to update this
        value. <br />
        Example:
      </p>
      <pre>
        <code>
          {`
          import React, { useState } from 'react';

          const App = () => {
            const [count, setCount] = useState(0);

            return (
              <div>
                // ...
              </div>
            );
          }
`}
        </code>
      </pre>
      <h2>useEffect()</h2>
      <p>
        The useEffect Hook allows you to perform side effects in your components
        like data{" "}
        <strong>fetching, direct DOM updates, timers like setTimeout() </strong>
        , and much more. This hook accepts two arguments: the callback and the
        dependencies, which allow you to control when the side effect is
        executed.
        <br /> Note: The second argument is optional.
      </p>
      <pre>
        <code>
          {`
      import React, {useState, useEffect} from 'react';

      const App = () => {
        const [loading, setLoading] = useState(false);
        
        useEffect(() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }, []);
        
        return(
          <div>
            // ...
          </div>
        )
      }

      export default App;
`}
        </code>
      </pre>
      <ul>
        <li>
          The useState hook is used to declare a state variable loading and its
          associated setter function setLoading. The initial value of loading is
          false.
        </li>
        <li>
          The useEffect hook is used to perfom side effect in the component. in
          this case is sets loading to true when the component mount and then ,
          adter a 2 second delay using setTimeout, its set loading back to
          false. The ampty dependency array [] as the second argument ensures
          that the effect runs only once
        </li>
      </ul>
      <h2> MemoHook</h2>
      <p>
        The memo hook in React is used to{" "}
        <strong>
          {" "}
          optimize functional components by preventing unnecessary re-renders{" "}
        </strong>
        . It memoizes the result of a component, re-rendering it only when its
        dependencies (props) change. It improves performance by skipping
        re-renders when the props remain the same. memo can be used as a
        higher-order component (HOC) to memoize individual components or even
        the entire component tree.
      </p>
      <pre>
        <code>
          {`
   const result = useMemo(() => expensivesunction(input), [input]);
          `}
        </code>
      </pre>
      <p>
        This is similar to the useCallback hook, which is used to optimize the
        rendering behavior of your React function components. useMemo is used to
        memoize expensive functions so that they do not have to be called on
        every render.
      </p>
      <h2>useRefs()</h2>
      <p>
        The useRefs() hook is used to store mutable values that do not require
        re-rendering when they are updated. It is also used to store a reference
        to a specific React element or component, which is useful when we need
        DOM measurements or to directly add methods to the components. When we
        need to do the following, we use useRefs:
        <br /> - Adjust the focus, and choose between text and media playback.
        <br /> - Work with third-party DOM libraries.
        <br /> - Initiate imperative animations <br />
        Example:
      </p>
      <pre>
        <code>
          {`
          import React, {useEffect, useRef} from 'react';

          const App = () => {
            const inputRef = useRef(null)
            
            useEffect(()=>{
              inputElRef.current.focus()
            }, [])
            
            return(
              <div>
                <input type="text" ref={inputRef} />
              </div>
            )
          }

          export default App;

          `}
        </code>
      </pre>
      <h2>Context in React</h2>
      <p>
        It allows us to share globally data (state) more easily across our
        components.
        <pre>
          <code>
            {`
    import React, { createContext, useContext } from 'react';

    // Create a context
    const ThemeContext = createContext();

    // A component that provides the context value
    const ThemeProvider = ({ children }) => {
      const theme = 'dark'; // The theme value to be provided

      return (
        <ThemeContext.Provider value={theme}>
          {children}
        </ThemeContext.Provider>
      );
    };

    // A component that consumes the context value
    const ThemeConsumer = () => {
      const theme = useContext(ThemeContext);

      return (
        <div>
          <h2>Current Theme: {theme}</h2>
        </div>
      );
    };

    // The App component
    const App = () => {
      return (
        <ThemeProvider>
          <ThemeConsumer />
        </ThemeProvider>
      );
    };

    export default App;

`}
          </code>
        </pre>
      </p>
      <h2>React Router</h2>
      <p>
        React router is a standard library used in React applications to handle
        routing and allow navigation between views of various components.
        Installing this library into your React project is as simple as typing
        the following command into your terminal:
        <code> npm install –-save react-router-dom</code>
      </p>

      <h2>References</h2>
      <a href="https://www.freecodecamp.org/news/react-interview-questions-and-answers/">
        Link
      </a>
    </>
  );
}

export default App;

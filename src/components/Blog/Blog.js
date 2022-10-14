import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='mt-16 mb-8 text-center text-5xl text-indigo-500 font-bold'>Frequently Asked Questions</h1>

            <div className='container mx-auto  bg-slate-300 rounded-lg p-5 shadow-lg mb-4 '>
                <h2 className='text-3xl font-bold mb-2'> <span className='text-indigo-500 '>Question:</span> How does react work?</h2>
                <p className='font-semibold text-xl'><span className='text-3xl text-indigo-500' >Answer:</span> React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes.
                    Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
            </div>
            <div className='container mx-auto bg-slate-300 rounded-lg p-4 shadow-lg mb-4'>
                <h2 className='text-3xl font-bold mb-2'>
                    <span className='text-indigo-500'>Question:</span> What are the differences between state and props in React JS?
                </h2>
                <p className='font-semibold text-xl'><span className='text-3xl text-indigo-500' >Answer: </span> <span className='font-bold text-xl'> State:</span> The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly. <br />
                    <br />
                    <span className='font-bold text-xl'> Props: </span>
                    Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
                </p>
            </div>
            <div className='container mx-auto bg-slate-300 rounded-lg p-4 shadow-lg mb-4'>
                <h2 className='text-3xl font-bold mb-2'> <span className='text-indigo-500 '>Question:</span> What are the uses of useEffect in React JS?</h2>

                <p className='font-semibold text-xl'><span className='text-3xl text-indigo-500' >Answer: </span> By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API. Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.</p>

            </div>
        </div>


    );
};

export default Blog;
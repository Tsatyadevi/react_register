// import React from 'react'
// import RootLayout from './RootLayout'
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import  Home from './components/home/Home'
// import Signup from './components/signup/Signup'
// import Signin from './components/signin/Signin'
// import About from './components/about/About'

// function App() {
//   const browserRouter = createBrowserRouter([
//     //routing configuration
//     {
//       path:"",
//       element: <RootLayout />,
//       children:[
//         {
//           path:"",
//           element:<Home />
//         },
//         {
//           path:"signup",
//           element:<Signup/>
//         },
//         {
//           path:"signin",
//           element:<Signin />
//         },
//         {
//           path:"about",
//           element:<About />
//         }
//       ]
//     }
//   ])

//   return (
//     <div>
//        <RouterProvider router = {browserRouter} />

//     </div>
//   )
// }

// export default App
import React from 'react';
import Header from './components/header/Header'
import LoginForm from './LoginForm';
import Contact from './Contact'
function App() {
 
  return (
    <div className="App">
      <Header />
      <LoginForm />
      <Contact />
    </div>
  );
}
export default App;
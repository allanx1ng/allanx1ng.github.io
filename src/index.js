import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';



import Footer from './components/Footer'

import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

// export default function Index() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route path="project1" element={<Project1 />} />
//           <Route path="project2" element={<Project2 />} />
//           <Route path="project3" element={<Project3 />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// ReactDOM.render(<Index />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    
    <App />
    
  </HashRouter>
);



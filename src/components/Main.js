import ReactDOM from 'react-dom' 
import { Route, Routes } from 'react-router-dom';

import Project1 from '../pages/project1';
import Project2 from '../pages/project2';
import Project3 from '../pages/project3';
import App from '../App'

const Main = () => {
    return (
        <Routes>
            <Route  path="/" component={App} />
            <Route path="/project1" component={Project1} />
            <Route path="/project2" component={Project2} />
            <Route path="/project3" component={Project3} />
        </Routes>
    );
}

export default Main;
import React, { useEffect } from 'react';
import Home from '../components/Home';

const Main = () => {

    useEffect(() => {
        document.querySelector("body").classList.add("dark");
      }, []);

      
    return (
        <div>
            <Home dark/>
            {/* <h1>hello</h1> */}
        </div>
    );
};

export default Main;
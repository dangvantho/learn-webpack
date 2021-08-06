import React, { useState } from 'react';
import PropTypes from 'prop-types';

App.propTypes = {
    
};

function App(props) {
    const [count, setCount]= useState(0)
    return (
        <div className='container'>
            <div className="row ">
                <div className="col text-center">
                Count donw : {count}
                </div>
            </div>
            <div className="row">
                <div className="col btn btn-primary" onClick={()=>setCount(count-1)}>-</div>
                <div className="col btn btn-primary" onClick={()=>setCount(count+1)}>+</div>
            </div>
        </div>
    );
}

export default App;
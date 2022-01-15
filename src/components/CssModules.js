import React from 'react';
import classes from './CssModules.module.scss';

const CssModules = () => {
    return (
        <div className={classes.container}>
            <p className={classes.titleStyle}>CssModules</p>
            <button className={classes.buttonStyle}>Click</button>
        </div>
    )
}

export default CssModules

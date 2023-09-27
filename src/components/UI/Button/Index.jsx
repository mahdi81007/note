import React from 'react';
import "./Button.css"

function Index({children , onClick ,varient , type = "button"}) {
    return (
        <button className={`fourth note-button--${varient}`} onClick={onClick} type={type}>
            {children}
        </button>
    );
}

export default Index;
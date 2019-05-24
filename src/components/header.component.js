import React, { Component } from 'react';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <h3 style={{'color': 'white'}}>
                        Project Management
                    </h3>
                </nav>
            </div>
            
        )
    }
}

export default HeaderComponent;


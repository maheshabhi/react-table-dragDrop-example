import React from 'react';
import { withRouter } from 'react-router-dom'

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { history } = this.props;
        history.push({
            pathname: '/'
        });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                   <a  onClick={this.handleClick}> 
                       <h3 style={{'color': 'white'}}>  Project Management </h3>
                    </a>
                </nav>
            </div>
            
        )
    }
}

export default withRouter(HeaderComponent);


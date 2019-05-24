import React from 'react';
import styled from 'styled-components'


// const ReadMoretext = styled.a`
//     color: blue;
//     cursor: pointer;
//     text-decoration: underline !important;
// `

function LogoutButton(props) {
    return (
      <a onClick={props.onClick}>
        {props.content}
      </a>
    );
}

function ReadMoreText(props) {
    return (
      <a onClick={props.onClick}>
        {props.content.substring(0, props.limit)}
        <span onClick={this.expandText}> ... </span>
      </a>
    );
}



export default class LongText extends React.Component { 
    
    constructor(props) {
        super(props)
        this.state = this.props;
    }

    
   

    state = { showAll: false }
    showMore = () => this.setState({showAll: true}); 
    showLess = () => this.setState({showAll: false});
    

    render() {
        const {content, limit} = this.state;
        const { showAll } = this.state;
        let button;
           

            if (content.length<=limit) {
                button = <LogoutButton onClick={this.handleLogoutClick} content={content} />;
              } else {
                button = <ReadMoreText onClick={this.handleLoginClick} content={content} limit={limit} />;
              }

           

        const toShow = content.substring(0, limit);
            
        return( 
            <div>
                {button}
            </div>
        )
    }

}
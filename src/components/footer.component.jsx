import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`

`


export default class FooterComponent extends React.Component {
    render() {
        return (
            <footer>
                <div className="container-fluid text-center">
                    <div className="">
                        <p className="text-center"> All rights reserved</p>                    
                    </div>
                </div>
            </footer>
            
        )
    }
}
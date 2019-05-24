import React from 'react'

export default class NotFoundComponent extends React.Component {
    render() {
        console.log(this.props)
        return <h1>Not Found </h1>
    }
}
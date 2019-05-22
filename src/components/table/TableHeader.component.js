import React, { Component } from 'react'

class TableHeader extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const rows = this.props.columns.map((column, index) => {
                    return (
                        <th key={index}> {column} </th>
                    )
                })
        return (
            <thead className="thead-dark"><tr>{rows}</tr></thead>
        )
    }
}

export default TableHeader;

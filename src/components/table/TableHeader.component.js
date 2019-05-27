import React from 'react'

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
            <thead className="thead-blue"><tr>{rows}</tr></thead>
        )
    }
}

export default TableHeader;

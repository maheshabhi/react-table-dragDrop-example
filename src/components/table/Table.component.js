import React, { Component } from 'react';
import TableHeader from './TableHeader.component';
import TableBody from './TableBody.component';
import DragDropComponent from '../drag/DragDrop.component';

class TableCompnent extends React.Component {

    render() {
        
        const tableHeader = this.props.columns;
        const tablebody = this.props.data;
        return (
            <div className="container-fluid">
                <div className="row m-4">
                    <table className="table table-bordered table-responsive">
                        <TableHeader columns={tableHeader} /> 
                        <TableBody data={tablebody} />
                    </table>  
                </div>
                {/* <div className="row">
                    <DragDropComponent />
                </div> */}
            </div>
        )
    }
}

export default TableCompnent;

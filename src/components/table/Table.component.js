import React, { Component } from 'react';
import TableHeader from './TableHeader.component';
import Styled from 'styled-components';
import DragDropComponent from '../drag/DragDrop.component';

import { withRouter  } from 'react-router-dom'

const DeleteIcon = Styled.span`
    cursor: pointer;
`
const TableBody = props => {
        if(props) {
            const rows = props.data.map((row, index) => {
                return (
                    <tr key={index}>
                        <td>{row.project_name} </td>
                        <td>{row.project_desc} </td>
                        <td>{row.lifeCycle_type} </td>
                        <td>{row.start_date} </td>
                        <td>{row.end_date} </td>
                        <td>{row.stage} </td> 
                        <td><DragDropComponent activities={row.activities} /></td>
                        <td>{row.goals} </td> 
                        <td>{row.escalation} </td> 
                        <td>
                            <DeleteIcon className="fa fa-trash fa-2x del-icon" onClick={() => props.removeProject(index)}> </DeleteIcon>
                        </td>
                    </tr>
                )
            })
            return <tbody>{rows}</tbody>
        } else {
            const noData = () => {
                return (
                    <tr>
                       <td> No projects available</td> 
                    </tr>
                )
            }
            return <tbody>{noData}</tbody>
        }
} 


class TableCompnent extends React.Component {
    constructor(props) {
        super(props)
    }

    


    onButtonClick(){
        let { history } = this.props;
        history.push({
            pathname: '/users'
        });
    }

   
    render() {
        
        const tableHeader = this.props.columns;
        const { data, removeProject } = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-primary btn-add" onClick={this.onButtonClick.bind(this)}> Add Project</button>
                    </div>
                </div>
                <div className="row m-4">
                    <table className="table table-bordered table-responsive">
                        <TableHeader columns={tableHeader} /> 
                        <TableBody removeProject={removeProject} data={data} />
                    </table>  
                </div>
                {/* <div className="row">
                    <DragDropComponent />
                </div> */}
            </div>
        )
    }
}

export default withRouter(TableCompnent);

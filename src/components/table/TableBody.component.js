import React, { Component } from 'react';
import TableCarryOverComponent from './TableCarryOver.component';
import TableThisWeekComponent from './TableThisWeek.component';
import TableNextWeekComponent from './TableNextWeek.component';

import DragDropComponent from '../../components/drag/DragDrop.component';

class TableBody extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const dataRows = this.props.data;
        const removeProject = this.props.removeProject;
      
        const TableData = dataRows.map((row, index) => {
                return(
                    <tr  key={index} >
                        <td>{row.project_name} </td>
                        <td>{row.project_desc} </td>
                        <td>{row.lifeCycle_type} </td>
                        <td>{row.start_date} </td>
                        <td>{row.end_date} </td>
                        <td>{row.stage} </td>
                        {/* <td>{row.dec_LTF_finish} </td> */}
                        <td><DragDropComponent activities={row.activities} /></td>
                        <td>{row.goals} </td>
                        <td>{row.escalation} </td> 
                        {/* <td>{row.jan_LTF_finish} </td>
                        <td>{row.jan_LTF_duration} </td>
                        <td>{row.current_LTF} </td>
                        <td><TableCarryOverComponent carryOverData={row.carryover} /> </td>
                        <td><TableThisWeekComponent thisWeekData={row.this_week} /></td>
                        <td><TableNextWeekComponent nextWeekData={row.next_week} /></td>
                        <td>{row.goals} </td>
                        <td>{row.escalation} </td> */}
                        <td><button onClick={() => removeProject(index)}> Delete</button></td>
                    </tr>
                )
            })
        
        return(
            <tbody>{TableData}</tbody>
        ) 
    }
}
    
export default TableBody;


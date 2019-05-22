import React, { Component } from 'react';

class TableThisWeekComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            thisWeekData: this.props.thisWeekData
        } ;
    }
    
    render() {

        console.log("this.state.thisWeekData..", this.state.thisWeekData);

        const thisWeekData = this.state.thisWeekData.data.map((technology, index) => {
            return(
                <div key={technology.name} onDragStart={ (e)=> this.onDragStart(e, technology.name)} draggable className="draggable" style={{backgroundColor: technology.bgcolor}}>{technology.name} </div> 
            )
        });

        return(
            <div>
                <div className="carryOver" onDragOver={(ev) => this.onDragOver(ev)} onDrop={(e) => this.onDrop(e, 'frontend')}>
                    {thisWeekData}
                </div>
            
            </div>
        ) 
    }
}

export default TableThisWeekComponent;
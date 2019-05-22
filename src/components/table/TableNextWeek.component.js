import React, { Component } from 'react';

class TableNextWeekComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            nextWeekData: this.props.nextWeekData
        } ;
    }
    
    render() {

        console.log("this.state.nextWeekData..", this.state.nextWeekData);

        const nextWeekData = this.state.nextWeekData.data.map((technology, index) => {
            return(
                <div key={technology.name} onDragStart={ (e)=> this.onDragStart(e, technology.name)} draggable className="draggable" style={{backgroundColor: technology.bgcolor}}>{technology.name} </div> 
            )
        });

        return(
            <div>
                <div className="carryOver" onDragOver={(ev) => this.onDragOver(ev)} onDrop={(e) => this.onDrop(e, 'frontend')}>
                    {nextWeekData}
                </div>
            
            </div>
        ) 
    }
}

export default TableNextWeekComponent;
import React, { Component } from 'react';

class TableCarryOverComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            carryOverData: this.props.carryOverData,
            thisWeekData: this.props.thisWeekData
        } ;
    }

    onDragStart = (ev, id) => {
        console.log("Drag start", id);
        ev.dataTransfer.setData('id', id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, technology) => {
        let id = ev.dataTransfer.getData('id');

        let technologies = this.state.data.filter((tech) => {
            if(tech.name == id) {
                tech.name = technology
            }
            return technology;
        })
        this.setState(...this.state, technologies)
    }

    
    render() {
        var technologies = {
            frontend: [], 
            backend: []
        };
        console.log("this..", this.state.carryOverData);
        const carryOverData = this.state.carryOverData.data.map((technology, index) => {
            return(
                <div key={technology.name} onDragStart={ (e)=> this.onDragStart(e, technology.name)} draggable className="draggable" style={{backgroundColor: technology.bgcolor}}>{technology.name} </div> 
            )
        });

        return(
            <div>
                <div className="carryOver" onDragOver={(ev) => this.onDragOver(ev)} onDrop={(e) => this.onDrop(e, 'frontend')}>
                    {carryOverData}
                </div>
            </div>
        ) 
    }
}

export default TableCarryOverComponent;
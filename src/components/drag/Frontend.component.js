import React, { Component } from 'react';

class BackendComponent extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            frontendData:  this.props.frontendData ,
            backendData: this.props.backendData
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ backendData: nextProps.backendData });  
    }

    onDragStart = (ev, name) => {
        console.log("Drag start", name);
        ev.dataTransfer.setData("name", name);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, techName) => {
        let draggedTechName = ev.dataTransfer.getData('name');

        // let updatedFrontendData = this.state.frontendData.filter((task) => {
        //     // if(task.name == name) {
        //     //     task.category = techName; 
        //     // }
        //     return task.name !== name;
        // })

        // this.setState({frontendData, updatedFrontendData});

        this.setState({
            frontendData: this.state.frontendData.filter((task, i) => { 
                return task.name !== draggedTechName;
            }), 
        });
    }


    render() {
        
        const {  removetechnology } = this.props;
            
            
        const dummyData = this.state.frontendData.map((technology, index) => {
                    return(
                        <div key={technology.name} className="droppable" onDragOver={(e) => this.onDragOver(e)}  onDrop={(e) => this.onDrop(e, "complete")}>
                            <span className="task-header"> Completed </span>
                      </div>
                    )
        });

        const frontendData = this.state.frontendData.map((technology, index) => {
            return (
                <li className="card draggable" key={technology.name} onDragStart={ (e)=> this.onDragStart(e, technology.name)} draggable 
                onDrop={ (e) => this.onDrop(e, technology.name)} >
                    {technology.name}
                </li>
            );
        })
        const backendData = this.state.backendData.map((technology, index) => {
            return (
                <li onClick={() => removetechnology(index)} className="card" key={technology.name}>
                    {technology.name}
                </li>
            );
        })
        return <ul>{frontendData} {dummyData}</ul>
    }
}

export default BackendComponent;
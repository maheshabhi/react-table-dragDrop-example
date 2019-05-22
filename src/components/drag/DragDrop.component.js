import React, { Component } from 'react';

class DragDropComponent extends React.Component {

    state = {
        data: [
            { 
                name:"Learn Angular",
                category:"wip", 
                bgcolor: "yellow"
            },  
            {
                name:"React", 
                category:"wip", 
                bgcolor:"pink"
            },  
            {   name:"Vue", 
                category:"complete", 
                bgcolor:"skyblue"
            }          
        ]
    }

    onDragStart = (ev, id) => {
        console.log("Drag start", id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData('id');

        let tasks = this.state.data.filter((task) => {
            if(task.name == id) {
                task.category = cat; 
            }
            return task;
        })

        this.setState({...this.state, tasks});
    }

    render() {

        var tasks = {
            wip: [], 
            complete: []
        };

        this.state.data.forEach((t) => {
            tasks[t.category].push(
                <div key={t.name} onDragStart={ (e)=> this.onDragStart(e, t.name)} draggable className="draggable" style={{backgroundColor: t.bgcolor}}>
                        {t.name}
                </div>
            )
        })

        return(
            <div className="container-drag">
                <h2 className="header"> DRAG and DROP </h2>
                <div className="wip" onDragOver={(e) => this.onDragOver(e)} onDrop={ (e) => this.onDrop(e, "wip")}>
                    <span className="task-header"> WIP  </span>
                        {tasks.wip}
                </div>
                <div className="droppable" onDragOver={(e) => this.onDragOver(e)} 
                    onDrop={(e) => this.onDrop(e, "complete")}>
                   <span className="task-header"> Completed </span>
                   {tasks.complete} 
                </div>
            </div>
        )
    }
}

export default DragDropComponent;
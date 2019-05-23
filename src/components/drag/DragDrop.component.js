import React, { Component } from 'react';
import BackendComponent from './Backend.component';
import FrontendComponent from './Frontend.component';


class DragDropComponent extends React.Component {

    state = {
        frontend: [
            { 
                name:"Learn Angular",
                category:"frontend", 
                bgcolor: "yellow"
            },  
            {
                name:"React", 
                category:"frontend", 
                bgcolor:"pink"
            },  
            {   name:"Vue", 
                category:"frontend", 
                bgcolor:"skyblue"
            }          
        ],  
        backend: [
            { 
                name:"Java",
                category:"backend", 
                bgcolor: "green"
            },  
            {
                name:"Node", 
                category:"backend", 
                bgcolor:"black"
            },  
            {   name:"PHP", 
                category:"backend", 
                bgcolor:"blue"
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


    removetechnology = technology => {
        this.setState({
            backend: this.state.backend.filter((techName, i) => { 
                return i !== technology;
            })
        });
    }
    
    render() {
        
        var tasks = {
            wip: [], 
            complete: []
        };

        // this.state.data.forEach((t) => {
        //     tasks[t.category].push(
        //         <div key={t.name} onDragStart={ (e)=> this.onDragStart(e, t.name)} draggable className="draggable" style={{backgroundColor: t.bgcolor}}>
        //                 {t.name}
        //         </div>
        //     )
        // })

        return(
            // <div className="container-drag">
            //     <h2 className="header"> DRAG and DROP </h2>
            //     <div className="wip" onDragOver={(e) => this.onDragOver(e)} onDrop={ (e) => this.onDrop(e, "wip")}>
            //         <span className="task-header"> WIP  </span>
            //             {tasks.wip}
            //     </div>
            //     <div className="droppable" onDragOver={(e) => this.onDragOver(e)} 
            //         onDrop={(e) => this.onDrop(e, "complete")}>
            //        <span className="task-header"> Completed </span>
            //        {tasks.complete} 
            //     </div>
            // </div>

            <div className="container">
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <FrontendComponent frontendData={this.state.frontend}  backendData={this.state.backend} />
                    </div>
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <BackendComponent backendData={this.state.backend}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DragDropComponent;
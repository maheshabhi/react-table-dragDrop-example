import React, { Component } from 'react';

class BackendComponent extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            data: this.props.backendData
        };
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, techName) => {
        debugger;
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
            })
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.backendData });  
    }

    render() {
        const data = this.state.data.map((technology) => {
            return (
                <li className="card droppable" key={technology.name} onDragOver={(e) => this.onDragOver(e)} 
                        onDrop={(e) => this.onDrop(e, technology.name)}>
                    {technology.name}
                </li>
            )
            
        })
        return <ul>{data}</ul>
    }
}

export default BackendComponent;
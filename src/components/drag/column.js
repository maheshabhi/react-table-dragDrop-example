import React from 'react'
import styled from 'styled-components'
import Task from './Task'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
    border: 1px solid lightgrey;    
    border-radius: 2px;
    box-shadow: 0 1px 15px 0 rgba(0,0,0,0.2);
    margin: 8px;
    width: 220px;
    

    display: flex;
    flex-direction: column;
    `
    const Title = styled.p`
    padding: 8px;
    background: #9f9bda;
    color: #000;
    text-align: center;
    `
    const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props =>
        props.isDraggingOver ? '#b5b1e8' : 'white'}
    flex-grow: 1;
    min-height: 100px;
    overflow-y: auto;
    max-height: 250px;
`

export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id} type="TASK">
                {(provided, snapshot) => (
                    <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                    >
                    {this.props.tasks.map((task, index) => (
                        <Task  key={task.id} task={task} index={index} />
                    ))}
                    {provided.placeholder}
                    </TaskList>
                )}
                </Droppable>
            </Container>
        )
    }
}

import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
// import LongText from './longText.component';

const Container = styled.span`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDragDisabled
      ? 'lightgrey'
      : props.isDragging
        ? 'lightgreen'
        : 'white'};
`

export default class Task extends React.Component {

    render() {
        
        // const limit = 10;
        // const isDragDisabled = this.props.task.id === 'task-1'
        return (
            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
            >
                {(provided, snapshot) => (
                <Container className="card"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                {this.props.task.content}
                    {/* <LongText content={this.props.task.content} limit={limit} /> */}
                </Container>
                )}
            </Draggable>
        )
    }
}

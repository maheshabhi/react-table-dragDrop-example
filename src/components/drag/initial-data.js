const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Learn Angular' },
      'task-2': { id: 'task-2', content: 'Learn React' },
      'task-3': { id: 'task-3', content: 'Learn Vue' },
      'task-4': { id: 'task-4', content: 'Learn Next' }
    },
    columns: { 
      'column-1': {
        id: 'column-1',
        title: 'Carry over',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
      },
      'column-2': {
        id: 'column-2',
        title: 'This week',
        taskIds: []
      },
      'column-3': {
        id: 'column-3',
        title: 'Next week',
        taskIds: []
      }
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3']
  }
  
  export default initialData
  
 const initialData =  [
        {
            "project_name": "ESSSV",
            "project_desc": "esssv hybid electric HT- 1009005",
            "lifeCycle_type": "Full",
            "start_date": "4/11/2018",
            "end_date": "1/1/2020",
            "stage": "1",
            "activities": {
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
                columnOrder: ['column-1', 'column-2', 'column-3']
            },
            "goals": "Something",
            "escalation": "Management"
        },
        {
            "project_name": "OPSIS",
            "project_desc": "Opsis scorpion HT- 1009093",
            "lifeCycle_type": "Moderate",
            "start_date": "4/06/2018",
            "end_date": "1/11/2019",
            "stage": "3",
            "activities": {
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
                columnOrder: ['column-1', 'column-2', 'column-3']
            },
            "goals": "All docs come by 28/2/2019",
            "escalation": "QD MPA"
        },
        {
            "project_name": "OPSIS AWES",
            "project_desc": "Opsis awes HT-10035555",
            "lifeCycle_type": "Core",
            "start_date": "8/03/2018",
            "end_date": "18/12/2019",
            "stage": "2",
            "activities": {
                tasks: {
                    'task-1': { id: 'task-1', content: 'Learn Angular' },
                    'task-2': { id: 'task-2', content: 'Learn React' },
                    'task-3': { id: 'task-3', content: 'Learn Vue' },
                    'task-4': { id: 'task-4', content: 'Learn NextJS' }
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
                columnOrder: ['column-1', 'column-2', 'column-3']
            },
            "goals": "Something",
            "escalation": ""
        }
];   

export default initialData;
import React  from 'react';
import TableCompnent from './components/table/Table.component';
import HeaderComponent from './components/header.component';
import FooterComponent from './components/footer.component';


class App extends React.Component {
    constructor(props) {
        super(props)
        // debugger;
        // console.log("updated props", props.location.formData)
        this.removeProject = this.removeProject.bind(this);
        this.addProject = this.addProject.bind(this);
        
        this.state = {
            data: []
        };

        this.state = {
            data: [
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
            ],
            columns : [
                'Project Name', "Project Desc", "Lifeycle Type", "Start Date", "End Date", 
                "Stage", "Activities", "Goals", "Escalation", "Action"
            ],
        }   
        
        // let formData = {
        //     activities: {
        //         tasks: {
        //             'task-1': { id: 'task-1', content: 'Learn Angular' },
        //             'task-2': { id: 'task-2', content: 'Learn React' },
        //             'task-3': { id: 'task-3', content: 'Learn Vue' },
        //             'task-4': { id: 'task-4', content: 'Learn Next' }
        //         },
        //         columns: { 
        //             'column-1': {
        //             id: 'column-1',
        //             title: 'Carry over',
        //             taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        //             },
        //             'column-2': {
        //             id: 'column-2',
        //             title: 'This week',
        //             taskIds: []
        //             },
        //             'column-3': {
        //             id: 'column-3',
        //             title: 'Next week',
        //             taskIds: []
        //             }
        //         },
        //         columnOrder: ['column-1', 'column-2', 'column-3']
        //     },
        //     "goals": "Something",
        //     "escalation": "Management",
        //     end_date: "4/11/2018",
        //     escalation: "asdas",
        //     goals: "assdsda",
        //     lifeCycle_type: "Full",
        //     project_desc: "sddssfdsfd",
        //     project_name: "Mahesha",
        //     stage: "2",
        //     start_date: "4/11/2018",
        // }

        console.log("previous state", this.state);
        
        
        
        console.log("current state", this.state);
    }

    componentDidMount = () => {
        console.log("component did mount");     
    }

    componentWillUpdate = () => {

        console.log("component will update");     
        this.setState({data: {...this.props.location.formData}});
    }

    componentWillUnmount = () => {
        this.setState({data: []});
        alert('unmounting');
    }
    removeProject (index) {
        const projects  = this.state.data;
        
        this.setState({
            data: projects.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    addProject(formData) {
        alert("Adding an project");
        console.log("Form data", formData);
        
        let updatedData = {
            activities: {
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
            "escalation": "Management",
            end_date: "4/11/2018",
            escalation: "asdas",
            goals: "assdsda",
            lifeCycle_type: "Full",
            project_desc: "sddssfdsfd",
            project_name: "Mahesha",
            stage: "2",
            start_date: "4/11/2018",
        };
        this.setState({
            data: updatedData
        });
    }

    // renderTableData() {
    //     fetch('http://www.mocky.io/v2/5ce526c12e0000fb26f83b12')
    //         .then((response) => response.json())
    //         .then((responsejson) => {
    //             this.setState({ data: responsejson})
    //         }).catch(error => {
    //             console.log("Error", error);
    //         });
    // }
        
    render() {
        
        return(
            <div>
                <HeaderComponent />
                <div className="row">
                    {/* <div className="col-md-2">

                    </div> */}
                    <div className="col-md-12">
                        <TableCompnent removeProject={this.removeProject} addProject={this.addProject} data={this.state && this.state.data} columns={this.state.columns} />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}

export default App;
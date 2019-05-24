import React, { Component } from 'react';
import TableCompnent from './components/table/Table.component';
import HeaderComponent from './components/header.component';
import FooterComponent from './components/footer.component';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.removeProject = this.removeProject.bind(this);

        this.state = {
            data: [
                {
                    "project_name": "ESSSV",
                    "project_desc": "esssv hybid electric HT- 1009005",
                    "lifeCycle_type": "Full",
                    "start_date": "4/11/2018",
                    "end_date": "1/1/2020",
                    "stage": "1",
                    "dec_LTF_finish": "30/4/2020",
                    "jan_LTF_finish": "30/4/2020",
                    "jan_LTF_duration": "750",
                    "current_LTF": "0",
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
                    "dec_LTF_finish": "7/2/2019",
                    "jan_LTF_finish": "7/2/2019",
                    "jan_LTF_duration": "365",
                    "current_LTF": "0",
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
                    "dec_LTF_finish": "23/12/2019",
                    "jan_LTF_finish": "23/12/2019",
                    "jan_LTF_duration": "497",
                    "current_LTF": "6",
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
    }
    
    componentWillMount()  {
        // this.renderTableData();
    }

    removeProject (index) {
        const projects  = this.state.data;
        
        this.setState({
            data: projects.filter((character, i) => { 
                return i !== index;
            })
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
                        <TableCompnent removeProject={this.removeProject} data={this.state && this.state.data} columns={this.state.columns} />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}

export default App;
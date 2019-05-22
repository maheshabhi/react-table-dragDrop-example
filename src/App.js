import React, { Component } from 'react';
// import './App.css';
import TableCompnent from './components/table/Table.component';
import HeaderComponent from './components/header.component';

class App extends React.Component {
    constructor(props) {
        super(props)

      //  this.state = {
            // data:  [
            //     {
            //       "project_name": "ESSSV",
            //       "project_desc": "esssv hybid electric HT- 1009005",
            //       "lifeCycle_type": "Full",
            //       "start_date": "4/11/2018",
            //       "end_date": "1/1/2020",
            //       "stage": "1",
            //       "dec_LTF_finish": "30/4/2020",
            //       "jan_LTF_finish": "30/4/2020",
            //       "jan_LTF_duration": "750",
            //       "current_LTF": "0",
            //       "carryover": "lorem ipsum is simply dummy text of the printing and typesetting industry.",
            //       "this_week": "lorem ipsum is simply dummy text of the printing and typesetting industry.",
            //       "next_week": "lorem ipsum is simply dummy text of the printing and typesetting industry.",
            //       "goals": "Something",
            //       "escalation": "Management"
            //     },
            //     {
            //       "project_name": "OPSIS",
            //       "project_desc": "Opsis scorpion HT- 1009093",
            //       "lifeCycle_type": "Moderate",
            //       "start_date": "4/06/2018",
            //       "end_date": "1/11/2019",
            //       "stage": "3",
            //       "dec_LTF_finish": "7/2/2019",
            //       "jan_LTF_finish": "7/2/2019",
            //       "jan_LTF_duration": "365",
            //       "current_LTF": "0",
            //       "carryover": "lorem ipsum is simply dummy text of the printing and typesetting industry.",
            //       "this_week": "lorem ipsum is simply dummy text of the printing and typesetting industry.",
            //       "next_week": "lorem ipsum is simply dummy text of the printing and typesetting industry.",
            //       "goals": "All docs come by 28/2/2019",
            //       "escalation": "QD MPA"
            //     },
            //     {
            //       "project_name": "OPSIS AWES",
            //       "project_desc": "Opsis awes HT-10035555",
            //       "lifeCycle_type": "Core",
            //       "start_date": "8/03/2018",
            //       "end_date": "18/12/2019",
            //       "stage": "2",
            //       "dec_LTF_finish": "23/12/2019",
            //       "jan_LTF_finish": "23/12/2019",
            //       "jan_LTF_duration": "497",
            //       "current_LTF": "6",
            //       "carryover": "lorem ipsum is simply dummy text of the printing and typesetting industry.",
            //       "this_week": "lorem ipsum is simply dummy text of the printing and typesetting industry.",
            //       "next_week": "lorem ipsum is simply dummy text of the printing and typesetting industry.",
            //       "goals": "Something",
            //       "escalation": ""
            //     }
            // ]
            
        // }

            this.state = {
                data: [],
                columns : [
                    'Project name', "Project desc", "Lifecycle type", "Start date", "End date", 
                    "Stage", "Dec LTF finish", "Jan LTF finish", "Jan LTF duration", "Current LTF", 
                    "Carryover", "This week", "Next week", "goals", "Escalation"
                ],
            }

            
        }
    
        componentWillMount()  {
            this.renderTableData();
        }
    
        renderTableData() {
            fetch('http://www.mocky.io/v2/5ce526c12e0000fb26f83b12')
                .then((response) => response.json())
                .then((responsejson) => {
                    this.setState({ data: responsejson})
                }).catch(error => {
                    console.log("Error", error);
                });
        }
        
        render() {
            
            return(
                <div>
                    <HeaderComponent />
                    <div className="row">
                        {/* <div className="col-md-2">

                        </div> */}
                        <div className="col-md-12">
                            <TableCompnent data={this.state && this.state.data} columns={this.state.columns} />
                        </div>
                    </div>
                </div>
            )
        }
    }

export default App;
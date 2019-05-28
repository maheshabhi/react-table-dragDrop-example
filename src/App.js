import React  from 'react';
import TableCompnent from './components/table/Table.component';
import HeaderComponent from './components/header.component';
import FooterComponent from './components/footer.component';
import intitialData from './components/intitialData'

class App extends React.Component {
    
    dummyData = intitialData;
    constructor(props) {
        super(props)
        // this.removeProject = this.removeProject.bind(this);
        this.addProject = this.addProject.bind(this);
        
        this.state = {
            data: [],
            columns : [
                'Project Name', "Project Desc", "Lifeycle Type", "Start Date", "End Date", 
                "Stage", "Activities", "Goals", "Escalation", "Action"
            ],
        };
    }

    componentDidMount = () => {
        this.setState({data: this.dummyData}); 
    }
    
    // componentWillUnmount = () => { 
    //     alert('unmounting');
    //     console.log("after unmount state value", this.state);
        
    // }

    // removeProject (character) {
    //     const projects  = this.state.data;
        
    //     this.setState({
    //         data: projects.filter((index, i) => { 
    //             return i !== index;
    //         })
    //     });     
    // }


    addProject(formData) {
        alert("adding a project")
        console.log("Form data", formData);
        this.setState({data: [...this.state.data, formData]});
        console.log("after state", this.state);
    }
        
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
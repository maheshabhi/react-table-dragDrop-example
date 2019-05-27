import React from 'react';
import { withRouter  } from 'react-router-dom';

import HeaderComponent from './header.component';
import FooterComponent from './footer.component';
import validate from './validate';

const TextInput = (props) => {

    let formControl = 'form-control'; 

    if(props.touched && !props.valid) {
        formControl = 'form-control control-error'
    }

    return (
        <div className="form-group">
            <label className="form-label"> {props.label} </label>
            <input type="text" className={formControl} {...props} touched={props.touched.toString()} valid={props.valid.toString()}  />
        </div>
    );
}

const TextArea = (props) => {

    let formControl = 'form-control';

    if(props.touched && !props.valid) {
        formControl = 'form-control control-error'
    }

    return (
        <div className="form-group">
        <label className="form-label"> {props.label} </label>
            <textarea className={formControl} {...props} touched={props.touched.toString()} valid={props.valid.toString()} />
        </div>
    );
    
}

const SelectInput = (props) => {

    let formControl = 'form-control';

    if(props.touched && !props.valid) {
        formControl = 'form-control control-error'
    }

    return (
        
        <div className="form-group">
            <label className="form-label">{props.label}</label>
            <select className={formControl} value={props.value} onChange={props.onChange} name={props.name}>
                {props.options.map(option => (
                    <option key={option.value} value={option.value}>
                    {option.displayValue}
                    </option>
                ))
                }
            </select>
        </div>
    );
}

const DateInput = (props) => {
    
    let formControl = 'form-control';

    if(props.touched && !props.valid) {
        formControl = 'form-control control-error' 
    }

    return (
        <div className="form-group">
        <label className="form-label">{props.label}</label>
            <input type="date" className={formControl} {...props} touched={props.touched.toString()} valid={props.valid.toString()} />
        </div>
    );
}

class AddProject extends React.Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isFormvalid: false,
            formControls: {
                name: {
                    value: '', 
                    placeholder: 'Please enter project name',
                    label: 'Project Name',
                    valid: false,
                    validationRules: {
                        minLength: 3, 
                        isRequired: true
                    },
                    touched: false
                }, 
                desc: {
                    value: '', 
                    placeholder: 'Please enter project desc',
                    label: 'Project Description',
                    valid: false,
                    validationRules: {
                        minLength: 3
                    },
                    touched: false
                }, 
                lifeCycle: {
                    value: '', 
                    placeholder: 'Please select lifeCycle type',
                    label: "Life Cycle Type",
                    valid: false,
                    touched: false, 
                    validationRules: {
                        isRequired: true
                    }, 
                    options: [
                        {value: 'Core', displayValue: 'Core'},
                        {value: 'Moderate', displayValue: 'Moderate'},
                        {value: 'Full', displayValue: 'Full'},
                    ]
                }, 
                startDate: {
                    value: '', 
                    placeholder: 'Please choose a start date',
                    label: 'Start Date',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        isRequired: true
                    }
                }, 
                endDate: {
                    value: '', 
                    placeholder: 'Please choose a end date',
                    label: 'End Date',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        isRequired: true
                    }
                }, 
                stage: {
                    value: '', 
                    placeholder: 'Please select the stage',
                    label: 'Project stage',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        isRequired: true
                    },
                    options: [
                        {value: 0, displayValue: '1'},
                        {value: 1, displayValue: '2'},
                        {value: 2, displayValue: '3'},
                    ]
                }, 
                goals: {
                    value: '', 
                    placeholder: 'Please enter project goals',
                    label: 'Project Goals',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        minLength: 3, 
                        isRequired: true
                    }
                }, 
                escalation: {
                    value: '', 
                    placeholder: 'Please enter project escalation',
                    label: 'Project Escalation',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        minLength: 3, 
                        isRequired: true
                    }
                },
                activityCategory: {
                    value: '', 
                    placeholder: 'Please select activity category',
                    label: 'Category',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        isRequired: true
                    },
                    options: [
                        { value: 'Carry over', displayValue: 'Carry over' },
                        { value: 'Last week', displayValue: 'Last week' },
                        { value: 'Next Week', displayValue: 'Next Week' },
                    ]
                }, 
                activities: {
                    value: '', 
                    placeholder: 'Please enter activities deatails',
                    label: 'Activities Details',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        minLength: 3, 
                        isRequired: true
                    }
                }
                
            }        
        }
    }

    handleSubmit = (event) =>  {
        event.preventDefault();
        const addProject = this.props.location.addProject;
        console.log("this.props", this.props);
        
        console.log("form data", this.state.formControls);
        console.log("formField value", this.state.formControls.activityCategory.value); 
            // for(let formField in this.state.formControls) {
            //     debugger;
            //     console.log(this.state.formControls[formField].value);
                
            // }
        let formData = {
            "project_name": this.state.formControls.name.value,
            "project_desc": this.state.formControls.desc.value,
            "lifeCycle_type":  this.state.formControls.lifeCycle.value,
            "start_date": this.state.formControls.startDate.value,
            "end_date": this.state.formControls.endDate.value,
            "stage": this.state.formControls.stage.value,
            "activities":  {
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
            "goals": this.state.formControls.goals.value,
            "escalation": this.state.formControls.escalation.value,
        }

        let { history } = this.props;
        history.push({
            pathname: '/', 
            formData: formData
        });

        // addProject(formData);
        this.props.location.addProject(formData);
        
      }

    changehandler = (event) => {

        const name = event.target.name;
        const value = event.target.value; 

        const updatedControls = {
            ...this.state.formControls
        }

        const updatedFormElement = {
            ...updatedControls[name]
        }

        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        updatedControls[name]= updatedFormElement;

        let isFormvalid = true;

        for (let inputIndefier in updatedControls) {
            isFormvalid = updatedControls[inputIndefier].valid && isFormvalid
        }

        this.setState({
            formControls: updatedControls,
            isFormvalid: isFormvalid
        });
    }

    render() {

        return(
            <div>
                <HeaderComponent />
                <div className="container mt-4">
                    
                    <div>
                        <div className="form-title">
                            <h3> Create a Project </h3> <br/>
                        </div>
                        <form  onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <TextInput name="name" value={this.state.formControls.name.value} 
                                        placeholder={this.state.formControls.name.placeholder} onChange={this.changehandler} label={this.state.formControls.name.label}
                                        touched={this.state.formControls.name.touched}
                                        valid={this.state.formControls.name.valid}
                                    />
                                </div>
                                
                                <div className="col-md-6">
                                    <SelectInput name="lifeCycle" value={this.state.formControls.lifeCycle.value}  label={this.state.formControls.lifeCycle.label}
                                        placeholder={this.state.formControls.lifeCycle.placeholder} onChange={this.changehandler}
                                        touched={this.state.formControls.lifeCycle.touched}
                                        valid={this.state.formControls.lifeCycle.valid} options={this.state.formControls.lifeCycle.options}
                                    />                                
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <TextArea name="desc" value={this.state.formControls.desc.value} label={this.state.formControls.desc.label} 
                                        placeholder={this.state.formControls.desc.placeholder} onChange={this.changehandler}
                                        touched={this.state.formControls.desc.touched} valid={this.state.formControls.desc.valid}
                                    /> 
                                </div>
                            </div>

                           
                            <div className="row">
                                <div className="col-md-4">
                                    <SelectInput name="stage" value={this.state.formControls.stage.value} label={this.state.formControls.stage.label}
                                        placeholder={this.state.formControls.stage.placeholder} onChange={this.changehandler}
                                        touched={this.state.formControls.stage.touched} 
                                        valid={this.state.formControls.stage.valid} options={this.state.formControls.stage.options}
                                    />                       
                                </div>
                                <div className="col-md-4">
                                    <DateInput name="startDate" value={this.state.formControls.startDate.value} label={this.state.formControls.startDate.label}
                                            onChange={this.changehandler} touched={this.state.formControls.startDate.touched} valid={this.state.formControls.startDate.valid} 
                                        />   
                                </div>
                                
                                <div className="col-md-4">
                                    <DateInput name="endDate" value={this.state.formControls.endDate.value} label={this.state.formControls.endDate.label}
                                         onChange={this.changehandler} touched={this.state.formControls.endDate.touched} valid={this.state.formControls.endDate.valid} 
                                    />                         
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <TextInput name="goals" value={this.state.formControls.goals.value} 
                                        placeholder={this.state.formControls.goals.placeholder} onChange={this.changehandler} label={this.state.formControls.goals.label}
                                        touched={this.state.formControls.goals.touched}
                                        valid={this.state.formControls.goals.valid}
                                    />
                                </div>
                                
                                <div className="col-md-6">
                                    <TextInput name="escalation" value={this.state.formControls.escalation.value} 
                                        placeholder={this.state.formControls.escalation.placeholder} onChange={this.changehandler} label={this.state.formControls.escalation.label}
                                        touched={this.state.formControls.escalation.touched}
                                        valid={this.state.formControls.escalation.valid}
                                    />                            
                                </div>
                            </div> <br/>
                            <div className="row">
                                <div className="col-md-12 activity-title">
                                        <h5> Activities </h5>
                                </div>
                                <div className="col-md-6">
                                    <SelectInput name="activityCategory" value={this.state.formControls.activityCategory.value} label={this.state.formControls.activityCategory.label}
                                            placeholder={this.state.formControls.activityCategory.placeholder} onChange={this.changehandler}
                                            touched={this.state.formControls.activityCategory.touched} 
                                            valid={this.state.formControls.activityCategory.valid} options={this.state.formControls.activityCategory.options}
                                        /> 
                                </div>
                                
                                <div className="col-md-6">
                                    <TextArea name="activities" value={this.state.formControls.activities.value} 
                                        placeholder={this.state.formControls.activities.placeholder} onChange={this.changehandler} label={this.state.formControls.activities.label}
                                        touched={this.state.formControls.activities.touched}
                                        valid={this.state.formControls.activities.valid}
                                    />                            
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="submit" value="Submit" className="btn btn-primary" /> 
                                </div>      
                            </div><br/><br/><br/><br/>
                        </form>
                        <p>this.state.isFormvalid {this.state.isFormvalid}</p>
                    </div>
                </div>
                <FooterComponent />
            </div>
            
            
        )
    }
}

export default withRouter(AddProject)
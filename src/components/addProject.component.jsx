import React from 'react';
import HeaderComponent from './header.component';
import FooterComponent from './footer.component';


const TextInput = (props) => {
    return (
        <div className="form-group">
            <input type="text" className="form-control" {...props} />
        </div>
    );
}

export default class AddProject extends React.Component {

    constructor() {
        super()
        this.state = {
            formControls: {
                name: {
                    value: '', 
                    placeholder: 'Please enter your name',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        minLength: 3
                    }
                }, 
                
            }        
        }
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
        // updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        updatedControls[name]= updatedFormElement;

        this.setState({
            formControls: updatedControls
        });
    }

    // validate = (value, rules) => {
    //     let isValid = true;

    //     for(let rule in rules) {
            
    //         switch(rule) {
    //             case 'minLength': isValid = isValid && minLengthValidator(value, rules[rule]); break;

    //             default: isValid = true;
    //         }
    //     }

    //     return isValid;
    // }

    minLengthValidator = (value, minLength) => {
        return value.length >= minLength;
    }

    render() {

        return(
            <div>
                <HeaderComponent />
                <div className="container mt-4">
                    
                    <div>
                        <form>
                            {/* <div className="form-group">
                                <input type="email" name="email" value={this.state.formControls.email.value}  onChange={this.changehandler} />
                            </div> */}

                            <TextInput name="name" value={this.state.formControls.name.value} 
                                placeholder={this.state.formControls.name.placeholder} onChange={this.changehandler}
                            />

                            {/* <div className="form-group">
                                <input type="password" name="password" value={this.state.formControls.password.value}  onChange={this.changeHandler} />
                            </div> */}

                        </form>
                    </div>
                </div>
                <FooterComponent />
            </div>
            
            
        )
    }
}
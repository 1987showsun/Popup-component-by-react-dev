import React from 'react';

import './style.scss';

const form = [
    {
        "type"        : "text",
        "name"        : "name",
        "value"       : "sun",
        "data"        : [],
        "label"       : "Name",
        "placeholder" : "please input your name",
        "required"    : false
    },
    {
        "type"        : "password",
        "name"        : "pwd",
        "value"       : "0000",
        "data"        : [],
        "label"       : "",
        "placeholder" : "please input your password",
        "required"    : false
    },
    {
        "type"        : "text",
        "name"        : "age",
        "value"       : "",
        "data"        : [],
        "label"       : "",
        "placeholder" : "please input your age",
        "required"    : false
    }
]

export default class Test extends React.Component{

    constructor(props){
        super(props);

        let formObject = {};
        form.map((item,i)=>{
            formObject = { ...formObject , [item["name"]] : item["value"] }
        });

        const labelSwitch = form.some((item,i)=>{
            return item["label"] != "" && item["label"]!= undefined;
        })

        this.state = {
            formObject     : formObject,
            form           : form,
            labelSwitch    : labelSwitch
        }
    }

    handleChange(e){
        const name = e.target.name;
        const val  = e.target.value;

        this.setState({
            [name] : val
        })
    }

    onsubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={ this.onsubmit.bind(this) }>
                <ul className="form-ul">
                    {
                        this.state.form.map((item,i)=>{
                            switch ( item['type'] ) {
                                case "multiple":
                                    
                                    break;
                            
                                default:
                                    if( this.state.labelSwitch ){
                                        return(
                                            <li key={i}>
                                                <ul>
                                                    <li className="label">{item['label'] || "No label"}</li>
                                                    <li key={i}><input type={item['type']} name={item['name']} value={this.state.formObject[item['name']]} required={item['required']} placeholder={item['placeholder']}  onChange={this.handleChange.bind(this)}/></li>
                                                </ul>
                                            </li>
                                        );
                                    }else{
                                        return(
                                            <li key={i}><input type={item['type']} name={item['name']} value={this.state.formObject[item['name']]} required={item['required']} placeholder={item['placeholder']}  onChange={this.handleChange.bind(this)}/></li>
                                        );
                                    }
                                    break;
                            }
                        })
                    }
                    <button type="submit">Submit</button>
                </ul>
            </form>
        );
    }
}
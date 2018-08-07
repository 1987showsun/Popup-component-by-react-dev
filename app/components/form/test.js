import React from 'react';

export default class Test extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            test : "",
            pwd  : "",
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
                <ul>
                    <li><input type="text" name="test" value={this.state.test} onChange={this.handleChange.bind(this)} /></li>
                    <li><input type="password" name="pwd" value={this.state.pwd} onChange={this.handleChange.bind(this)} /></li>
                    <button type="submit">Submit</button>
                </ul>
            </form>
        );
    }
}
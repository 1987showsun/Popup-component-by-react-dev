import React       from 'react';
import { FaTimes } from 'react-icons/fa';

import './popup.scss';
import { setTimeout } from 'timers';

let   closeCount;

export default class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            addClassName         : props.className          || "",
            trigger              : props.trigger            || "",
            addTrigger           : props.addTrigger         || {
                "text"             : "",
                "style"            : {},
                "className"        : ""
            },
            componentStyle       : props.style              || {},
            windowSet            : props.windowSet          || "center",
            popupType            : props.type               || "msg",     // msg / form / note / err
            display              : props.display            || "hide",
            effects              : props.effects            || "fade",    // fade / silder / zoom
            autoClose            : props.autoClose          || 0,
        }
    }

    componentDidMount() {
        //$trigger.addEventListener("click",this.triggerPopup.bind(this));
        this.autoClose();
    }

    triggerPopup(status){
        this.setState({
            display : status
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            addClassName         : nextProps.className      || "",
            trigger              : nextProps.trigger        || "",
            addTrigger           : nextProps.addTrigger     || {},
            componentStyle       : nextProps.componentStyle || {},
            windowSet            : nextProps.windowSet      || "center",
            popupType            : nextProps.type           || "msg",     // msg / form / note / err
            display              : nextProps.display        || "hide",
        })
    }

    componentDidUpdate(prevProps, prevState) {
        this.autoClose();
    }

    autoClose(){
        const display     = this.state.display;
        const autoClose   = this.state.autoClose;
        if( display=="show" ){
            if( autoClose!=0 && !isNaN(autoClose) ){
                clearTimeout(closeCount);
                closeCount = setTimeout(()=>{
                    this.setState({
                        display : "hide"
                    },()=>{
                        clearTimeout(closeCount);
                        this.returnDisplayStatus();
                    })
                },autoClose);
            }
        }
        this.returnDisplayStatus();
    }

    returnDisplayStatus(){
        const display     = this.state.display;
        if( this.props.returnDisplay!=undefined ){
            this.props.returnDisplay(display);
        }
    }

    render(){
        return(
            <div className={`popup-component ${this.state.addClassName}`} style={this.state.componentStyle}>
                {
                    this.state.addTrigger['text'] != null && this.state.addTrigger['text'] != "" &&
                        <button className={`${this.state.addTrigger['className']}`} style={this.state.addTrigger['style']} onClick={ this.triggerPopup.bind(this,"show") } > {this.state.addTrigger['text']} </button>
                }
                <div className={`popup-wrap ${this.state.windowSet} ${this.state.display} ${this.state.popupType} ${this.state.effects}`}>
                    <div className="popup-wrap-mask" onClick={this.triggerPopup.bind(this,"hide")}></div>
                    <div className="popup-wrap-content">
                        <span className="close" onClick={this.triggerPopup.bind(this,"hide")}>
                            <FaTimes />
                        </span>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
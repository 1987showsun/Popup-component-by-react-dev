import React from 'react';

//Components
import Popup            from './components/popup';
import Testform         from './components/form/test';

export default class Router extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            fixedWidth : 100,
        }
    }

    returnCurrentPage( currentPage ){
        //current page number
    }

    returnSortFreeFunctionName(sortStatus){
        //return sort status
    }

    displayReturnSataus(displayReturnSataus){
        console.log(displayReturnSataus);
    }

    render(){
        return(
            <div className="wrap-popup">
                <div className="wrap-popup-block">
                    <div className="title">
                        Slider
                    </div>
                    <div className="wrap-popup-block-content">
                        <Popup 
                            className    = "test"
                            windowSet    = "top"
                            addTrigger   = {{
                                text        : "trigger slider top",
                                style       : {"width":"123px"},
                                className   : "123"
                            }}
                            effects      = "slider" // fade / slider / zoom
                            //autoClose    = "5000"
                        >   
                            {/* show popup content */}
                            <Testform />
                        </Popup>

                        <Popup 
                            className    = "test"
                            windowSet    = "center"
                            addTrigger   = {{
                                text        : "trigger slider center",
                                style       : {"width":"123px"}
                            }}
                            effects      = "slider" // fade / slider / zoom
                            //autoClose    = "3000"
                        >
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                        </Popup>

                        <Popup 
                            className    = "test"
                            windowSet    = "bottom"
                            addTrigger   = {{
                                text        : "trigger slider bottom",
                                style       : {"width":"123px"}
                            }}
                            effects      = "slider" // fade / slider / zoom
                        >
                            <div>show popup content</div>
                        </Popup>
                    </div>
                </div>

                <div className="wrap-popup-block">
                    <div className="title">
                        Fade
                    </div>
                    <div className="wrap-popup-block-content">
                        <Popup 
                            className    = "test"
                            windowSet    = "top"
                            addTrigger   = {{
                                text        : "trigger fade top",
                                style       : {"width":"123px"}
                            }}
                            effects      = "fade" // fade / slider / zoom
                        >
                            <div>show popup content</div>
                        </Popup>

                        <Popup 
                            className    = "test"
                            windowSet    = "center"
                            addTrigger   = {{
                                text        : "trigger fade center",
                                style       : {"width":"123px"}
                            }}
                            effects      = "fade" // fade / slider / zoom
                        >
                            <div>show popup content</div>
                        </Popup>

                        <Popup 
                            className    = "test"
                            windowSet    = "bottom"
                            addTrigger   = {{
                                text        : "trigger fade bottom",
                                style       : {"width":"123px"}
                            }}
                            effects      = "fade" // fade / slider / zoom
                        >
                            <div>show popup content</div>
                        </Popup>
                    </div>
                </div>

                <div className="wrap-popup-block">
                    <div className="title">
                        Zoom
                    </div>
                    <div className="wrap-popup-block-content">
                        <Popup 
                            className    = "test"
                            windowSet    = "top"
                            addTrigger   = {{
                                text        : "trigger Zoom top",
                                style       : {"width":"123px"}
                            }}
                            effects      = "zoom" // fade / slider / zoom
                        >
                            <div>show popup content</div>
                        </Popup>

                        <Popup 
                            className    = "test"
                            windowSet    = "center"
                            addTrigger   = {{
                                text        : "trigger Zoom center",
                                style       : {"width":"123px"}
                            }}
                            effects      = "zoom" // fade / slider / zoom
                        >
                            <div>show popup content</div>
                        </Popup>

                        <Popup 
                            className    = "test"
                            windowSet    = "bottom"
                            addTrigger   = {{
                                text        : "trigger Zoom bottom",
                                style       : {"width":"123px"}
                            }}
                            effects      = "zoom" // fade / slider / zoom
                            display      = ""
                            returnDisplay= { this.displayReturnSataus.bind(this) }
                        >
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                            <div>show popup content</div>
                        </Popup>
                    </div>
                </div>
            </div>
        )
    }
}
import React,{Component} from "react";
import nani from "../assets/images/nani.jpg";
import srk from "../assets/images/srk.jpg";

class ToggleImgComp extends Component{
    details={
        Id3:103,
        Name3:"Ashwin"
    }

    constructor(){
        super();

        this.state={
            imgpic1:nani,
            imgpic2:srk,
            button:0
        }

    }
    
    
    toggleImage = () => {
        this.setState((prevState) => ({
            button: prevState.button + 1,
            imgpic1: prevState.button % 2 === 0 ? prevState.imgpic2 : nani
        }))
    };


            

    


    render() {
        return(
            <div>
                <h2>This is Toggle Image Class Component</h2>
                <div>
                    <img src={this.state.imgpic1} alt="Nani" style={{width:"100px",height:"Nani"}}></img>
                </div>
                <button type="button" onClick={()=>this.toggleImage()}>ToggleImage</button>

            </div>
        )
        }

    }


export default ToggleImgComp;
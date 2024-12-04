import React,{Component} from "react";
import nani from "../assets/images/nani.jpg";
import srk from "../assets/images/srk.jpg";
import sk from "../assets/images/sk.jpg";
import vijay from "../assets/images/vijay.webp";

class MultipleImgComp extends Component{
    details={
        Id3:103,
        Name3:"Ashwin"
    }

    constructor(){
        super();

        this.state={
            imgpic1:nani,
            imgpic2:srk,
            imgpic3:sk,
            imgpic4:vijay,
            button:0
        }

    }
    
    
    toggleImage = (value) => {
        if(value===1){
            this.setState((prevState) => ({
                imgpic1: prevState.imgpic4
            }))
        }
        else if(value===2){
            this.setState((prevState) => ({
                imgpic1: prevState.imgpic2
            }))
        }
        else if(value===3){
            this.setState((prevState) => ({
                imgpic1: prevState.imgpic3
            }))
        }
        else if(value===4){
            this.setState((prevState) => ({
                imgpic1: nani
            }))
        }
        
    };


            

    


    render() {
        return(
            <div>
                <h2>This is Toggle Image Class Component</h2>
                <div>
                    <img src={this.state.imgpic1} alt="Nani" style={{width:"100px",height:"Nani"}}></img>
                </div>
                <button type="button" onClick={()=>this.toggleImage(1)}>Vijay</button>
                <button type="button" onClick={()=>this.toggleImage(2)}>Srk</button>
                <button type="button" onClick={()=>this.toggleImage(3)}>SK</button>
                <button type="button" onClick={()=>this.toggleImage(4)}>Nani</button>

            </div>
        )
        }

    }


export default MultipleImgComp;
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import "./list.scss";
import ListItem from "../listItem/ListItem";
import { useRef, useState} from "react";


export default function List() {

    const[isMoved, setIsMoved] =useState(false);

    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef(); //will use this to reference location/ID of the containers

    function handleClick(direction){
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x-1525
        // let distance = listRef.current.getBoundingClientRect().x-1170  // x-(305*4)
        if(direction === "right" && slideNumber <15){
            setSlideNumber(slideNumber + 5);
            listRef.current.style.transform= `translateX(-1525px)`

        } 
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 5);
            listRef.current.style.transform= `translateX(0px)`
        }


        console.log(distance)
    }
    
    return (
        <div className = "list">
            <span className= "listTitle"> Continue Watching </span>
            <div className= "wrapper">
                <ArrowBackIosOutlined 
                className= "sliderArrow left" 
                onClick={()=> handleClick("left")}
                style = {{display: !isMoved && "none"}} //if is not moved(false), the value is none. So wont see arrow
                />
                <div className= "container" ref = {listRef}>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/> 
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/> 
                    <ListItem/>
                </div>
                <ArrowForwardIosOutlined className= "sliderArrow right" onClick={()=> handleClick("right")} />
            </div>
        </div>
    )
}

// /Users/wgl8723/Desktop/Projects/Netflix/src/components/list/listItem
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"

function ListItem() {
    return (
        <div className= "listItem">
            <img src="https://bsmknighterrant.org/wp-content/uploads/2020/05/once-upon-a-time-in-hollywood.jpg"
            alt = ""
            />
            <div className= "itemInfo">
                <div className= "icons">
                    <PlayArrow/>
                    <Add/>
                    <ThumbUpAltOutlined/>
                    <ThumbDownAltOutlined/>
                </div>
                <div className= "itemInfoTop">
                    <span> 2 hours 40mins</span>
                    <span className= "limit"> 18+ </span>
                    <span>2019</span>
                </div>
                <div className= "description">
                Rick, a washed-out actor, and Cliff, his stunt double,
                 struggle to recapture fame and success in 1960s Los 
                 Angeles. Meanwhile, living next door to Rick is 
                 Sharon Tate and her husband Roman Polanski.
                </div>
                <div className= "genre"> Action </div> 
            </div>
        </div>
    )
}

export default ListItem

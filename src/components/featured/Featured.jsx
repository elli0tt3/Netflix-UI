import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import logo from "./PulpFictionLogo.png";


export default function Featured () {
    return (
        <div className = "featured">
            <img
                width = "100%"
                src = "https://cdn1.i-scmp.com/sites/default/files/images/methode/2019/01/25/e19000dc-2069-11e9-9b66-f8d7b487d426_1320x770_153953.JPG"
                // src ="https://p4.wallpaperbetter.com/wallpaper/562/337/316/actress-black-dress-brunette-cigarettes-wallpaper-preview.jpg"
                alt = ""
            />
            <div className= "info">
                <img 
                // src = "https://freepikpsd.com/media/2019/10/pulp-fiction-logo-png-Transparent-Images-Free.png" 
                // src = {process.env.PUBLIC_URL + './PulpFictionLogo.png'} 
                src = {logo}
                alt = "logo"
            />
            <span className= "desc">
            The lives of two mob hitmen, a boxer, a 
            gangster's wife, and a pair of diner bandits
            intertwine in four tales of violence and redemption.
            Influential writer-director Quentin Tarantino won an
             Oscar and a Golden Globe for his oft-quoted screenplay.
            </span>

            <div className= "buttons">
                <button className = "play">  
                    <PlayArrow/>
                    <span> Play </span>
                </button>

                <button className = "more">
                    <InfoOutlined/>
                    <span> Info </span>
                </button>
            </div>
            </div>
        </div>
    )
}






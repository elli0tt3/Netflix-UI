import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react"
import "./navbar.scss"


export default function Navbar(){
//if page.YOffset is 0, the navbar is at the top so  
//isScrolled is false else it is true and was scrolled

    const [isScrolled,setIsScrolled ] = useState(false);
    window.onScroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true ); 
        return () => (window.onScroll = null); 
    };

    // console.log(isScrolled);

    //if the navbar is scrolled, set the class to navbar scrolled else it is just navbar.
    return(
        <div className= {isScrolled ? "navbar scrolled": "navbar"}>  
            <div className = "container"> 
                <div className= "left">
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                    alt = ""
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>            

                <div className= "right"> 
                    <Search className = "icon"/>
                    <span>WILL</span>
                    <Notifications className = "icon"/>
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    /> 

                    <div className= "profile"> 
                        <ArrowDropDown className = "icon"/> 
                        <div className= "options">
                            <span>Settings</span>
                            <span>Logout</span>
                    </div>                  
                </div>
            </div>
        </div>
    </div>
    );
};
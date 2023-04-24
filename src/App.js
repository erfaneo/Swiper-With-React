import React from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import MySwiper from "./Components/MySwiper";
import "./mcleod-reset.css"

class App extends React.Component {
    state = {imgs: [ ] }

    getInput = (Input) => {
        axios.get("https://api.pexels.com/v1/search",
        {
            headers:{
                Authorization: "pn2NxJgrB3OK2rk8Y7REkvVy8u4qMQgr0uuCoS5J2GrWcTXYJMziCO4y"
            },
            params:{query: Input}
        }).then((Response) => {
            this.setState({imgs: Response.data.photos})
        })
    }
    
    render(){
        return <div>
            <SearchBar getInput = {this.getInput} />
            <MySwiper imgs = {this.state.imgs} />
        </div>
    }
}

export default App;
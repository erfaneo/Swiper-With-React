import React from "react";

class SearchBar extends React.Component {
    state = {innerText: "Search Somthing...", txtColor: "gray"}

    onFocus = () => {
        if (this.state.innerText == "Search Somthing..."){
            this.setState({innerText: "", txtColor: "black"} )
        }
    }

    onChange = e => {
        this.setState({innerText: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.getInput(this.state.innerText)
    }
    
    render(){
        return(
                <div className="d-flex flex-md-row flex-column align-items-center justify-content-center mt-5 ">
                    <form onSubmit={this.onSubmit}>
                        <input type="text" className=" p-2 rounded " style={{color: `${this.state.txtColor}`, height: "100%"}} onChange={this.onChange} value={this.state.innerText} onFocus={this.onFocus}>
                        </input>
                    </form>
                    <button className="btn btn-success rounded p-1 px-3 mx-1 mt-2 mt-md-0" onClick={this.onSubmit}>Generate</button>
                </div>
            )
    }
}

export default SearchBar;
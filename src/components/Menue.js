import React from "react";
import Dropdown from "./Dropdown"
import Table from "./Table";

class Menue extends React.Component {

  constructor() {
    super();
    this.state = {
      matches: [],
      name:[]
    };

  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/openfootball/football.json/master/2018-19/en.1.json"
    )
      .then(response => response.json())
      .then(data =>{
           this.setState({
            matches:data.matches,
             name: data.name,
             matchday: 'all'
          })})
    ;
  }

  render() {
    return(
    <div>
      {this.state.name}
      <div className="dropdown">
          <Dropdown  matches={this.state.matches} />
      </div>
      <Table matches={this.state.matches} />
    </div>
    );
  }
}

export default Menue;

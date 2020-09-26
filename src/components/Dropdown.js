import React,{Component} from 'react'
import Table from "./Table"

class Dropdown extends Component{

    constructor(){
        super()
         this.calcRounds=this.calcRounds.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

     calcRounds(prop){
        let value =  []

        prop.forEach(function(val){
            value.push(val.round)
        });

        return value;
    }

    handleChange(event){
        console.log("logloglog")
        console.log(event)

        console.log(event.target.value)
        this.setState()
    }

    render(){
        console.log(this.props)
         const rounds = this.calcRounds(this.props.matches);
         const uniqueRounds = [...new Set(rounds)]
        return(
            <div>
                <select onChange={this.handleChange}>
                        {(uniqueRounds.map((item, index) => {
                            return (
                                <option className="dropdown-item" href="#">{item}</option>
                            )}))}
                </select>


        {/*<Table matches={this.props.matches} />*/}

            </div>
        )
    }
}

export default Dropdown


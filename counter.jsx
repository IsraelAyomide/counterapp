import React, { Component } from 'react';


class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
        
     
    // };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // handleIncrement = product => {
    //     console.log(product);
    //     this.setState({value: this.state.value + 1});
    // };
    /*styles = {
        fontSize: 20,
        fontWeight: "bold"

    };*/ 
    // I removed the local state of the counter component
    render() { 

      // let classes = this.getBadgeClass();
      let product; //  error before this line 'product' is not defined  no-undef

        return (
        <div>
            
            <span /*style = {this.styles} style = {{fontSize: 40}} this can be used to apply individual styling*/ className = {this.getBadgeClass()}>{this.formatCount()} </span> 
            <button onClick = {() => this.props.onIncrement(this.props.counter)} className = "btn btn-secondary btn-2"> Increment</button>
            <button onClick = {() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
        }
    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "secondary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.props.counter;
     return count === 0 ? 'Zero' : count;   
    }
}
 
export default Counter;
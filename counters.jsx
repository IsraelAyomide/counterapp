import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    
   
    render()
    
     { 
         //Object destructuring
         const {onReset, counters, onDelete, onIncrement} = this.props;
      
        return ( <div>

           
            <button  onClick = {onReset} className="btn btn-primary btn-sm m-2">Reset</button>

           {counters.map(counter => 
           <Counter key={counter.id} 
           onDelete = {onDelete}
           onIncrement = {onIncrement}
        //    value = {counter.value} 
        //    id = {counter.id}
            counter = {counter}
           
         //  selected = {true} - default value
           />)}
        </div> );
    }
}
 
export default Counters;
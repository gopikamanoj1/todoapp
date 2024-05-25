import React ,{useState} from "react";
import '../App.css'; 


function Counter(){
    const [counter,ChangeCount]=useState(0)

    const increment=()=>{
        ChangeCount(counter+1)
    }
    const decrement=()=>{
        ChangeCount(counter-1)
    }

    return(
        <div className="center">
        <div className="div">
          <h1>Total Count {counter}</h1>
          <button className="button" onClick={increment}>+</button>
          <button className="button" onClick={decrement}>-</button>
        </div>
      </div>
        
    )

}
 

export default Counter;






// class Counter extends Component{
//     state={
//         counter:0
//     }

//     onIncreament=()=>{
//         this.setState({
//             counter:this.state.counter+1
//         })
//     }
//     onDecrement=()=>{
//         this.setState({
//             counter:this.state.counter-1
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <h2>
//                     Counter Component
//                 </h2>
//                 <h4>{this.state.counter}</h4>
//                 <button onClick={this.onIncreament}> +</button>
//                 <button onClick={this.onDecrement}> -</button>

//             </div>
//         )
//     }
// }
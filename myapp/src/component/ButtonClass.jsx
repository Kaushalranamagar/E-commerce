import React, { Component} from 'react'


export default class ButtonClass extends Component {
    constructor(props){
        super(props) 
              this.props = props
              this.count = 0
               this.handleClick =this.handleClick.bind(this)
               this.state = {
                amount: 100,
                count: 200,
                products: [],
                main_product_id: null,
                value : ""
               }
            }
               
        componentDidMount(){
            //api call
            /* /api/products =>  [{ }, {}]*/
            //check if our component is still mounted
            
            /* this.setState(
                {
                    products:[1,2,3]

                }
            ) */
            console.log("did mount");
        }
 
        componentDidUpdate(prevProps,prevState)
        {
         console.log(prevState);                        

          if(prevState.main_product_id !== this.state.main_product_id){
            console.log("change product image");
          }
          
            //  products = [
               //{
               // id:1
                // name,
               //}
                
            //]
            console.log("updated...");
        }

        //clean up function
     componentWillUnmount(){
        console.log("unmounted");
        this.setState({
            mounted_status:false,
        })

        // this.setState((prev)=>{
        //     return {}
        // })
     }


    handleClick(){
     //   alert("handleClick");
        //console.log(this);
      this.count += 1
      console.log(this.count)
      this.setState(
           {
            amount: this.state.amount + 1,
            count: this.state.count +1       
         }
      )

    //    this.setCount(
    //      {
    //          count: 12
    //      }
    //    )
    }


    render(){
        console.log("rendering..");

        return (
            <>
            <h1>{this.count}</h1>
            <hr/>
            <h3>{this.state.amount}</h3>
             <h4>{this.state.count}</h4>
            <button onClick={this.handleClick}>{this.props.type}Button</button>
            <input onChange={()=> this.setState({value:"CHANGED"})} />
            {
                this.products.length > 0
                &&
                <h1>products component</h1>
            }
            
            
            </>
        )
    }
}
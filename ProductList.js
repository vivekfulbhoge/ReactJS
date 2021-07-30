import React, { Component } from 'react';
import { TableCell,TableContainer, TableRow, Table,TableHead} from '@material-ui/core'

class ProductList extends Component {

  constructor(){

        super()

        this.state={
            list:""
        }
    }
    componentDidMount(){
        fetch(" http://localhost:3000/product").then((response)=>{
            response.json().then((result)=>{
                this.setState({list:result})
            })
        })
    }
    render(){
        return(
          <div>
              <h1>Product List</h1>
              {
                 this.state.list.length===0
                 ? "Loading Data" 
                 :this.state.list.map((b)=>
                 <div>
                  <TableContainer>
                   <Table>
                    <TableHead>
                    <TableRow >
                    <TableCell><span>{b.id}</span></TableCell>
                    <TableCell><span>{b.name}</span></TableCell>
                    <TableCell><span>{b.type}</span></TableCell>
                    <TableCell><span>{b.brand}</span></TableCell>
                    <TableCell><span>{b.price}</span></TableCell>
                    <TableCell><span>{b.price}</span></TableCell>

                    </TableRow>
                    </TableHead>
                    </Table>
                    </TableContainer>   
                 </div>
                 )
              }
              
          </div>  
        );
    }
}

export default ProductList;


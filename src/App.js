import React, { Component } from 'react'
import ListItems from './ListItems'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            items :[],
            currentItems: {
                text:'',
                key:''
            }
        }
    }
    handleInput = e => {
        this.setState({
            currentItems:{
                text:e.target.value,
                key:Date.now()
            }
        })
    }

    removeitem = key => {
       const finaldate = this.state.items.filter(item => item.key!==key);
       this.setState({items:finaldate});

    }
    updatesNow = (text, key) => {
    const fixData =  this.state.items;
    fixData.map(item => {
        if(item.key===key){
            item.text=text;
        }
    })
    this.setState({
        items:fixData
         })
    };

    submitForm = e =>{
        e.preventDefault();
     const myFitItems  = this.state.currentItems;
     if(myFitItems !== ""){
         const finalItems = [...this.state.items, myFitItems];
         this.setState({
             items:finalItems,
             currentItems:{
                 text:'',
                 key:''
             }
         })
     }
    };


    render() {
        return (
            <div class="App">
                <header className="center1">
                    <h2 className="centerHere">Todo App List</h2>
                    <form id="to-do-form" onSubmit={this.submitForm}>
                        <input type="text"
                        value={this.state.currentItems.text}
                        onChange={this.handleInput}
                        ></input>
                        <button type="submit">Submit</button>
                    </form>
                </header>
                <ListItems insertData = {this.state.items}
                    deleteitem={this.removeitem}
                    setUpdates = {this.updatesNow}
                    />
            </div>
        )
    }
}

import axios from 'axios';
import React from 'react';
import './App.css';
import Results from './components/results';
import Form from './components/form'



export default class Movies extends React.Component
{
  constructor(props){
    super(props);
    this.state ={
      gif: {
        error: false,
        data: []
    }
    }
  }


  getGif = str => {

      axios.get(`https://api.tenor.com/v1/search?q="${str}&key=F8Y7Y8RTXWM8`)
     
      .then(response=>{
        
        this.setState({
          gif: {
            ...this.state.gif,
            data: [...response.data.results]
        }
        });
     
      })
      .catch(error=>console.log(error))

      
    

  }
  render() {
    return (
        <div className='App'>

          <h1> Gifpicker</h1>
          <Form getGif={this.getGif}/>
          <Results results={this.state.gif.data}/>
          
        </div>
          
    )
  }
}



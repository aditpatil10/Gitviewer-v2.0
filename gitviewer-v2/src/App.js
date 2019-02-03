import React, { Component } from 'react';
import './App.css';


const Card = (props) => {
  
  return(
    <div style={{margin:'1em'}}>
      <img width="75" src={props.avatar_url} />
      <div style={{display:'inline-block', marginLeft:10}}>
        <div style={{fontSize:'1.25em', fontWeight:'bold'}}>
        {props.name}
        </div>
        <div>{props.Location}</div>
      </div>
    </div>
  );
};

let data =[
  {
    name:"Adit Patil",
    avatar_url: "https://avatars1.githubusercontent.com/u/21240597?v=4",
    location: "Mumbai",
  },
  {
    name:"Harshit Shetty",
    avatar_url:"https://avatars1.githubusercontent.com/u/6874982?v=4",
    location: "Mumbai",
  }

];

const CardList = (props) => {
  return(
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

class Form extends Component {
  handleSubmit = (event) => {
  event.preventDefault();
  console.log('Event: Form Submit');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Github username" required/>
        <button type="submit">Add </button>
      </form>
    );
  }
}

class App extends Component {
  state = {
    cards: [
      {
        name:"Adit Patil",
        avatar_url: "https://avatars1.githubusercontent.com/u/21240597?v=4",
        location: "Mumbai",
      },
      {
        name:"Harshit Shetty",
        avatar_url:"https://avatars1.githubusercontent.com/u/6874982?v=4",
        location: "Mumbai",
      } 
    
    ]
  };

  render() {
    return (
      <div className="App" >
         <Form />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}
export default App;

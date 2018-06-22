import React, {Component} from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends : friends, 
    click : [],
    score : 0
    
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

cardsChanging = (event) => {

if (this.state.click.includes(event.target.alt)){
  this.setState({score:0})
return alert("The Score will reset to 0")

}

for (var i = 0 ; i<this.state.friends.length; i++) {

  if (this.state.friends[i].name == event.target.alt) {

var temp = this.state.click
temp.push (event.target.alt)

this.setState({ 

click : temp 

})
    
  }

}


// random 
var temp2 = this.state.friends
temp2.sort(function(a, b){return 0.5 - Math.random()});
console.log(temp2)
var newScore = this.state.score
 newScore:this.state.score +1
}


  render() {
    return (


      <Wrapper>
        <Title>Friends List  {this.state.score}</Title>
        
        {this.state.friends.map(friend => (
          <FriendCard 
            cardClick= {this.cardsChanging}
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          
          />
        ))}
      </Wrapper>
    );
  }
}







export default App;

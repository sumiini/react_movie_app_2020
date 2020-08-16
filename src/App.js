import React from 'react';

/*
import PropTypes from 'prop-types';

// App component 에서 Food component로 정보를 보내고 그다음 food component에서 그 정보를 어떻게 사용하는가
function Food({name,picture,rating}){ //props.fav 랑 {fav}랑 같은거
  //console.log(props.fav);
  return (
    <div>
      <h2>I like {name} </h2>
      <h4> {rating}/5.0 </h4>
      <img src={picture} alt={name} /> 
    </div>
    
  );
}

Food.propTypes={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired

};

// food의 object 배열
const foodILike=[{id:1,name: "kimchi" ,image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi",rating:5},
{id:2,name: "ramen", image: "https://www.crowdpic.net/photos/%EB%9D%BC%EB%A9%B4%EC%82%AC%EC%A7%84",rating:4.3}];

// <Food fav="kimchi"/> --> 이거는 Food component에 fav라는 이름의 property를 kimchi라는 value로 준 것
// component는 HTML을 반환하는 함수이다.
// foodILike.map(dishi => <Food name={dish.name} />)} 에서 각 dish는 object이다.


function App() {
  return (
     <div>

      
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)} 


    </div>
  );
}
*/

class App extends React.Component{

  state={
    count: 0
  };
  add=() => {
    // state는 object이다. 따라서 setState라는 새로운 state를 받아야한다.
    // setState 를 사용하지 않으면 새 state와 함께 render function이 호출되지 않을거다.
    this.setState(current =>({count: current.count+1}))
    
  };
  minus=() => {
    this.setState(current =>({count: current.count-1}))
    

  };

  render(){
    return (
    <div>
      <h1>the number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;

// map은 array의 각 item에서 function을 실행하는 array를 가지는 javascript function이며 ,
// 그 function의 result를 갖는 array를 반환
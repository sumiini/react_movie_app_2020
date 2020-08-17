import React from 'react';
import axios from "axios";
import Movie from "./Movie";
class App extends React.Component{

  state={
    isLoading: true,
    movies: []
  }

  //axios.get 은 완료되기까지 시간이 조금 필요하기때문에 await를 넣음
  getMovies=async()=>{
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies:movies,isLoading:false})
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
   const {isLoading, movies}=this.state;
   return <div> {isLoading ? "Loading...":movies.map(movie =>(
   <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}
    />
   ))}</div>
  }
}

export default App;

// map은 array의 각 item에서 function을 실행하는 array를 가지는 javascript function이며 ,
// 그 function의 result를 갖는 array를 반환
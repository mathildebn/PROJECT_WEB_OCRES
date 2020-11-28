import { Component } from 'react';

class News extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles:[]
    }
  }
  componentDidMount(){
    fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0e67a9dba00f4c178dc25fb7e17bbf6e')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({
        articles: myJson.articles
      });
    });
  }
  
  render(){
    console.log(this.state);
    return (
        <div>
          <h3>Latest News</h3>
          {this.state.articles.slice(0, 3).map((item, index) => {
            return (
                <div style ={{textAlign: "left"}}>
                  <br></br>
                  <a style ={{fontSize: 15}} href={item.url}>{item.title}</a>
                  <p style ={{fontSize: 12}}>by {item.author}</p>
                  <img src={item.urlToImage} style={{width: "10vw", borderRadius: 5}}/>
                </div>
          );
        
        })}
        </div>
    );
  }
}

export default News;
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Article from './components/Article/Article';
import Home from './components/Home/Home';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Loading } from "./components/Loading/Loading.jsx";

function App() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('everything');
  const [loading, setLoading] = useState(true);

  const getArticles = () => {
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        const articles = res.data.response.docs;
        setArticles(articles);
        setLoading(false);
      })
  }

  useEffect(() => {
    const fetchArticles = () => {
      try {
        getArticles();
      }
      catch (error) {
        console.error(error)
      }
    }
    fetchArticles();

  }, [])

  return (
    <Container>
      <Home />
      {loading ? <Loading /> : articles.map(article => {
        return (<Article key={article._id}
          abstract={article.abstract}
          headline={article.headline.main}
          img={`https://static01.nyt.com/${article.multimedia[0].url}`}
        />)
      })}
    </Container>
  );
}
export default App;
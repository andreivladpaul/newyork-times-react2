import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('everything');
  const [loading, setLoading] = useState(true);

  const getArticles = () => {
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=XGIAAFNN03ZdUVs6evngSmccuoJvdPA2`)
      .then(res => {
        const articles = res.data.response.docs;
        setArticles(articles)
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
    <>

    </>
  );
}

export default App;

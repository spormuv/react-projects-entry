import { useEffect, useState } from 'react';
import Collection from './components/Collection';

const cats = [
  { name: 'All' },
  { name: 'Mountains' },
  { name: 'Sea' },
  { name: 'Architecture' },
  { name: 'Cities' },
];

function App() {
  const [category, setCategory] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const categoryParams = category ? `category=${category}` : '';

    fetch(
      `https://64a5a83100c3559aa9c009ba.mockapi.io/photos?page=${page}&limit=3&${categoryParams}`
    )
      .then(res => res.json())
      .then(data => setCollections(data))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  }, [category, page]);

  return (
    <div className="App">
      <h1>My photo collection</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((cat, ind) => (
            <li
              className={category === ind ? 'active' : ''}
              key={cat.name}
              onClick={() => setCategory(ind)}
            >
              {cat.name}
            </li>
          ))}
        </ul>
        <input
          className="search-input"
          placeholder="Title search"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Loading data...</h2>
        ) : (
          collections
            .filter(obj =>
              obj.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map(obj => (
              <Collection name={obj.name} key={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <ul className="pagination">
        {[...Array(5)].map((_, i) => (
          <li
            className={page === i + 1 ? 'active' : ''}
            key={i}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

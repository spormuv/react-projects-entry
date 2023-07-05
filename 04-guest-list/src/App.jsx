import { useEffect, useState } from 'react';
import { Success } from './components/Success';
import { Users } from './components/Users';

function App() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(data => setUsers(data.data))
      .catch(err => {
        console.error(err);
        alert('Error loading users');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onChangeSearchValue = e => {
    setSearchValue(e.target.value);
  };

  const onClickInvite = id => {
    if (invites.includes(id)) {
      setInvites(invites.filter(i => i !== id));
    } else {
      setInvites([...invites, id]);
    }
  };

  const onClickSuccess = () => {
    setIsSuccess(true);
  };

  return (
    <div className="App">
      {!isSuccess ? (
        <Users
          items={users}
          isLoading={isLoading}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSuccess={onClickSuccess}
        />
      ) : (
        <Success count={invites.length} setIsSuccess={setIsSuccess} />
      )}
    </div>
  );
}

export default App;

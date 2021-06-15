import { routes, PrivateRoute, PublicRoute } from './routes';
import { Switch } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import './App.css';
import { updateUser } from './redux/auth/operations';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateUser());
  }, []);
  return (
    <div className="App">
      <Suspense fallback="...">
        <Switch>
          {routes.map(item => {
            // console.log(item);
            return item.private ? (
              <PrivateRoute {...item} />
            ) : (
              <PublicRoute restricted={item.restricted} {...item} />
            );
          })}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
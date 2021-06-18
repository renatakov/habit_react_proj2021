import { routes, PrivateRoute, PublicRoute } from './routes';
import { Switch } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import './App.css';
import { updateUser } from './redux/auth/operations';
import { getAllHAbits } from './redux/habits/operations';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateUser());
    dispatch(getAllHAbits());
  }, []);
  return (
    <div className="App" style={{'width': 320}}>
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

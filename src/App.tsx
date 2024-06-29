import './styles/reset.css';
import './styles/theme.css';
import { NavigationBar } from './ui/NavigabionBar';
import { root } from './styles/app.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthProvider } from './authContext';
import { MyPage } from '../pages/MyPage';
import { DetailPage } from '../pages/DetailPage';
import { MainPage } from '../pages/MainPage';
import { AuthPage } from '../pages/Auth';

function App() {
  const auth = sessionStorage.getItem('auth');

  console.log(auth);
  return (
    <main className={root}>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={MainPage}>
            {!auth && <Redirect to="/login"></Redirect>}
          </Route>
          <Route path="/my_page" component={MyPage}>
            {!auth && <Redirect to="/login"></Redirect>}
          </Route>
          <Route path="/detail" component={DetailPage}></Route>
          <Route path="/login" component={AuthPage}></Route>
        </Switch>
        <NavigationBar />
      </AuthProvider>
    </main>
  );
}

export default App;

import './styles/reset.css';
import './styles/theme.css';
import { NavigationBar } from './ui/NavigabionBar';
import { root } from './styles/app.css';
import { Switch, Route } from 'react-router-dom';

import { MyPage } from '../pages/MyPage';
import { DetailPage } from '../pages/DetailPage';
import { MainPage } from '../pages/MainPage';
import { AuthPage } from '../pages/Auth';
function App() {
  return (
    <main className={root}>
      <Switch>
        <Route path="/" exact component={MainPage}></Route>
        <Route path="/my_page" component={MyPage}></Route>
        <Route path="/detail" component={DetailPage}></Route>
        <Route path="/login" component={AuthPage}></Route>
      </Switch>
      <NavigationBar />
    </main>
  );
}

export default App;

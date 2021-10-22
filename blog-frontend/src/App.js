import React from 'react';
import {Route} from 'react-router-dom';
import PostList from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import PostWritePage from './pages/PostWritePage'
import PostView from './pages/PostViewPage';

const App = () => {
  return (
    <div>
      <Route component={PostList} path={['/@:username', '/']} exact={true}/>
      <Route component={LoginPage} path='/login' />
      <Route component={RegisterPage} path='/register' />
      <Route component={PostWritePage} path='/write' />
      <Route component={PostView} path='/@:username/:postId'/>
    </div>
  )
}

export default App;
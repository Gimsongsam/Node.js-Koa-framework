import React from 'react';
// import Auth from './components/auth/Auth';
// import Header from './components/common/header';
import {Route} from 'react-router-dom';
import PostList from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/RegisterPage'
import WritePost from './pages/WritePostPage';
import PostView from './pages/PostViewPage';

const App = () => {
  return (
    <div>
      <Route component={PostList} path='/' exact={true}/> {/* path={'/@:username', '/']} */}
      <Route component={LoginPage} path='/login' />
      <Route component={Register} path='/register' />
      <Route component={WritePost} path='/write' />
      <Route component={PostView} path='/@:test1/:test1234'/> {/* /@:username/:postId */}
    </div>
  )
}

export default App;
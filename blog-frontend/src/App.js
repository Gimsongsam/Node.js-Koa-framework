import React from 'react';
// import Auth from './components/auth/Auth';
// import Header from './components/common/header';
import {Route} from 'react-router-dom';
import PostList from './pages/postList';
import LoginPage from './pages/LoginPage';
import Register from './pages/RegisterPage'

const App = () => {
  return (
    <div>
      <Route component={PostList} path='/' exact={true}/>
      <Route component={LoginPage} path='/login' />
      <Route component={Register} path='/register' />
    </div>
    
  )
}

export default App;
import React from 'react';
// import Auth from './components/auth/Auth';
// import Header from './components/common/header';
import {Route} from 'react-router-dom';
import PostList from './components/postList';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import Auth from './components/auth/Auth';


const App = () => {
  return (
    <div>
      <Route component={PostList} path='/' exact={true}/>
      <Route component={Auth} path={['/login', '/register']} />
      {/* <Route component={LoginContainer} path='/login'/>
      <Route component={RegisterContainer} path='register'/> */}
    </div>
    
  )
}

export default App;
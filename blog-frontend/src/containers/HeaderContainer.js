import React from 'react';
import Header from '../components/common/header';
import { useSelector, useDispatch } from 'react-redux';
import { createlogout } from '../modules/user';

const HeaderContainer = () => {
    const dispatch = useDispatch();
    const {userId} = useSelector(({user}) => ({
        userId: user.userId
    }))

    const logout = () => {
        dispatch(createlogout())
        // console.log(e)
    }

    return (
        <Header
            userId={userId} 
            onLogout={logout}
        />
    )
}

export default HeaderContainer;
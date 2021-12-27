import React from 'react';
import Header from '../components/common/header';
import { useSelector, useDispatch } from 'react-redux';
import { createlogout } from '../modules/auth';

const HeaderContainer = () => {
    const dispatch = useDispatch();
    const {userId} = useSelector(({user}) => ({
        userId: user.user
    }))

    const logout = () => {
        dispatch(createlogout())
        // console.log(e)
    }

    return (
        <>
            {console.log(userId)}
            <Header
                userId={userId} 
                onLogout={logout}
            />
        </>
    )
}

export default HeaderContainer;
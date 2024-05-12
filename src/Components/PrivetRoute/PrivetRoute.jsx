import UseAuth from '../../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading} = UseAuth()
    const location = useLocation()

    if(loading) return <p>Loading........</p>
    if(user) return children
    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
};

export default PrivetRoute;
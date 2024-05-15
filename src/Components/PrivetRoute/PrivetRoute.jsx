import UseAuth from '../../Hooks/UseAuth';
import { Link, useLocation } from 'react-router-dom';
import Login from '../../Pages/Login';

const PrivetRoute = ({children}) => {
    const {user} = UseAuth()
    const location = useLocation()
    if(!user){
        return <Link state={location.pathname} to={'/login'}> <Login></Login> </Link>
       }
       return(
        <div>
            {children}
        </div>
       )
};

export default PrivetRoute;
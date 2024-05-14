import UseAuth from '../../Hooks/UseAuth';
import { Link } from 'react-router-dom';
import Login from '../../Pages/Login';

const PrivetRoute = ({children}) => {
    const {user} = UseAuth()
    if(!user){
        return <Link to={'/login'}> <Login></Login> </Link>
       }
       return(
        <div>
            {children}
        </div>
       )
};

export default PrivetRoute;
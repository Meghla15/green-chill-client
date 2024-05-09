import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import  Navbar from '../Components/Navber'

const Root = () => {
    return (
        <div>
          
            {/*navbar  */}
            <Navbar></Navbar>
            {/* outlet */}
            <Outlet></Outlet>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Root;
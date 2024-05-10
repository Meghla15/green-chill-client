import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleLogin} = UseAuth();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state || '/';

    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result =>{
            if (result.user) {
                navigate(from)
            }
        })
    }
    return (
        <div>
            <div className="flex justify-center space-x-4">
		<button onClick={()=>handleSocialLogin(googleLogin)} aria-label="Log in with Google" className="p-3  rounded-sm">
			<img className='w-[50px] h-[50px]' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
		</button>
		
	</div>
        </div>
    );
};

export default SocialLogin;
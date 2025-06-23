import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

    const navigate = useNavigate();

  return (
    <div className="register-page h-100 w-100 d-flex justify-content-center align-items-center py-4">
        <div className="holder bg-white h-75 rounded shadow-lg m-2 d-flex flex-column overflow-hidden boder border-white">
            <div className="title flex-2 d-flex flex-column justify-content-center align-items-center bg-blue text-white py-3">
                <div><span className="fw-bold fs-3">Welcome Back</span></div>
                <div><span className="text-gray">Join our community today</span></div>
            </div>
            <div className="data flex-7 p-3 d-flex flex-column">
                <form action="" className="w-100 h-100 d-flex flex-column justify-content-center gap-4">
                    <div className="">
                        <label htmlFor="username" className="form-label fw-semibold">Username or Email</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                    </div>
                    <div className="">
                        <label htmlFor="password" className="form-label fw-semibold">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Log in</button>
                </form>
            </div>
            <div className="switch flex-1 d-flex justify-content-center align-items-center">
                <div><span>Create an account?</span><span className='hello text-primary text-decoration-underline cursor-pointer' onClick={()=>{navigate('/auth/register')}}> sign up here</span></div>
            </div>
        </div>
    </div>
  );
}

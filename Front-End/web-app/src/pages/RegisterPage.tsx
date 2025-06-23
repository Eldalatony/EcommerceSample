import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {

    const navigate = useNavigate();

  return (
    <div className="register-page h-100 w-100 d-flex justify-content-center align-items-center py-4">
        <div className="holder bg-white h-100 rounded shadow-lg m-2 d-flex flex-column overflow-hidden">
            <div className="title flex-2 d-flex flex-column justify-content-center align-items-center bg-blue text-white py-3">
                <div><span className="fw-bold fs-3">Create Your Account</span></div>
                <div><span className="text-gray">Join our community today</span></div>
            </div>
            <div className="data flex-7 p-3">
                <form action="" className="d-flex flex-column justify-content-center gap-4 h-100">
                    <div className="">
                        <label htmlFor="username" className="form-label fw-semibold">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                    </div>
                    <div className="">
                        <label htmlFor="email" className="form-label fw-semibold">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="">
                        <label htmlFor="password" className="form-label fw-semibold">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                    </div>
                    <div className="">
                        <input type="checkbox" />
                        <label htmlFor="password" className="form-label px-2">I agree to Terms and Privacy Policy</label>
                    </div>
                    <div className=''>
                        <button type="submit" className="btn btn-primary w-100">Register</button>
                    </div>
                </form>
            </div>
            <div className="switch flex-1 d-flex justify-content-center align-items-center">
                <div><span>Already have an account?</span><span className='hello text-primary text-decoration-underline cursor-pointer' onClick={()=>{navigate('/auth/login')}}> log in here</span></div>
            </div>
        </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <div className="register-page h-100 w-100 d-flex justify-content-center align-items-center">
        <div className="holder bg-white w-50 h-75 rounded shadow-lg p-3 d-flex flex-column">
            <div className="title flex-2 d-flex flex-column justify-content-center align-items-center">
                <div><span>Create Your Account</span></div>
                <div><span>Join our community today</span></div>
            </div>
            <div className="data flex-7">
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                    </div>
                    <div className="mb-3">
                        <input type="checkbox" />
                        <label htmlFor="password" className="form-label px-2">I agree to Terms and Privacy Policy</label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
            </div>
            <div className="switch flex-1 d-flex justify-content-center align-items-center">
                <div><span>Already have an account?</span><a href=""> login in here</a></div>
            </div>
        </div>
    </div>
  );
}

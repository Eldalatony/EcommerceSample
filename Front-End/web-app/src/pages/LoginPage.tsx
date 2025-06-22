export default function LoginPage() {
  return (
    <div className="register-page h-100 w-100 d-flex justify-content-center align-items-center">
        <div className="holder bg-white w-50 h-75 rounded shadow-lg p-3 d-flex flex-column">
            <div className="title flex-2 d-flex flex-column justify-content-center align-items-center">
                <div><span>Welcome Back</span></div>
            </div>
            <div className="data flex-7 d-flex justify-content-center align-items-center w-100">
                <form action="" className="w-100">
                    <div className="mb-3 ">
                        <label htmlFor="username" className="form-label">Username or Email</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
            </div>
            <div className="switch flex-1 d-flex justify-content-center align-items-center">
                <div><span>create new account?</span><a href=".."> signup in here</a></div>
            </div>
        </div>
    </div>
  );
}

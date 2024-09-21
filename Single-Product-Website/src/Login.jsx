
import { Link } from "react-router-dom";
import "./App.css"

const Login = () => {
  return (
    <div>
      <div className="imgs bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
    
        
        <div className="flex justify-center items-center my-5 mt-20 mb-[230px] ">

        <div className="w-96  bg-transparent bg-base-100 shadow text-center border border-[#FFDAD2]">
          <div className="m-5 ">
            <h2 className="text-3xl text-primary mb-4 font-[GreatVibes] text-md">Login</h2>
           
        <form action="">
              <div className="form-control w-full max-w-xs mb-4">
                <label className="label" htmlFor="">
                  <span className="label-text flex justify-start"></span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs mb-4">
                <label className="label" htmlFor="">
                  <span className="label-text flex justify-start"></span>
                </label>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs mb-4">
                <label className="label" htmlFor="">
                  <span className="label-text flex justify-start"></span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <Link to ="/">
              <input type="submit" value="Login " className="  bg-blue-500 max-w-[100px] rounded-lg px-3 py-2 border border-gray-600 text-black w-full my-5"/></Link>
            </form>
            <p className="font-[GreatVibes] text-base">Are you new Here? please <a href="" className="text-blue-500 font-[GreatVibes] text-base">signup</a></p>
      </div>
    </div>
    </div></div>
    </div>
  );
};

export default Login;

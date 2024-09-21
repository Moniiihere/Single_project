
import "./App.css"

const Feedback = () => {
  return (
    <div>
        <div>
      <div className="image bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
    
        
        <div className="flex justify-center items-center my-5 mt-20 mb-[230px] ">
        <div className="w-96 bg-base-100 shadow text-center mt-8 border border-[#FCD1C2]">
          <div className="m-5 ">
            <h2 className="text-3xl text-primary mb-4 font-[GreatVibes] text-md">
              Feedback
            </h2>
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
                  type="tel"
                  id="phone"
                  placeholder="phone"
                  pattern="[6-9]{1}[0-9]{9}"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs mb-4">
                <label className="label" htmlFor="">
                  <span className="label-text flex justify-start"></span>
                </label>
                <textarea
                  rows="4"
                  type="text"
                  placeholder="Type your message here..."
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <input
                type="submit"
                value="Submit "
                className="  bg-blue-500 max-w-[100px] rounded-lg px-3 py-2 border border-gray-600 text-black w-full my-5"
              />
            </form>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Feedback

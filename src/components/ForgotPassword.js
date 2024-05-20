import React from "react";

export default function ForgotPassword() {
  return (
    <div className="gradient h-screen w-[100%]  text-white  flex justify-center flex-col gap-[40px] p-4 items-center ">
      <div className="GROUPE flex w-[100%] flex-col text-center">
        <div className="text-[60px]">mindSCAPE</div>
        <div className="text-[30px]">VISUALIZING THOUGHTS</div>
      </div>
      <div className="relative pt-[100px] pb-[100px] gradient-box pr-[150px] pl-[150px] rounded-[70px] flex flex-col text-center justify-center content-center gap-[30px] shadow-[3px_5px_8px_0px_rgb(255,255,255)] items-center">
        <div className="title flex flex-col text-center gap-[4px]">
          <div className="text-[40px] mb-[30px]">Forgot Password</div>
        </div>
        <form>
          <div className="flex  flex-col gap-[20px] items-center">
            <input
              type="email"
              className="p-[20px] rounded-[50px] text-black  border-none w-[120%] text-[20px] placeholder-black"
              placeholder="Email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="p-[20px] rounded-[50px]  text-black border-none w-[120%] text-[20px] placeholder-black"
              placeholder="New Password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              className="p-[20px] rounded-[50px]  text-black border-none w-[120%] text-[20px] placeholder-black"
              placeholder="Comform Password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div
              id="alert"
              className="self-end mr-[30px] cursor-pointer text-rose-400"
            ></div>

            <button
              type="submit"
              className="  rounded-[50px] w-[90%] p-[20px] bg-black cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </form>
        <button
          // onClick={SignInwithGoogle}
          className="w-[30px] absolute right-[20%] bottom-[21%] cursor-pointer "
        >
          {/* <img src={GOOGLE} /> */}
        </button>
      </div>
    </div>
  );
}

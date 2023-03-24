"use client";

import getSplash from "app/errorSplash";

const Error = () => {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center">
      <div className="card z-50 w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">There was an error :-/</h2>
          <p className="opacity-25">{getSplash()}</p>
        </div>
      </div>
    </div>
  );
}

export default Error;

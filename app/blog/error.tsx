"use client";

import { getErrorSplash } from "app/splashes";
import Link from "next/link";

const Error = () => {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center">
      <div className="card z-50 w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">There was an error :-/</h2>
          <p className="opacity-25">{getErrorSplash()}</p>
          <div className="card-actions justify-end">
            <Link href="/">
              <button className="btn-primary btn">Go back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;

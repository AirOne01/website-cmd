import getSplash from "app/splash";
import Spinner from "./Spinner";

export default function Loading() {
  return (
    <div>
      <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center">
        <div className="card z-50 w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <Spinner /> Loading...
            </h2>
            <p className="opacity-25">{getSplash()}</p>
          </div>
        </div>
      </div>
      <div className="text-transparent">
        <h1 className="mb-4 w-fit animate-pulse rounded-lg bg-[#211f2e] text-6xl">
          Loading...
        </h1>
        {Array.from({ length: 10 }).map((_, i) => (
          <p
            key={i}
            className="mb-2 w-fit animate-pulse rounded-lg bg-[#211f2e] text-2xl"
          >
            {Array.from({
              length: Math.floor(Math.random() * 50 + 25) + 1,
            }).map(() => "#")}
          </p>
        ))}
      </div>
    </div>
  );
}

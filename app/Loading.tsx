import Spinner from "./Spinner";
import { getLoadingSplash } from "./splashes";

export const LoadingModal = () => {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center">
      <div className="z-50 w-96 bg-black">
        <div className="flex flex-col gap-2">
          <h2 className="flex items-end gap-2 text-2xl">
            <Spinner /> Loading...
          </h2>
          <p className="text-[#555]">{getLoadingSplash()}</p>
        </div>
      </div>
    </div>
  );
};
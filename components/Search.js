import { SearchIcon, XCircleIcon } from "@heroicons/react/outline";

function Search({ showSearch }) {
  return (
    <div className="absolute top-24  z-10 flex h-14 w-[32rem] items-center justify-center border bg-white/95">
      <SearchIcon className="ml-6 h-6 w-6" />

      <input className="mx-auto w-[80%] border-b bg-transparent pt-2 underline outline-none" />
      <div className="mr-6">
        <XCircleIcon
          className="h-6 w-6 cursor-pointer text-grey/75 hover:scale-95 hover:text-grey/100 active:scale-100"
          onClick={showSearch}
        />
      </div>
    </div>
  );
}

export default Search;

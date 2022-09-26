import { SearchIcon, XCircleIcon } from "@heroicons/react/outline";
import useTranslation from "next-translate/useTranslation";

function Search({ showSearch }) {
  let { t } = useTranslation("common");

  return (
    <div className="absolute top-24  z-10 flex h-14 w-[32rem] items-center justify-center border bg-white/95">
      <SearchIcon className="ml-4 h-6 w-6" />

      <input
        className="mx-auto ml-2 w-[80%] border-b bg-transparent py-2 text-sm outline-none"
        placeholder= {t("search.placeholder")}
      />
      <div className="bg-grey/10 rounded-xl py-2 px-4 uppercase text-xs font-bold text-grey/30 absolute right-14 hover:bg-grey/20 active:scale-95 cursor-pointer">
      {t("search.search")}

      </div>
      <div className="mr-4">
        <XCircleIcon
          className="h-6 w-6 cursor-pointer text-grey/75 hover:scale-90 hover:text-grey/100 active:scale-100"
          onClick={showSearch}
        />
      </div>
    </div>
  );
}

export default Search;

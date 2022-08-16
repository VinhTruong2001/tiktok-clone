import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/solid";

export default function Header() {
  const [focusSearch, setForcusSearch] = useState<boolean>(false);

  const handleFocusSearch = () => {
    setForcusSearch((focusSearch) => !focusSearch);
  };

  return (
    <header className="flex items-center h-[60px] px-2 sm:px-4 border-b border-[#e0e0e0] justify-between">
      <Link href="/">
        <a className="">
          <Image
            src="https://www.freepnglogos.com/uploads/tik-tok-logo-png/file-logo-tik-tok-svg-20.png"
            height="30"
            width="118"
          />
        </a>
      </Link>

      <div
        className={`h-[46px] bg-[#f1f1f2] rounded-full px-4 py-3 flex items-center ${
          focusSearch && "border-[#afb0b4] border"
        }`}
      >
        <input
          type="search"
          className="h-[22px] w-[292px] bg-transparent placeholder:text-[#929292] outline-none border-r border-[#d5d6d8]"
          placeholder="Tìm kiếm tài khoản và video"
          onFocus={handleFocusSearch}
          onBlur={handleFocusSearch}
        />

        <button className="pl-3">
          <SearchIcon className="w-6 h-6 text-[#afb0b4]" />
        </button>
      </div>

      <button className="h-9 w-25 text-white px-4 py-[6px] font-bold rounded-md bg-[#fe2c55]">Đăng nhập</button>
    </header>
  );
}

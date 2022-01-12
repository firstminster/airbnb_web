import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          alt="logo"
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </div>
  );
}

export default Header;

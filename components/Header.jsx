import Image from 'next/image'
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 items-center gap-3 bg-white p-3  shadow-md md:px-10">
      {/* left */}
      <div className="relative flex h-10 items-center justify-between">
        <src
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          width="100px"
          height="50px"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle */}
      <div className="flex items-center rounded-full border-2 border-slate-400 py-2 pr-2 md:border-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="w-full flex-grow bg-transparent pl-5 text-sm text-gray-400 outline-none md:flex-auto"
        />
        <MagnifyingGlassIcon className="bg-red-400 hidden h-8 cursor-pointer rounded-full  text-white md:inline-flex" />
      </div>

      {/* right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer px-3 py-1 font-semibold hover:rounded-full hover:border-2 hover:border-slate-400 md:inline">
          become host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 rounded-full border-2 border-slate-400 px-3 py-1">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Header

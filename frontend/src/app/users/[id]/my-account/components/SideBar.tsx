
interface SideBarProps {
  option: string;
  setOption: (option: string) => void;
}

export default function SideBar ({ option, setOption }: SideBarProps) {

  const options = [
    "Personal information",
    "My stickers",
    "Favourites",
    "Purchases"
  ]

  return (
    <div className="w-100 bg-white border-r border-gray-200 p-6 shadow-md">
        {/* User Profile Header */}
        <div className="flex flex-col items-center space-y-4 mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-fk-lila to-fk-violet rounded-full flex items-center justify-center shadow-lg">
            {/* User icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.578 15.482c-1.415.842-5.125 2.562-2.865 4.715C4.816 21.248 6.045 22 7.59 22h8.818c1.546 0 2.775-.752 3.878-1.803c2.26-2.153-1.45-3.873-2.865-4.715a10.66 10.66 0 0 0-10.844 0M16.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" color="currentColor" />
            </svg>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900">Username</h2>
            <p className="text-sm text-blue-600">email@example.com</p>
            <p className="text-sm text-gray-500 mt-1">Name Surname</p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-200 mb-6"></div>

        {/* Navigation Menu */}
        <nav className="space-y-2">
          <button onClick={() => setOption("Personal information")} className={`w-full flex items-center justify-start px-4 py-2 rounded-xl ${option === "Personal information" ? "bg-gradient-to-r from-fk-lila to-fk-white text-fk-violet" : "text-fk-dark-gray"} hover:bg-blue-100 duration-200 transition-colors`}>
            {/* User settings icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="mr-3">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 14.012a10.6 10.6 0 0 0-5.922 1.47c-1.415.842-5.125 2.562-2.865 4.715C3.816 21.248 5.045 22 6.59 22H12m3.5-15.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M18 20.714V22m0-1.286a3.36 3.36 0 0 1-2.774-1.43M18 20.713a3.36 3.36 0 0 0 2.774-1.43M18 14.285c1.157 0 2.176.568 2.774 1.43M18 14.287a3.36 3.36 0 0 0-2.774 1.43M18 14.287V13m4 1.929l-1.226.788M14 20.07l1.226-.788M14 14.93l1.226.788M22 20.07l-1.226-.788m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566" />
            </svg>
            Personal information
          </button>

          <button onClick={() => setOption("My stickers")} className={`w-full flex items-center justify-start px-4 py-2 rounded-xl ${option === "My stickers" ? "bg-gradient-to-r from-fk-lila to-fk-white text-fk-violet" : "text-fk-dark-gray"} hover:bg-blue-100 hover:text-fk-violet duration-200 transition-colors`}>
            {/* Stickers icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="mr-3">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                <path d="m16.596 20.699l-2.445.647c-2.263.6-3.395.899-4.281.408c-.887-.49-1.182-1.58-1.773-3.758l-1.462-5.391c-.59-2.179-.886-3.268-.367-4.13c.52-.863 1.651-1.163 3.914-1.762l4-1.06c2.264-.598 3.395-.898 4.282-.407c.886.49 1.182 1.58 1.772 3.758l1.468 5.413c.251.926.377 1.39.239 1.825m-5.347 4.457c.752-.2.758-.202 1.343-.704l2.743-2.355c.749-.642 1.123-.963 1.261-1.398m-5.347 4.457s.588-4.593 1.904-5.199c1.493-.687 3.443.742 3.443.742" />
                <path d="M17 5.001c-.064-1.073-.243-1.749-.752-2.233c-.78-.742-2.03-.746-4.532-.754l-4.423-.013c-2.502-.007-3.753-.01-4.528.727s-.771 1.928-.764 4.31l.018 5.893c.008 2.381.011 3.572.79 4.314c.78.742 2.031.746 4.533.753l.681.002" />
              </g>
            </svg>
            My stickers
          </button>

          <button onClick={() => setOption("Favourites")} className={`w-full flex items-center justify-start px-4 py-2 rounded-xl ${option === "Favourites" ? "bg-gradient-to-r from-fk-lila to-fk-white text-fk-violet" : "text-fk-dark-gray"} hover:bg-blue-100 hover:text-fk-violet duration-200 transition-colors`}>
            {/* Hearth icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="mr-3">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
            </svg>
            Favourites
          </button>

          <button onClick={() => setOption("Purchases")} className={`w-full flex items-center justify-start px-4 py-2 rounded-xl ${option === "Purchases" ? "bg-gradient-to-r from-fk-lila to-fk-white text-fk-violet" : "text-fk-dark-gray"} hover:bg-blue-100 hover:text-fk-violet duration-200 transition-colors`}>
            {/* Shopping Bag icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="mr-3">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                <path d="m3.062 15.193l.365-2.071c.432-2.448.647-3.672 1.502-4.397S7.012 8 9.467 8h5.066c2.455 0 3.683 0 4.538.725s1.07 1.949 1.502 4.397l.365 2.071c.598 3.388.896 5.082-.023 6.195c-.92 1.112-2.62 1.112-6.017 1.112H9.102c-3.398 0-5.097 0-6.017-1.113s-.62-2.806-.023-6.194M7.5 8l.168-2.014a4.347 4.347 0 0 1 8.664 0L16.5 8" />
                <path d="M15 11c-.13 1.413-1.434 2.5-3 2.5S9.13 12.413 9 11" />
              </g>
            </svg>
            Purchases
          </button>
        </nav>
      </div>
  );
}
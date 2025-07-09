
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./components/SearchBar";

export default function Header() {
  return (
    <header className="bg-fk-violet text-white px-4 py-3">
      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src="/fk-stickers-logo-white.png"
              alt="FK Stickers logo"
              width={180}
              height={38}
              priority
            />

          </div>
          <h1 className="l-4 text-3xl font-poppins font-thin font-fk-white flex items-end gap-1"><span className="text-4xl font-[550]">FK</span> stickers</h1>
        </Link>

        {/* Search Bar */}
        <div className="flex justify-center items-center w-full">
          <SearchBar className="text-gray-400"/>
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center justify-end gap-4">
          <Link href="#" className="text-fk-white hover:text-fk-lila hover:drop-shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
                <path d="m18.058 8.536l-1-.613C16.055 7.308 15.554 7 15 7s-1.055.308-2.058.923l-1 .613c-.949.582-1.423.873-1.682 1.342c-.26.47-.26 1.035-.26 2.166v5.865c0 1.929 0 2.893.586 3.492S12.114 22 14 22h2c1.886 0 2.828 0 3.414-.6c.586-.598.586-1.562.586-3.49v-5.866c0-1.131 0-1.697-.26-2.166s-.733-.76-1.682-1.342" />
                <path d="M14 7.108c-.639-.613-1.02-.935-1.503-1.056c-.56-.141-1.148.017-2.325.333L9 6.699c-1.113.3-1.67.448-2.056.817c-.387.37-.537.894-.836 1.943l-1.554 5.438c-.51 1.788-.766 2.682-.332 3.387c.372.605 1.862 1.35 3.279 1.716" />
                <path d="M14.495 10c.841-.56 1.588-1.457 2.052-2.573c.958-2.305.347-4.67-1.363-5.281c-1.711-.612-3.875.76-4.833 3.065A6 6 0 0 0 10 6.364" />
              </g>
            </svg>
          </Link>

          <div className="w-px h-8 bg-purple-400" />

          <Link href="#" className="text-fk-white hover:text-fk-lila hover:drop-shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
                <path d="M12 21c-1.341 0-2.114-.572-3.66-1.717C.222 13.275 1.018 6.153 4.537 3.994c2.682-1.645 5.023-.982 6.429.074c.576.433.864.65 1.034.65s.458-.217 1.034-.65c1.406-1.056 3.747-1.719 6.429-.074C21.18 5.048 22.25 7.286 21.949 10" />
                <path d="M14 18s1 0 2 2c0 0 3.177-5 6-6" />
              </g>
            </svg>
          </Link>

          <Link href="#" className="text-fk-white hover:text-fk-lila hover:drop-shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
                <path d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93c.239-1.187.358-1.78.071-2.175s-.837-.395-1.938-.395H6" />
                <path d="M8 16L5.379 3.515A2 2 0 0 0 3.439 2H2.5m6.38 14h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5" />
                <circle cx="10.5" cy="20.5" r="1.5" />
                <circle cx="17.5" cy="20.5" r="1.5" />
              </g>
            </svg>
          </Link>

          <div className="w-px h-8 bg-purple-400" />

          <div className="flex flex-col items-end gap-1">
            {/* UNLOGGED */}

            {/* LogIn */}
            <Link href="login" className="flex items-center gap-2 text-fk-white hover:text-fk-lila hover:drop-shadow-lg">
              <span className="text-sm">Login</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 3l-.663.234c-2.578.91-3.868 1.365-4.602 2.403S4 8.043 4 10.777v2.445c0 2.735 0 4.102.735 5.14c.734 1.039 2.024 1.494 4.602 2.404L10 21m0-9h10m-10 0c0-.7 1.994-2.008 2.5-2.5M10 12c0 .7 1.994 2.008 2.5 2.5" color="currentColor" />
              </svg>
            </Link>

            {/* SignUp */}
            <Link href="/signup" className="flex items-center gap-2 text-fk-white hover:text-fk-lila hover:drop-shadow-lg">
              <span className="text-sm">Signup</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.5 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715A10.65 10.65 0 0 1 15 14.78m1.5-8.28a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m2 15.5v-7M15 18.5h7" color="currentColor" />
              </svg>
            </Link>


            {/* LOGGED */}
            {/*
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor">
                <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" />
                <path d="M14.75 9.5a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0M5.5 19l.56-.98a5 5 0 0 1 4.342-2.52h3.196a5 5 0 0 1 4.342 2.52l.56.98" />
              </g>
            </svg>

            <span className="text-sm">Username</span>*/}
          </div>
        </div>
      </div>
    </header>
  )
}

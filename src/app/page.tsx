export default function Home() {
  return (
    <div className="min-h-screen px-24 py-4 bg-blue">
      <header className="flex justify-between my-8 items-center bg-white border-[5px] border-black rounded-none">
        <h1 className="text-xl px-4 border-r-[8px] border-black text-white bg-black hover:text-blue hover:cursor-pointer transition-colors duration-100">Dzikran Azka Sajidan</h1>
        <button className="px-8 rounded-none border-l-[5px] border-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth={2.2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>
      <div className="flex flex-col my-8 items-start bg-white border-[5px] border-black rounded-none p-8">
        <h2 className="text-6xl mb-4">Hi, I'm Dzikran.</h2>
        <p className="text-2xl">
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products at Upstatement.
        </p>
      </div>
      {/* The rest of the page content will go here */}
      
      {/* Coming Soon*/}
      <h2 className="text-8xl mt-20 mb-6 text-white text-center w-full">Coming Soon</h2>
    </div>
  );
}

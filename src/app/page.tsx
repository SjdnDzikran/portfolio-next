export default function Home() {
  return (
    <div className="min-h-screen px-24 py-12 bg-blue">
      <header className="flex justify-between items-center bg-white border-[5px] border-black rounded-none">
        <h1 className="text-2xl px-4 border-r-[5px] border-black text-white bg-black hover:text-blue transition-colors duration-100">Dzikran Azka Sajidan</h1>
        <button className=" px-4 rounded-none border-l-[5px] border-black"> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-12 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth={3}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>
      {/* The rest of the page content will go here */}
    </div>
  );
}

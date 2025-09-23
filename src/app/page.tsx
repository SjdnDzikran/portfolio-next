export default function Home() {
  return (
    <div className="min-h-screen px-24 py-12 bg-blue">
      <header className="flex justify-between items-center bg-white border-[5px] border-black rounded-none">
        <h1 className="text-2xl px-4 border-r-[5px] border-black text-white bg-black hover:text-blue transition-colors duration-100">Dzikran Azka Sajidan</h1>
        <button className="p-1 pr-4"> {/* Adjusted padding to make it less prominent, but still clickable */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7" /* Adjusted size to be slightly larger, closer to text height */
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>
      {/* The rest of the page content will go here */}
    </div>
  );
}

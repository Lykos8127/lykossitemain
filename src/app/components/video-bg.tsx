const Main = () => (
  <div className="relative w-screen h-screen overflow-hidden">
    {/* Hintergrund-Video */}
    <video
      src="/keycapvideo1.mp4"
      autoPlay
      loop
      muted
      className="absolute inset-0 w-full h-full object-cover z-0"
    />

    {/* dunkle Überlagerung für bessere Lesbarkeit */}
    <div className="absolute inset-0 bg-black/40" /> 

    {/* Vordergrund-Content */}
    <div className="relative z-6 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-[5.3rem] leading-[5.5rem] font-extrabold text-white whitespace-nowrap">
        FORGED IN CARBON
      </h1>

      <p className="mt-4 text-xl md:text-2xl text-gray-200">
        60 % lighter than aluminium. 10 × tougher than plastic.<br />
        Built to last.
      </p>

      <button className="mt-8 px-8 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300">
        Discover now
      </button>
    </div>
  </div>
);

export default Main;

    
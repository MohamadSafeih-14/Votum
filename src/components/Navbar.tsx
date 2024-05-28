import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full h-fit px-[10%]">
      <nav className="flex items-center justify-between w-full h-[100px] p-4 bg-white rounded-2xl px-[4%]">
        <h1 className="w-1/6 text-2xl font-bold tracking-widest">VOTUM</h1>
        <ul className="flex justify-between w-3/6 text-[#7F7F7F]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Key Features</li>
          <li className="text-[#6680FF]">AI Features</li>
          <li className="cursor-pointer">Contact us</li>
        </ul>
        <div className="flex justify-end w-3/6">
          <button className="w-1/3 font-bold rounded-xl text-[#1B1B1B]">Login</button>
          <button className="w-1/3 px-4 py-3 font-bold text-white bg-[#1B1B1B] rounded-xl">Register for free</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


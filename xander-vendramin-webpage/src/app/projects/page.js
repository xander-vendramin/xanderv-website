import Image from "next/image";

export default function Home() {
  return (
  //Navbar outline provided by tailwind open source code
  <div>
  <nav className="bg-slate-700">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 md:px-8 lg:px-8">
    <div className="relative flex h-5 md:h-20 lg:h-20  items-center justify-between">
      <div className="flex flex-1 items-center justify-center">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="\" className="rounded-md px-3 py-2 text-sm font-medium font-[family-name:var(--font-oswald)] text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
            <a href="/projects" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium font-[family-name:var(--font-oswald)] text-white" aria-current="page">Projects</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3">
      <a href="\" className="text-center m-auto block w-1/3 rounded-md px-3 py-2 font-medium font-[family-name:var(--font-oswald)] text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
      <a href="/projects" className="text-center m-auto block w-1/3 bg-gray-900 rounded-md px-3 py-2 font-medium font-[family-name:var(--font-oswald)] text-white" aria-current="page">Projects</a>  
    </div>
  </div>
</nav>
<div
  className="relative h-[400px] overflow-hidden opacity-80 rounded-lg bg-[url('https://tecdn.b-cdn.net/img/new/slides/041.webp')] bg-cover bg-no-repeat p-12 text-center text-white">
  <div
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
    <div className="flex h-full items-center justify-center">
      <div className="text-white">
        <h2 className="mb-4 text-5xl font-semibold font-[family-name:var(--font-oswald)] text-shadow-lg">Projects</h2>
      </div>
    </div>
  </div>
</div>
      <div className="font-[family-name:var(--font-roboto)] text-white bg-gradient-to-bl from-slate-900 to-gray-950 min-h-screen">
      <div className="grid grid-rows-1 md:grid-rows-1 lg:grid-cols-3 gap-3 p-4 md:ml-15 md:mr-15 lg:ml-20 lg:mr-20">
        <div className="">
          <div className="p-2 border-1 border-solid rounded-lg shadow-lg bg-linear-to-t from-slate-700 to-slate-600 border-slate-700">
          <p className="text-shadow-lg text-2xl mb-3 place-self-center"><u>Unity VR Showcase</u></p>
          <iframe className="justify-self-center border-solid rounded-b-md mb-3" height="300" width="100%" src="https://www.youtube.com/embed/hw_NRuF31b4" allowFullScreen></iframe>
            <p className="justify-self-center">Stack Used: Unity, C#, OVR</p>
            <br></br>
            <p className="text-center">This is a University project that I worked on for a class I took about developing software for Virtual Reality. I worked on the project
            by myself within a timeframe of about one month. I was responsible for everything in the project except the actual
            creation of models and assets, which were all free open source assets. This project was my first time using Unity and
            C# for a project of this scale, and I was specifically proud of how I managed to take on a new programming language
            and work environment while creating a final project I was very happy with.
            </p>
          </div>
        </div>
        <div className="">
          <div className="p-2 border-1 border-solid rounded-lg shadow-lg bg-linear-to-t from-slate-700 to-slate-600 border-slate-700">
            <p className="place-self-center mb-3"><a href="https://film-finder-publish.vercel.app/" className="text-shadow-lg text-2xl text-blue-500"  target="_blank"><u>Film Finder - Click to View</u></a></p>
            <p className="justify-self-center">Stack Used: React, NextJS, ChakraUI, MongoDB</p>
            <br></br>
            <p className="text-center">Film Finder is a website I worked on in University on with a team of five people. We had a limited timeline
              to create a fully functioning full stack website for our final project. My main contribution to this project was
              the back end. I designed account creation and adjustments, login validation, and account storage in a MongoDB database. I
              also worked on the website's ability to fetch movie reviews, rating, and other information on the page. I also
              contributed some front end work on pages such as the user profile page, user reviews page, friend list page, and a 
              few other adjustments across other pages. <br></br> I decided to take the code for this website and adjust it so
              it could be hosted on Vercel. As of now, all of the functionality I worked on is able to be used on the website,
              but I am working on trying to get our Python integration to work on the hosted website.
            </p>
          </div>
        </div>
        <div className="">
        <div className="p-2 border-1 border-solid rounded-lg shadow-lg bg-linear-to-t from-slate-700 to-slate-600 border-slate-700">
          <p className="text-shadow-lg text-2xl mb-3 place-self-center"><u>Unity Level Generation</u></p>
          <iframe className="justify-self-center border-solid rounded-b-md mb-3" height="300" width="100%" src="https://www.youtube.com/embed/FU0A3x0K6k8" allowFullScreen></iframe>
          <p className="justify-self-center">Stack Used: Unity, C#</p>
            <br></br>
            <p className="text-center">This is a demo of some of my recent independent game development work. This specific showcase is meant to 
              display the functionality of level generation in my game, which utilizes some of the more complex code I've written
              for this project. The level generation works by placing rooms of interest in a grid, then I use some math (Delauny
              Triangulation) to plot hallways from room to room, and then premade assets are placed in the game
              space for both hallways and rooms of interest. I was proud of my ability to learn and understand a new way to solve a complicated problem 
              and implement it effectively and modularly into this project.
            </p>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

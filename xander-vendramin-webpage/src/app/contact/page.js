import Image from "next/image";

export default function Home() {
  return (
  //Navbar outline provided by tailwind open source code
  <div>
  <nav className="bg-slate-700">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-center justify-center sm:items-stretch">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="\" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
            <a href="/projects" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pt-2 pb-3">
      <a href="\" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
      <a href="/projects" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
      
    </div>
  </div>
</nav>
      <div className="font-[family-name:var(--font-sans)] text-white bg-gradient-to-bl from-slate-900 to-gray-950 min-h-screen">
        <div className="justify-items-center place-content-center ">
          <h1 className="text-shadow-lg text-4xl mt-10">Portfolio of Xander Vendramin</h1>
      </div>
        <div className="w-2/3 justify-self-center p-5 mt-10 border-6 border-solid shadow-lg bg-slate-700 border-slate-800">
          <p>
          I am a new graduate from the University of Regina with a bachelor's degree majoring in 
          computer science. I am looking for an opportunity to use my coding skills and strong foundational
          computer science knowledge in a professional environment. I am commited to being a productive member of any team
          where I can produce consistent and efficient work. <br></br>
          </p>
          <br></br>
          <p>
            Contact Info: <br></br> Email: xvendramin@gmail.com <br></br> Phone: +1-306-552-4547 
            <br></br> LinkedIn: <a className="text-blue-500" href="https://www.linkedin.com/in/xander-vendramin/" target="_blank"><u>Click Here</u></a>
            <br></br> Resume: <a className="text-blue-500" href="Xander Vendramin Resume.pdf" download><u>Click Here</u></a>
          </p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
  //Navbar outline provided by tailwind open source code
  <div>
  <nav className="bg-slate-700">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-5 md:h-20 lg:h-20  items-center justify-between">
      <div className="flex flex-1 items-center justify-center">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="\" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium font-[family-name:var(--font-oswald)] text-white" aria-current="page">Home</a>
            <a href="/projects" className="rounded-md px-3 py-2 text-sm font-medium font-[family-name:var(--font-oswald)] text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a> 
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 place-items-center">
      <a href="\" className="text-center block w-1/3 rounded-md bg-gray-900 px-3 py-2 font-medium font-[family-name:var(--font-oswald)] text-white" aria-current="page">Home</a>
      <a href="/projects" className="text-center block w-1/3 rounded-md px-3 py-2 font-medium font-[family-name:var(--font-oswald)] text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
    </div>
  </div>
</nav>
<div
  className="relative h-[400px] opacity-80 overflow-hidden rounded-lg bg-[url('https://tecdn.b-cdn.net/img/new/slides/041.webp')] bg-cover bg-no-repeat text-center text-white">
  <div
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
    <div className="flex h-full items-center justify-center">
      <div className="text-white">
        <h2 className="mb-4 text-5xl font-semibold font-[family-name:var(--font-oswald)] text-shadow-lg">Xander Vendramin Portfolio</h2>
      </div>
    </div>
  </div>
</div>
      <div className="font-[family-name:var(--font-roboto)] text-white bg-gradient-to-bl from-slate-900 to-gray-950 min-h-screen">
        <div className="justify-items-center place-content-center ">
      </div>
        <div className="mr-3 ml-3 lg:w-2/3 place-self-center p-4 mt-4 border-1 border-solid rounded-lg shadow-lg text-xl bg-linear-to-t from-slate-700 to-slate-600 border-slate-700">
          <p>
          I am a new graduate from the University of Regina with a bachelor's degree majoring in 
          computer science. I am looking for an opportunity to use my coding skills and strong foundational
          computer science knowledge in a professional environment. I am commited to being a productive member of any team
          where I can produce consistent and efficient work. <br></br> I have experience with many different types of programming. I am
          experienced in full stack web development and specialize in NextJS frameworks. I am also experienced in software developemnt
          and related languages such as all C languages and Python. I have a comprehensive list of all languages/work environments I am familiar
          with on my resume. The projects tab of this website has a few examples of past and current examples of my work.
          </p>
          <br></br>
          <p>
            Contact Info: <br></br> Email: xvendramin@gmail.com <br></br> Phone: +1-306-552-4547 
            <br></br>
            
          </p>
          <a href="https://github.com/xander-vendramin" target="_blank">
            <button type="button" data-twe-ripple-init data-twe-ripple-color="light" className="mt-3 inline-block rounded bg-[#333] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-[#666666]">
              <span className="[&>svg]:h-4 [&>svg]:w-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </span>
            </button>
            </a>
            <a href="https://www.linkedin.com/in/xander-vendramin/" target="_blank">
            <button type="button" data-twe-ripple-init data-twe-ripple-color="light" className="ml-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:bg-[#00a8ff]">
            <span className="[&>svg]:h-4 [&>svg]:w-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                <path
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </span>
            </button>
            </a>
            <br></br>
            <a href="Xander Vendramin Resume.pdf" download>
              <button type="button" className="text-white bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-3 shadow-md focus:ring-gray-300 font-medium rounded-md text-sm mt-3 px-3 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Resume Download</button>
            </a>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="font-[family-name:var(--font-sans)] text-white bg-gradient-to-bl from-slate-900 to-gray-950 min-h-screen">
        <div className="justify-items-center place-content-center ">
          <h1 className="text-shadow-lg text-4xl mt-10">Portfolio of Xander Vendramin</h1>
      </div>
        <div className="w-1/2 justify-self-center p-2 mt-10 border-6 border-solid shadow-lg bg-slate-700 border-slate-800">
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
        <h1 className="mt-10 text-shadow-lg text-4xl justify-items-center place-self-center">Projects</h1>

      <div className="grid grid-rows-3 lg:grid-cols-3 max-h-500 lg:max-h-300 gap-3 p-6 ml-20 mr-20">
        <div className="">
          <div className="p-2 mt-5 border-6 border-solid shadow-lg bg-slate-700 border-slate-800">
          <p className="text-shadow-lg text-xl mb-3 place-self-center"><u>Unity VR Showcase</u></p>
          <iframe className="justify-self-center border-solid rounded-b-md mb-3" height="300" width="100%" src="https://www.youtube.com/embed/hw_NRuF31b4" allowFullScreen></iframe>
            <p>Stack Used: Unity, C#, OVR</p>
            <br></br>
            <p>This is a University project that I worked on for a class I took about developing software for Virtual Reality. I worked on the project
            by myself within a timeframe of about one month. I was responsible for everything in the project except the actual
            creation of models and assets, which were all free open source assets. This project was my first time using Unity and
            C# for a project of this scale, and I was specifically proud of how I managed to take on a new programming language
            and work environment while creating a final project I was very happy with.
            </p>
          </div>
        </div>
        <div className="">
          <div className="p-2 mt-5 border-6 border-solid shadow-lg bg-slate-700 border-slate-800">
            <p className="place-self-center mb-3"><a href="https://film-finder-publish.vercel.app/" className="text-shadow-lg text-xl text-blue-500"  target="_blank"><u>Film Finder - Click to View</u></a></p>
            <p>Stack Used: React, NextJS, ChakraUI, MongoDB</p>
            <br></br>
            <p>Film Finder is a website I worked on in University on with a team of five people. We had a limited timeline
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
        <div className="p-2 mt-5 border-6 border-solid shadow-lg bg-slate-700 border-slate-800">
          <p className="text-shadow-lg text-xl mb-3 place-self-center"><u>Unity Level Generation</u></p>
          <iframe className="justify-self-center border-solid rounded-b-md mb-3" height="300" width="100%" src="https://www.youtube.com/embed/FU0A3x0K6k8" allowFullScreen></iframe>
          <p>Stack Used: Unity, C#</p>
            <br></br>
            <p>This is a demo of some of my recent independent game development work. This specific showcase is meant to 
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

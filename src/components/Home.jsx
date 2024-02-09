import React from "react";
import img from "./../assets/Shantnu_Anand.jpg";

const Home = () => {
  return (
    <>
      <div className="bg-HomeColor h-auto flex">
        <div>
          <div className="p-10">
            <img
              className="h-[250px] w-[250px] rounded-full"
              src={img}
              href=""
            />
          </div>
          <h1 className="text-white text-xl font-[500] pl-10">Shantnu Anand</h1>
          <h1 className="text-gray-500 text-xl font-[500] pl-10">
            shantnuanand
          </h1>
          <a
            target="_blank"
            href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fshantnuanand"
          >
            <button className="text-white bg-headingColor w-[250px] rounded-md pt-2 pb-2 ml-10 mt-4 hover:text-gray-700 hover:bg-white">
              Follow
            </button>
          </a>
          <h1 className="text-white text-md font-[500] w-[290px] pl-10 mt-4">
            Hi there! I'm a developer with a strong foundation in computer
            science principles and a passion for creating intuitive,
            user-friendly websites.
          </h1>
        </div>
        <div className="pt-10">
          <div className="flex list-none text-white">
            <i className="ri-book-open-line"></i>
            <li className="ml-2 border-b border-orange-500">Overview</li>
            <i className="ri-git-repository-line ml-6"></i>
            <li className="ml-2">Repositories</li>
            <i className="ri-folder-2-line ml-6"></i>
            <li className="ml-2">Projects</li>
            <i className="ri-box-3-line ml-6"></i>
            <li className="ml-2">Packages</li>
            <i className="ri-star-line ml-6"></i>
            <li className="ml-2">Stars</li>
          </div>
          <div className="text-white border border-gray-500 rounded mt-6 w-[980px] h-auto p-2">
            <h1 className="pt-4 pl-4 text-white">shantnuanand/README.md</h1>
            <div className="divide-y divide-gray-500">
              <h1 className="text-2xl p-4">
                <b>✨About Me :</b>
              </h1>
              <div className="pl-4">
                <h1 className="pt-4 pb-[2px]">🎓 Passionate BCA graduate with expertise in web development, specializing in React JS.</h1>
                <h1 className="pb-[2px]">
                💻 Proficient in HTML, CSS, and JavaScript, React JS with a keen eye for detail in crafting seamless user experiences.
                </h1>
                <h1 className="pb-[2px]">
                🚀 Well-versed in utilizing Tailwind CSS and Bootstrap to enhance project aesthetics.
                </h1>
                <h1 className="pb-[2px]">🔄 Adept at version control with Git and experienced in collaborative coding on GitHub.</h1>
                <h1 className="pb-[2px]">
                🌟 Eager to contribute innovative solutions and learn in a dynamic work environment.</h1>
                <h1 className="pb-[2px]">
                📈 Committed to continuous improvement and staying abreast of the latest industry trends.
                </h1>
                <h1 className="pb-[2px]">🌐 Excited about leveraging skills to contribute to cutting-edge projects and thrive in the world of React JS development.</h1>
                <h1 className="pb-[2px]">🕶 My github link: <a className="text-blue-500" href="https://github.com/shantnuanand" target="_blank">https://github.com/shantnuanand</a></h1>
                <h1 className="pb-[2px]">Fun Fact: I love music and sketching</h1>
              </div>
            </div>
            <div className="divide-y divide-gray-500">
              <h1 className="text-2xl p-4">
                <b>🧿Socials :</b>
              </h1>
              <div className="pl-4">
                <button className="text-white bg-pink-600 w-[100px] rounded-sm mr-2 mt-2">
                  <i className="ri-instagram-line"></i>Instagram
                </button>
                <button className="text-white bg-blue-600 w-[100px] rounded-sm mr-2 mt-2">
                  <i className="ri-linkedin-box-fill"></i>Linkedin
                </button>
                <button className="text-white bg-red-600 w-[100px] rounded-sm mr-2 mt-2">
                  <i className="ri-youtube-fill"></i>Youtube
                </button>
              </div>
            </div>

            <div className="divide-y divide-gray-500">
              <h1 className="text-2xl pt-6 pl-4">
                <b>🎓Tech Stack :</b>
              </h1>
              <div className="pl-4">
                <button className="text-white bg-orange-600 pr-2 pl-2 rounded-sm mr-2 mt-2">
                  Html
                </button>
                <button className="text-white bg-blue-600 pr-2 pl-2 rounded-sm mr-2 mt-2">
                  Css
                </button>
                <button className="text-white bg-yellow-500 pr-2 pl-2 rounded-sm mr-2 mt-2">
                  Javascript
                </button>
                <button className="text-white bg-purple-600 pr-2 pl-2 rounded-sm mr-2 mt-2">
                  React JS
                </button>
                <button className="text-white bg-blue-600 pr-2 pl-2 rounded-sm mr-2 mt-2">
                  Tailwind Css
                </button>
                <button className="text-white bg-green-600 pr-2 pl-2 rounded-sm mr-2 mt-2">
                  Bootstrap
                </button>
                <button className="text-white bg-zinc-600 pr-2 pl-2 rounded-sm mr-2 mt-2">
                  Git & Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import '../App.css';
import Contacts from './Contacts';

function Home() {
    return (
      <div className="w-full max-w-[1200px] bg-secondary-background ">
        <div className="grid justify-center grid-flow-row md:grid-flow-col md:grid-cols-2 px-5 my-12 gap-8">
          {/* Image Section */}
          <div className="flex justify-center lato-light align-middle items-center">
            <img src= "/Steve.png" alt="Steve Francis King" className="rounded-full w-64 h-64 md:w-96 md:h-96 shadow-2xl" />
          </div>
  
          {/* Text Section */}
          <div className="flex flex-col items-center justify-center md:justify-start pt-8 text-center px-4">
            <h1 className="text-4xl leading-tight mb-6 lato-bold text-main-color">
              Meet Steve Francis King!
            </h1>
  
            <p className="text-lg md:text-lg leading-7 md:leading-8 px-6 py-4 lato-regular text-justify text-white">
              An aspiring Software Engineer, Game Developer, and Application Developer third year Computer Science student of Visayas State University who is passionate in his studies, capable of providing quality works, and able to compromise to achieve results.
            </p>
  
            <div className="flex justify-center mt-4">
              <a href="/PADA_Resume.pdf" download="PADA_Resume.pdf">
                <button
                  type="button"
                  className="text-dark-color border border-secondary-color bg-accent-color hover:bg-secondary-accent-color transition-colors duration-300 ease-in-out lato-regular font-medium rounded-full text-lg px-5 py-2.5 text-center mb-2 shadow-2xl"
                >
                  Download Resume
                </button>
              </a>
            </div>
            <Contacts id="Contacts" />
          </div>
        </div>
      </div>
    );
  }

  export default Home;
  
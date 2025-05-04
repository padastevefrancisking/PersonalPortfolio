import './../App.css';
import IconList from './Contacts';

function Home({id}) {
    return (
      <div id={id} className="w-full max-w-[1200px] bg-secondary-background ">
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
              <button
                type="button"
                className="bg-accent-color text-dark-color lato-regular py-2 px-4 rounded-full transition-colors duration-300 shadow-lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Pada_Resume.pdf'; // Path to your resume file
                  link.download = 'Pada_Resume.pdf'; // Name for the downloaded file
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </button>
            </div> 
            <IconList id="Contacts" />
          </div>
        </div>
      </div>
    );
  }

  export default Home;

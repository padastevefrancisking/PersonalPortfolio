function Experiences() {
  return (
    <div className="flex flex-col justify-center items-center bg-main-background">
        <div className="flex items-center justify-center text-center py-8 px-4">
            <h1 className="text-4xl leading-tight mb-6 lato-bold text-main-color">
                My Experiences
            </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-2.5 w-[87.5%] min-w-[280px] h-[700px] md:max-w-[1050px] md:h-[400px] font-[Calibri]">
            {/* Array of image objects with dynamic title and description */}
            {[
            {
                src: '/public/STUDYVERSE.png',
                title: 'StudyVerse',
                description: 'A C# Desktop Application that proposes a streamlined approach to the Bachelor of Science in Computer Science Mentorship program. As a mentee-powered system, it allows students to post available mentorship requests based on their available time slots, where mentors can view and accept these requests.',
                href: 'https://github.com/padastevefrancisking/StudyVerse'
            },
            {
                src: '/public/VSUCOPP.png',
                title: 'VSU - Competitive Online Programming Platform',
                description: 'The region\'s first of a kind - this platform is designed to manage and host competitive programming contests. It is a web-based platform powered by DomJudge and Docker that allows users to create, manage, and participate in programming contests.',
                href: 'http://copp.vsu.edu.ph/'
            },
            {
                src: '/public/FRUITCLASSIFIERCNN.png',
                title: 'Fruit Classifier CNN',
                description: 'Fruit Classifier CNN is a C# Desktop Application that utilizes a Convolutional Neural Network (CNN) to classify fruits. It is trained on a dataset of over 1000 images of 5 various tropical fruits, allowing it to accurately identify and classify different types of fruits.',
                href: 'https://github.com/padastevefrancisking/fruitclassifier'
            },
            {
                src: '/public/TEMPEST.png',
                title: 'Tempest',
                description: 'Bringing weather forecasts to life, Tempest is a web-based application that provides real-time weather updates and forecasts. It is designed to be user-friendly and visually appealing, making it easy for users to access the information they need.',
                href: 'https://github.com/padastevefrancisking/tempest'
            },
            {
                src: '/public/REKINDLE.png',
                title: 'Rekindle',
                description: 'Aimed to provide an immersive Viscan experience, Rekindle is a desktop game that allows players to explore the Viscan culture and heritage through a series of stories.',
                href: 'https://github.com/Jhanez27/psyche'
            }
            ].map((item, idx) => (
            // Each card component, stacked vertically
            <div
                key={idx}
                className="group flex flex-col flex-1 overflow-hidden relative rounded-lg transition-all duration-300 border border-main-color hover:border-secondary-color hover:flex-[5]"
            >
                {/* Card image */}
                <img
                    src={`${item.src}?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3`}
                    alt="image"
                    className="w-full h-full object-cover"
                />

                {/* Text overlay that slides up on hover */}
                <div className="absolute bottom-0 w-full text-white p-4 text-justify translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-in-out bg-gradient-to-b from-transparent via-black/60 to-black ">
                {/* Clickable title */}
                <a href={item.href} className="text-white hover:underline">
                    <h3 className="mb-2 text-white">{item.title}</h3>
                </a>

                {/* Dynamic description */}
                <span className="text-[12px] text-neutral-300">
                    {item.description}
                </span>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Experiences;
function Experiences() {
  return (
    <div className="flex flex-col justify-center items-center bg-main-background">
        <div className="flex items-center justify-center text-center py-8 px-4">
            <h1 className="text-4xl leading-tight mb-6 lato-bold text-main-color">
                My Experiences
            </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-2.5 w-[400px] h-[700px] md:w-[700px] md:h-[400px] font-[Calibri]">
            {/* Array of image objects with dynamic title and description */}
            {[
            {
                src: '/public/STUDYVERSE.png',
                title: 'StudyVerse',
                description: 'Custom description for the first image.',
                href: 'https://github.com/padastevefrancisking/StudyVerse'
            },
            {
                src: '/public/VSUCOPP.png',
                title: 'VSU - Competitive Online Programming Platform',
                description: 'Another unique description here.',
                href: 'http://copp.vsu.edu.ph/'
            },
            {
                src: '/public/REKINDLE.png',
                title: 'Rekindle',
                description: 'Description specific to this image.',
                href: ''
            },
            {
                src: 'https://images.unsplash.com/photo-1619080371491-144258310aa5',
                title: 'Dynamic Title 4',
                description: 'Fourth image with a custom note.',
                href: ''
            },
            {
                src: 'https://images.unsplash.com/photo-1619250556999-38af9033f9d4',
                title: 'Dynamic Title 5',
                description: 'Final card description goes here.',
                href: ''
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
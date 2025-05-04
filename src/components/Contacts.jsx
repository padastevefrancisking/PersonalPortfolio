import 'bootstrap-icons/font/bootstrap-icons.css';

const icons = [
  { icon: 'bi-mailbox', count: 'padastevefrancisking@gmail.com', label: 'Email', link: 'mailto:padastevefrancisking@gmail.com' },
  { icon: 'bi-facebook', count: 'Steve Francis Casinillo Pada', label: 'Facebook', link: 'https://www.facebook.com/steve.pada/' },
  { icon: 'bi-github', count: 'padastevefrancisking', label: 'Github', link: 'https://github.com/padastevefrancisking' },
  { icon: 'bi-linkedin', count: 'Steve Francis King Pada', label: 'LinkedIn', link: 'https://www.linkedin.com/in/steve-francis-king-pada-2b7432327/' },
];

function IconList({id}) {
  return (
    <div id={id} className="flex h-auto w-full items-center justify-center pt-8 pb-6">
      <ul className="flex gap-8 font-[Calibri]">
        {icons.map((item, index) => (
          <li
            key={index}
            className="relative list-none group"
          >
            <span className="w-[50px] h-[50px] rounded-full flex items-center justify-center border border-secondary-color text-gray-100 transition-transform duration-500 ease-in-out transform-style-3d group-hover:rotate-x-[60deg] group-hover:translate-y-[2px] group-hover:[perspective:550px] group-hover:shadow-[0_10px_2px_rgba(98,98,98,0.384)]">
              <span className={`icon bi ${item.icon} transition-transform duration-300 group-hover:translate-z-[15px] group-hover:rotate-x-[-75deg]`} />
            </span>
            <span className="absolute top-[-40px] left-1/2 -translate-x-1/2 bg-[#161616] text-white text-sm px-2.5 py-1 rounded whitespace-nowrap opacity-0 invisible transition-all duration-400 ease-in-out z-10 group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2">
              {item.count}
              <span className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[65%] text-[#161616] font-[bootstrap-icons] content-['\F229']" />
            </span>
            <a
              href= {item.link}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white opacity-0 invisible transition-all duration-500 group-hover:opacity-100 group-hover:visible group-hover:translate-y-10 hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IconList;
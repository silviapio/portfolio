export const Navbar = () => (
  <nav>
    <ul className="flex items-center text-xl tracking-widest mt-2">
      <li className="px-2 hover:underline hover:decoration-2">
        <a href="#skillsSection">skills</a>
      </li>
      <li className="px-2 hover:underline hover:decoration-2">
        <a href="#aboutSection">about</a>
      </li>
      <li className="px-2 hover:underline hover:decoration-2">
        <a href="#projectsSection">projects</a>
      </li>
      <li className="pl-2">
        <a
          href="#contactsSection"
          className="px-2 bg-bright-red rounded text-slate-50 hover:bg-bright-red-hover hover:text-white focus:bg-bright-red-hover outline:text-white focus:outline-bright-red"
        >
          contacts
        </a>
      </li>
    </ul>
  </nav>
);

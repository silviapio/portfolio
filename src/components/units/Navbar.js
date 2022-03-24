export const Navbar = () => (
  <nav>
    <ul className="mt-2 flex items-center text-xl tracking-widest md:text-[22px]">
      <li className="px-2 hover:underline hover:decoration-2 lg:px-4">
        <a href="#skillsSection">skills</a>
      </li>
      <li className="px-2 hover:underline hover:decoration-2 lg:px-4">
        <a href="#aboutSection">about</a>
      </li>
      <li className="px-2 hover:underline hover:decoration-2 lg:px-4">
        <a href="#projectsSection">projects</a>
      </li>
      <li className="pl-2 lg:pl-4">
        <a
          href="#contactsSection"
          className="outline:text-white rounded bg-bright-red px-2 text-slate-50 hover:bg-bright-red-hover hover:text-white focus:bg-bright-red-hover focus:outline-bright-red"
        >
          contacts
        </a>
      </li>
    </ul>
  </nav>
);

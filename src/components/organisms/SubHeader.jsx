import { NavLink } from "react-router-dom";

const SubHeader = () => {

  const navLinks = [
    { name: "How It Works", path: "/How" },
    { name: "Features", path: "/Features" },
    { name: "Use Cases", path: "/use" },
    { name: "Integrations", path: "/Integrations" },
    { name: "Docs", path: "/Docs" },
    { name: "Changelog", path: "/Changelog" },
  ];

  return (
    <header className="flex bg-brand w-full justify-between items-center h-[44px] mx-auto px-[116px]">
      <p className="text-[22px] font-semibold text-text tracking-[0px]">
        ClouddleyAI
      </p>

      <nav className="hidden md:flex items-center space-x-5">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `text-sm font-normal transition-colors tracking-[0px] leading-[130%] duration-200 ${isActive
                ? ""
                : "text-text-1"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

    </header>
  );
};

export default SubHeader;

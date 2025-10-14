import { NavLink } from "react-router-dom";
import clouddleyCompanyLogo from '@/assets/images/clouddleyCompanyLogo.png';

const Header = () => {

  const navLinks = [
    { name: "Products", path: "/Products" },
    { name: "Docs", path: "/Docs" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/Blog" },
    { name: "Docs", path: "/Docs" },
    { name: "Community", path: "/Community" },
  ];

  return (
    <header className="flex w-full justify-between backdrop-blur-md items-center h-[70px] mx-auto px-[116px]">
      <NavLink to="/" className="ml-[-39px]">
        <img src={clouddleyCompanyLogo} alt="clouddleyCompanyLogo" className="h-16" />
      </NavLink>

     <div className="flex items-center gap-[195px]">
      <nav className="hidden md:flex items-center gap-[30px]">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `text-sm font-normal leading-[130%] tracking-[0px] transition-colors duration-200 ${isActive
                ? ""
                : "text-text-1"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-[13px]">
        <button className="px-4 py-1.5 font-normal text-text rounded-full border border-[2px] border-text-3/10 leading-[20px] tracking-normal">
          Contact Sales
        </button>
        <button className="!px-4 !py-1.5 !font-normal !text-text !rounded-full !bg-brand !leading-[20px] !tracking-normal glow-border">
          Get Started
        </button>
      </div>

</div>
    </header>
  );
};

export default Header;

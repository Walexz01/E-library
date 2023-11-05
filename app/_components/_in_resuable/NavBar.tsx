import { links } from "@/data/Links";
import Image from "next/image";
import Link from "next/link";
import { IoReorderThreeSharp } from "react-icons/io5";
const NavBar = () => {
  return (
    <nav>
      <div className="nav container">
        <Image
          alt="eBookVerse-logo"
          src={"/images/logo-text.png"}
          width={130}
          height={100}
        />

        <ul>
          {links.map(({ label, path }, index) => (
            <li key={index}>
              <Link href={path}> {label}</Link>
            </li>
          ))}
          <li className="nav_btn">
            <Link href={"/api/auth/signin"}>Get Started</Link>
          </li>
        </ul>
        <div className="toggler">
          <IoReorderThreeSharp />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

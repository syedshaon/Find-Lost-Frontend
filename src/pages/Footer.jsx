import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="h-[64px] bg-blue-500 bg-gradient-to-r from-white to-blue-500   p-5 flex items-center justify-center gap-2 ">
      <FaGithub />
      <a href="https://github.com/syedshaon" target="_blank">
        Mashi
      </a>
    </div>
  );
}

export default Footer;

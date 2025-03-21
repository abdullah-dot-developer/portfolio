import { IconBrandGmail, IconBrandWhatsapp } from "@tabler/icons-react";
import { Info, socialLinks } from "../User";

const Footer = () => {
  const socialIcons = socialLinks.map((socialLink, index) => {
    return (
      <a
        key={index}
        href={`${socialLink.link}`}
        target="_blank"
        className="font-mono text-lg  hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out"
      >
        <socialLink.icon stroke={1.5} size={25} />
      </a>
    );
  });
  return (
    <div className="mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
      <div className="text-3xl md-mx:text-2xl text-primaryColor font-semibold">
        {Info.name}
      </div>
      <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6">
        {socialIcons}
      </div>
      <div className="text-textColor  text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center">
        <div className="flex flex-col xs:flex-row items-center justify-between my-3 gap-2">
          <span className="flex items-center gap-2">
            <IconBrandWhatsapp color="green" />
            <p>+92 3478063224</p>
          </span>
          <span className="flex items-center gap-2">
            <IconBrandGmail color="red" />
            <p>abdullahdeveloper966@gmail.com</p>
          </span>
        </div>
        Copyright &copy; {new Date().getFullYear()}{" "}
        <span className="text-white">{Info.name}</span>
        <span className="xs-mx:hidden">|</span>{" "}
        <span>All Rights Reserved.</span>
      </div>
    </div>
  );
};
export default Footer;

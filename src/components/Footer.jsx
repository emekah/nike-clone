import { BiWorld } from "react-icons/bi";
import { footerLinks } from "./constants";

const Footer = () => {
  return (
    <section className="flex justify-between p-10 text-sm bg-black">
      <div className="flex gap-60">
        {footerLinks.map((footerLink) => (
          // eslint-disable-next-line react/jsx-key
          <div className="">
            <p className="font-bold mb-7 text-white">{footerLink.title}</p>
            <ul className="text-slate-500 leading-8">
              {footerLink.links.map((link) => (
                <li
                  className="text-base leading-8 cursor-pointer"
                  key={link.name}
                >
                  <a>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex  text-white">
        <BiWorld />
        <p className="ml-1">United Kingdom</p>
      </div>
    </section>
  );
};

export default Footer;

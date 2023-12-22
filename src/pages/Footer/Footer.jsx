import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <img src="https://i.ibb.co/1q5Lfyz/demo-navbar-logo.png" alt="" />
          <p className="mt-2">
            Micronet Industries Ltd.
            <br />
            Effortless task management with Micronet: Your productivity, our
            priority.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <Link to="https://www.linkedin.com/in/sohel-rana-6195a62a4/">
              <FaLinkedin className="w-12 h-12"></FaLinkedin>
            </Link>
            <Link to="https://github.com/sohelranaweb">
              <FaGithub className="w-12 h-12"></FaGithub>
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100094067133815">
              <FaFacebook className="w-12 h-12"></FaFacebook>
            </Link>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-neutral text-neutral-content">
        <aside>
          <p>
            Copyright © 2023 - All right reserved by Micronet Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;

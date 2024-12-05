import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-2">© 2024. Nabina Mainali.</p>
        <div className="flex space-x-4">
          {/* GitHub */}
          <a
            href="https://github.com/Nabinaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={50} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/nabina-mainali20"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={50} />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/nabina.mainali.581"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook size={50} />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";

import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <ul>
            <li>
                <a href=""><FaInstagram/></a>
            </li>
            <li>
                <a href=""><FaGithub/></a>
            </li>
            <li>
                <a href=""><FaLinkedin/></a>
            </li>
        </ul>
        <div>
            <p>Criado por Marcelo Ribeiro</p>
        </div>
    </div>
  )
}

export default Footer
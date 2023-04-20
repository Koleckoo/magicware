import {FiPhoneCall} from 'react-icons/fi'
import {MdEmail} from 'react-icons/md'
import {FiMapPin} from 'react-icons/fi'
import './Footer.scss'

export default function Footer() {
    return <footer className="footer">
    <h5>Contacts CZE</h5>
    <ul>
      <li>Graficon spol. s.r.o.</li>
      <li><a href="https://goo.gl/maps/AXWp5iiAhFYc8gHH8" target="_blank" rel="noopener noreferrer"><FiMapPin/>Senovážné náměstí 23 - 110 00 Praha 1, Czech Republic</a></li>
      <li><FiPhoneCall/>+420 222 327 470</li>
      <li><a href="mailto:booking@graficon.cz"><MdEmail/>booking@graficon.cz</a></li>
    </ul>
  </footer>
}
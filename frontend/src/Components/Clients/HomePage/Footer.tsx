import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';
import { CiInstagram } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import '../../Clients/styles/Components/NavBar/Footer/style.css';



interface SocialIcon {
  icon: React.ReactNode;
  to: string;
}

const socialIcons: SocialIcon[] = [
  { icon: <FaFacebook />, to: '#' },
  { icon: <CiInstagram />, to: '#' },
  { icon: <FaTwitter />, to: '#' },
  { icon: <FaTiktok />, to: '#' },
];

const Footer: React.FC = () => {
  const items = [
    {
      title: 'AgriDigital',
      links: [
        { label: 'A propos', to: '#' },
        { label: 'Notre équipe', to: '#' },
      ],
      className: 'box_1',
    },
    {
      title: 'AgriDigital',
      links: [
        { label: 'A propos', to: '#' },
        { label: 'Notre équipe', to: '#' },
      ],
      className: 'box_2',
    },
    {
      title: 'Aides',
      links: [
        { label: 'Service client', to: '#' },
        { label: 'Détail de la livraison', to: '#' },
        { label: 'termes et conditions', to: '#' },
        { label: 'Politique de confidentialité', to: '#' },
      ],
      className: 'box_2',
    },
    {
      title: 'Ressources',
      links: [
        { label: 'Tutoriel de développement', to: '#' },
        { label: 'Comment faire-blog', to: '#' },
      ],
      className: 'box_3',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="footer__container"
    >
      <div className="full__box">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`item ${item.className}`}
          >
            <h3 className={item.className === 'box_2' || item.className === 'box_3' ? 'foot' : ''}>
              {item.title}
            </h3>
            {item.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                to={link.to}
                className={item.className === 'box_2' || item.className === 'box_3' ? 'foot__para' : 'descript'}
              >
                {link.label}
              </Link>
            ))}
            {item.className === 'box_1' && (
              <div className="icons">
                {socialIcons.map((icon, iconIndex) => (
                  <Link key={iconIndex} to={icon.to} className="social-icon">
                    {icon.icon}
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <div className="copyright">
        <p>© 2024 - Tous les droits réservés par AgriDigital</p>
      </div>
    </motion.div>
  );
};

export default Footer;

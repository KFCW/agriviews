import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaBoxOpen } from "react-icons/fa";
import { IoBagAdd, IoCard } from "react-icons/io5";
import { FaUserTag } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { CSSProperties, ReactNode } from 'react';
import './style.css';

interface Styles {
  sider__container: CSSProperties;
  logo_container: CSSProperties;
  links: CSSProperties;
  hr: CSSProperties;
  dash__cotnent: CSSProperties;
  link_content: CSSProperties;
  active: CSSProperties;
  dash__deconenct: CSSProperties;
  icon__box: CSSProperties;
}

interface MenuItemProps {
  to: string;
  icon: ReactNode;
  label: string;
}


const styles: Styles = {
  sider__container: {
    backgroundColor: "#FFF",
    height: "100%",
    padding: "1rem 2rem",
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    borderRadius: ".5rem",
    border: "2px solid #CCC",
    color: "##1b2a41",
    fontSize: "1rem",
  },
  logo_container: {
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginBottom: "2rem"

  },
  links: {
    textDecoration: "none",
    textAlign: "center",
    fontSize: "1.2rem",
    fontWeight: 700,
    fontFamily: "Poppins",
    letterSpacing: "1px",
    color: "#153243",
  },
  hr: {
    backgroundColor: "#CCC",
    width: "100%",
    marginTop: ".7rem"
  },
  dash__cotnent: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.2rem"
  },
  link_content: {
    color: "#444140",
    textDecoration: "none",
    textTransform: "capitalize",
    paddingLeft: ".5rem",
    display: "flex",
    alignItems: "center",
    columnGap: ".5rem",
    justifyContent: "center"
  },
  active: {
    backgroundColor: "#1b2a41",
    color: '#fff',
  },
  dash__deconenct: {
    display: "flex",
    alignItems: "center",
    padding: "1.1rem 0",
  },
  icon__box : {
    marginTop: ".3rem"
  }
}

interface MenuItemProps {
  to: string;
  icon: ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, icon, label, isActive, onClick }) => (
  <div style={styles.dash__cotnent} className={isActive ? 'active' : ''} onClick={() => onClick()}>
    <Link to={to} style={styles.link_content}>
      <div className="icon__box" style={styles.icon__box}>
        {icon}
      </div>
      <div className="box__label">{label}</div>
    </Link>
  </div>
);

const SideBar: React.FC = () => {

  const [activeLink, setActiveLink] = useState<string>('/dash');

  const handleLinkClick = (to: string) => {
    setActiveLink(to);
  };

  return (
    <>
      <div className="sider__container" style={styles.sider__container}>
        <div style={styles.logo_container}>
          <Link to="/admin/dash" style={styles.links} className="side__logo">AgriDigital</Link>
          <hr className="hr" style={styles.hr} />
        </div>
        <MenuItem to="/admin/dash" icon={<MdSpaceDashboard />} label="Dashbord" isActive={activeLink === '/admin/dash'} onClick={() => handleLinkClick('/admin/dash')} />
        <MenuItem to="client" icon={<FaUserTag />} label="Producteurs" isActive={activeLink === '/client'} onClick={() => handleLinkClick('/client')} />
        <MenuItem to="stock" icon={<FaBoxOpen />} label="Stocks" isActive={activeLink === '/stock'} onClick={() => handleLinkClick('/stock')} />
        <MenuItem to="add" icon={<IoBagAdd />} label="Produits" isActive={activeLink === '/add'} onClick={() => handleLinkClick('/add')} />
        <MenuItem to="formation" icon={<BsNewspaper />} label="Formations" isActive={activeLink === '/formation'} onClick={() => handleLinkClick('/formation')} />
        <MenuItem to="gain" icon={<IoCard />} label="Virements" isActive={activeLink === '/gain'} onClick={() => handleLinkClick('/gain')} />
        <MenuItem to="feedback" icon={<VscFeedback />} label="Demandes" isActive={activeLink === '/feedback'} onClick={() => handleLinkClick('/feedback')} />
        <MenuItem to="settings" icon={<IoIosSettings />} label="Paramètres" isActive={activeLink === '/settings'} onClick={() => handleLinkClick('/settings')} />
          <hr className="hr" style={styles.hr} />
        <div style={styles.dash__deconenct} className="dash__deconenct">
          <Link to="/deconnect" style={styles.link_content}>
          <IoLogOut />
            <span className="deconnect">Déconnexion</span>
            </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar

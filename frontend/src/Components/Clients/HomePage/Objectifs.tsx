import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiFillPushpin} from 'react-icons/ai';
import { AiOutlineClose } from "react-icons/ai";
import '../../Clients/styles/Components/NavBar/Objectifs/style.css';

interface Item {
  id: number;
  subtitle: string;
  title: string;
}

const Objectifs: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const items: Item[] = [
    { id: 1, subtitle: 'Faciliter la communication directe entre les agriculteurs, les éleveurs et les consommateurs finaux pour favoriser la transparence et encourager les achats locaux.', title: 'Connecter les producteurs et les consommateurs' },
    { id: 2, subtitle: 'Fournir des informations détaillées sur les produits, leur provenance, leurs méthodes de production et encourager une alimentation saine et équilibrée.', title: 'Éduquer les consommateurs' },
    { id: 3, subtitle: 'Mettre en avant les produits des petites exploitations agricoles et encourager le commerce équitable pour soutenir les communautés locales.', title: 'Soutenir les petites exploitations ' },
    { id: 4, subtitle: 'Mettre en œuvre des normes strictes de contrôle de la qualité et de la sécurité alimentaire pour garantir des produits sains et conformes aux réglementations en vigueur.', title: 'Assurer la qualité et la sécurité alimentaire' },
  ];

  const openModal = (itemId: number) => {
    setSelectedId(itemId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedId(null);
    setIsModalOpen(false);
  };

  return (
    <div className={`objectifs__container ${isModalOpen ? 'modal-open' : ''}`}>
      <div className="objectifs-column">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id.toString()}
            className={`objectifs objectifs__${item.id}`}
            onClick={() => openModal(item.id)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <AiFillPushpin />
            <h3>{item.title}</h3>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && selectedId && (
          <motion.div
            className="modal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <h5 className='sub__title'>{items[selectedId - 1].title}</h5>
            <h2 className='h2__title'>{items[selectedId - 1].subtitle}</h2>
            <button className="btn__close" title='button de fermeture' onClick={closeModal}><AiOutlineClose /></button>
          </motion.div>
        )}
      </AnimatePresence>

      {isModalOpen && <div className="overlay" onClick={closeModal}></div>}
    </div>
  );
};

export default Objectifs;

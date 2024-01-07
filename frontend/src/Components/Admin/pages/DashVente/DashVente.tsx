import React, { useState, ChangeEvent, FormEvent } from 'react';
import "./style.css";
import { v4 as uuidv4 } from 'uuid';

interface FormData {
  id: string;
  title: string;
  description: string;
  image: File | null;
  price: number;
  category: string;
}

const initialFormData: FormData = {
  id: uuidv4(),
  title: '',
  description: '',
  image: null,
  price: 0,
  category: '',
};

const DashVente: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [products, setProducts] = useState<FormData[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      const file = fileInput.files ? fileInput.files[0] : null;
      setFormData((prevData) => ({ ...prevData, [name]: file }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setProducts((prevProducts) => [...prevProducts, formData]);
    setFormData(initialFormData);
  };

  const handleEdit = (index: number) => {
    const editedProduct = products[index];
    setFormData(editedProduct);
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };

  const handleDelete = (index: number) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };

  return (
    <div className="container__vente">
      <div className="icon__dash product__style">
        <h3>Nos Produits</h3>
      </div>
      <form onSubmit={handleSubmit} className="product-form">
        <div>
          <label htmlFor="id">Id: </label>
          <input
            type="text"
            id="id"
            name="id"
            disabled
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Titre: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            cols={70}
            rows={3}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            accept="image/*"
          />
        </div>
        <div>
          <label htmlFor="price">Prix: </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Catégorie: </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez une catégorie</option>
            <option value="Céréales_et_grains">Céréales et grains</option>
            <option value="Légumes">Légumes</option>
            <option value="Fruits">Fruits</option>
            <option value="Légumineuses">Légumineuses</option>
            <option value="Herbes_et_épices">Herbes et épices</option>
          </select>
        </div>
        <div>
          <button type="submit" className='addBtn'>Ajouter</button>
        </div>
      </form>

      <h2>Liste des Produits</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>{product.title}</strong> - {product.description} - {product.price} - {product.category}
            <button onClick={() => handleEdit(index)}>Modifier</button>
            <button onClick={() => handleDelete(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashVente;

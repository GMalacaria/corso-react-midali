import { useState } from "react";

const StateForm = {
  name: "",
  description: "",
  imgUrl: "",
  isVisited: false,
};

const CityForm = ({ addCity }) => {
  const [formData, setFormData] = useState(StateForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = {
      id: Math.random(),
      name: formData.name,
      description: formData.description,
      imgUrl: formData.imgUrl,
      isVisited: formData.isVisited,
    };
    addCity(city);

    setFormData(StateForm);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="flex flex-col gap-3 w-80 mb-10 p-5 bg-zinc-900 rounded-lg text-white">
      <div className="flex flex-col ">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={formData.name}
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="description">Descrizione</label>
        <input
          type="text"
          name="description"
          onChange={handleInputChange}
          value={formData.description}
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="imgUrl">Url dell'immagine</label>
        <input
          type="text"
          name="imgUrl"
          onChange={handleInputChange}
          value={formData.imgUrl}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="isVisited">L'hai già visitata?</label>
        <input
          type="checkbox"
          name="isVisited"
          className="px-3"
          onChange={handleInputChange}
          checked={formData.isVisited}
        />
      </div>
      <button className="text-black" type="submit">
        Aggiungi
      </button>
    </form>
  );
};

export default CityForm;

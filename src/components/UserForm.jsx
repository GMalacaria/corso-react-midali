import { useReducer } from "react";

const StateForm = {
  name: "",
  email: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD":
      return { ...state, [action.field]: action.value };

    case "RESET_FORM":
      return StateForm;
    default:
      return state;
  }
}

const UserForm = () => {
  const [formData, dispatchFormData] = useReducer(formReducer, StateForm);

  const handleInputChange = (field, value) => {
    dispatchFormData({ type: "CHANGE_FIELD", field, value });
  };

  const resetForm = (e) => {
    e.preventDefault();

    dispatchFormData({ type: "RESET_FORM" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
          id="name"
          onChange={(e) => handleInputChange("name", e.target.value)}
          value={formData.name}
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => handleInputChange("email", e.target.value)}
          value={formData.email}
        />
      </div>

      <button className="text-black" onClick={resetForm}>
        Reset
      </button>
      <button type="submit" className="text-black">
        Invia
      </button>
    </form>
  );
};

export default UserForm;

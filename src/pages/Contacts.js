import React, { useState } from "react";
import { Outlet,useNavigate } from "react-router-dom";

const tempInputs = [
  { name: "name", label: "Name" },
  { name: "address", label: "Address" },
  { name: "phone", label: "Phone Number" },
];

const iniVals = { name: "", phone: "", address: "" };

const initialState = [
    {
        name: 'Adam Smith',
        phone: '09909900',
        address: '3, pound road, Aba'
    }
]

function Contacts() {
  const [state, setState] = useState(initialState);
    const navigate = useNavigate()
  const [vals, setVals] = useState(iniVals);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setVals((prev) => ({ ...prev, [name]: value }));
  };

  const addContactHandler = (e) => {
    e.preventDefault();
    setState((prev) => [...prev, vals]);
    setVals(iniVals);
  };

  const contactClickHandler = (id) => { 
navigate(`/contacts/${id}`)
   }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: "1" }}>
        {state.map((contact, id) => (
          <p key={id} onClick={() => contactClickHandler(id)} >{contact.name}</p>
        ))}
      </div>
      <div style={{ flex: "1" }}>
        <div>
          <form onSubmit={addContactHandler}>
            {tempInputs.map(({ name, label }) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "8px",
                  marginBottom:"12px"
                }}
              >
                <label>{label}</label>
                <input
                  name={name}
                  value={vals[name]}
                  onChange={changeHandler}
                />
              </div>
            ))}
            <button  type="submit">Add Contact</button>
          </form>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Contacts;

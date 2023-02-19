import { useState } from "react";
import "./App.css";
import Header from "./componets/Header";
import Fields from "./componets/Fields";

function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [data, setdata] = useState([]);

  const addData = () => {
    setdata([...data, { name, email, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    const filteredData = data?.filter((data) => data.id !== id);
    setdata(filteredData);
  };

  return (
    <div className="App">
      <Header />
      <div className="input">
        Name :
        <input
          value={name}
          label="surname"
          variant="outlined"
          onChange={(event) => setname(event.target.value)}
        />
        <br />
        Email :
        <input
          value={email}
          label="name"
          variant="outlined"
          onChange={(event) => setemail(event.target.value)}
        />
        <br />
        <button onClick={addData} className="i-btn">
          Add
        </button>
        {/* {data} */}
        <div className="data">
          <div className="data_val">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Delete</h4>
          </div>

          {data.map((element, index) => {
            return (
              <Fields
                key={element.id}
                name={element.name}
                email={element.email}
                index={index}
                deleteData={() => handleDelete(element.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

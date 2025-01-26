import { useEffect, useState } from "react";

import "./App.css";
import { db } from "./db/db";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // @ts-ignore
    window.electron.suscribeStatistics((data: any) => console.log(data));
  }, []);

  const getStaticData = async () => {
    // @ts-ignore
    const response = await window.electron.getStaticData("hpta");
    alert(response);
  };
  const addDataToDB = async () => {
    const age = 10;
    const name = "Jhonny";
    try {
      // Add the new friend!
      const id = await db.friends.add({
        name,
        age,
      });
      alert(`Friend ${name} successfully added. Got id ${id}`);
    } catch (error) {
      alert(`Failed to add ${name}: ${error}`);
    }
  };
  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={getStaticData}>Solicitar datos al backend</button>
        <button onClick={addDataToDB}>Agregar datos a db</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./db/db";
import { Button, NativeSelect } from "@mantine/core";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    // Llamamos al metodo que envia datos cada 3 seg desde electron
    // @ts-ignore
    window.electron.suscribeStatistics((data: any) => console.log(data));
  }, []);

  const getStaticData = async () => {
    // Mandamos peticion al back (electron)
    // @ts-ignore
    const response = await window.electron.getStaticData("hola desde front!");
    alert(response);
  };
  const addDataToDB = async () => {
    const age = 10;
    const name = "Jhonny";
    try {
      // Cargamos los datos en indexedDB
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
      <div style={{ margin: "20px" }}>
        <Button onClick={() => setCount(count + 1)}>Count is {count}</Button>
      </div>

      <div style={{ margin: "20px" }}>
        <Button onClick={getStaticData}>Enviar peticion al back</Button>
      </div>
      <div style={{ margin: "20px" }}>
        <Button onClick={addDataToDB}>Guardar dato en indexedDB</Button>
      </div>
      <h5> Pruba de componente de la libreria mantine</h5>
      <div style={{ width: "auto" }}>
        <NativeSelect
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          data={["React", "Angular", "Svelte", "Vue"]}
        />
      </div>
    </>
  );
}

export default App;

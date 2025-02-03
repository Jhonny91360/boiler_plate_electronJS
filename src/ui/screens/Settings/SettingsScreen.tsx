import { Button, Grid, Paper, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Setting } from "../../db/tables/Setting/SettingType";
import { db } from "../../db/db";

export const SettingsScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Setting>({
    consecutivo: 0,
    contado: 0,
    credito15: 0,
    credito30: 0,
    credito60: 0,
  });
  const getSettings = async () => {
    const setting = await db.settings.get(1);
    if (setting) {
      setFormData(setting);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    console.log("actualizando settings...", formData);
    const setting = await db.settings.get(1);
    // si existe lo actualizo
    if (setting) {
      await db.settings.put({ id: 1, ...formData });
    } else {
      // si no existe lo creo
      await db.settings.add({ id: 1, ...formData });
    }
    alert("Configuración guardada");
  };

  useEffect(() => {
    getSettings();
  }, []);
  return (
    <Grid>
      {/* Boton para regresar al inicio */}
      <Grid.Col span={12} style={{ padding: "20px" }}>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Regresar
        </Button>
        {/* Formulario a la izquierda */}
        <Grid.Col span={12} style={{ padding: "20px" }}>
          <Paper shadow="xs">
            <Title order={3}>Parámetros de configuración</Title>

            <TextInput
              label="Consecutivo"
              type="number"
              name="consecutivo"
              value={formData.consecutivo}
              onChange={handleChange}
              required
              mb="md"
            />

            <Title order={4}>Tipos de pago</Title>

            <TextInput
              label="Contado"
              type="number"
              name="contado"
              value={formData.contado}
              onChange={handleChange}
              required
              mb="md"
            />

            <TextInput
              label="Credito 15"
              type="number"
              name="credito15"
              value={formData.credito15}
              onChange={handleChange}
              required
              mb="md"
            />

            <TextInput
              label="Credito 30"
              type="number"
              name="credito30"
              value={formData.credito30}
              onChange={handleChange}
              required
              mb="md"
            />

            <TextInput
              label="Credito 60"
              type="number"
              name="credito60"
              value={formData.credito60}
              onChange={handleChange}
              required
              mb="md"
            />

            <footer
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "20px",
              }}
            >
              <Button onClick={handleSave} mb="sm">
                Guardar
              </Button>
            </footer>
          </Paper>
        </Grid.Col>
      </Grid.Col>
    </Grid>
  );
};

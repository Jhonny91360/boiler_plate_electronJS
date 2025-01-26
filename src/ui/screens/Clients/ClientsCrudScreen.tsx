import React, { useState, useEffect } from "react";
import { Grid, Paper, TextInput, Button, Table, Title } from "@mantine/core";

import { db } from "../../db/db"; // Importa la base de datos Dexie
import { useNavigate } from "react-router-dom";
import { Client } from "../../db/tables/Clients/ClientsType";

export const ClientsCrudScreen = () => {
  const [formData, setFormData] = useState<Client>({
    id: 0,
    nit_cedula: "",
    nombre: "",
    direccion: "",
    ciudad: "",
    telefono: "",
    celular: "",
    correo: "",
    correo_opcional: "",
    fecha_registro: "",
    encargado: "",
    cargo: "",
  });

  const [clients, setClients] = useState<Client[]>([]);
  const [search, setSearch] = useState("");

  // Cargar los clientes desde la base de datos
  useEffect(() => {
    const loadClients = async () => {
      const allClients = await db.clients.toArray();
      setClients(allClients);
    };
    loadClients();
  }, []);

  // Filtrar productos por nombre
  const filteredClients = clients.filter(
    (client) =>
      // buscar por nombre , referencia o marca
      client.nombre.toLowerCase().includes(search.toLowerCase()) ||
      client.nit_cedula.toLowerCase().includes(search.toLowerCase()) ||
      client.encargado.toLowerCase().includes(search.toLowerCase())
  );

  // Manejar el cambio en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Guardar un nuevo cliente
  const handleSave = async () => {
    const { id, ...restData } = formData;
    console.log("guardando...", restData);
    await db.clients.add(restData);
    setFormData({
      id: 0,
      nit_cedula: "",
      nombre: "",
      direccion: "",
      ciudad: "",
      telefono: "",
      celular: "",
      correo: "",
      correo_opcional: "",
      fecha_registro: "",
      encargado: "",
      cargo: "",
    });
    const allClients = await db.clients.toArray();
    setClients(allClients);
  };

  // Modificar un producto existente
  const handleUpdate = async () => {
    if (!formData.id) return;
    await db.clients.put(formData);
    const allClients = await db.clients.toArray();
    setClients(allClients);
    setFormData({
      id: 0,
      nit_cedula: "",
      nombre: "",
      direccion: "",
      ciudad: "",
      telefono: "",
      celular: "",
      correo: "",
      correo_opcional: "",
      fecha_registro: "",
      encargado: "",
      cargo: "",
    });
  };

  // Eliminar un producto
  const handleDelete = async () => {
    if (!formData.id) return;
    await db.clients.delete(formData.id);
    const allClients = await db.clients.toArray();
    setClients(allClients);
    setFormData({
      id: 0,
      nit_cedula: "",
      nombre: "",
      direccion: "",
      ciudad: "",
      telefono: "",
      celular: "",
      correo: "",
      correo_opcional: "",
      fecha_registro: "",
      encargado: "",
      cargo: "",
    });
  };

  // Manejar el clic en una fila de la tabla
  const handleRowClick = (client: Client) => {
    setFormData(client);
  };

  const navigate = useNavigate();
  console.log("datos actuales:", formData);

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
      </Grid.Col>

      {/* Formulario a la izquierda */}
      <Grid.Col span={12} style={{ padding: "20px" }}>
        <Paper shadow="xs">
          <Title order={3}>Formulario de Cliente</Title>
          <TextInput
            label="ID"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
            mb="md"
            disabled
          />
          <TextInput
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            mb="md"
          />

          <TextInput
            label="NIT/Cedula"
            name="nit_cedula"
            value={formData.nit_cedula}
            onChange={handleChange}
            required
            mb="md"
          />

          <TextInput
            label="Direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
            mb="md"
          />

          <TextInput
            label="Ciudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            required
            mb="md"
          />

          <TextInput
            label="Telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            mb="md"
          />

          <TextInput
            label="Celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            required
            mb="md"
          />

          <TextInput
            label="Correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
            mb="md"
          />

          <TextInput
            label="Correo Opcional"
            name="correo_opcional"
            value={formData.correo_opcional}
            onChange={handleChange}
            required
            mb="md"
          />

          <TextInput
            label="Fecha de Registro"
            name="fecha_registro"
            value={formData.fecha_registro}
            onChange={handleChange}
            required
            mb="md"
          />

          <TextInput
            label="Encargado"
            name="encargado"
            value={formData.encargado}
            onChange={handleChange}
            required
            mb="md"
          />

          <TextInput
            label="Cargo"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
            required
            mb="md"
          />

          {/* <TextInput
            label="Referencia"
            name="referencia"
            value={formData.referencia}
            onChange={handleChange}
            required
            mb="md"
          />
          <TextInput
            label="Marca"
            name="marca"
            value={formData.marca}
            onChange={handleChange}
            required
            mb="md"
          />
          <TextInput
            label="Valor/Hora"
            name="valor_h"
            type="number"
            value={formData.valor_h}
            onChange={handleChange}
            required
            mb="md"
          />

          <FileInput
            label="Foto"
            value={formData.foto}
            onChange={handleFileChange}
            mb="md"
          /> */}

          <footer
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "20px",
            }}
          >
            <Button onClick={handleSave} mb="sm">
              Guardar nuevo
            </Button>
            <Button onClick={handleUpdate} mb="sm">
              Modificar
            </Button>
            <Button color="red" mb="sm" onClick={handleDelete}>
              Eliminar
            </Button>
          </footer>
        </Paper>
      </Grid.Col>

      {/* Tabla de productos a la derecha */}
      <Grid.Col
        span={12}
        style={{
          marginTop: "50px",
          padding: "20px",
        }}
      >
        <Paper shadow="xs">
          <TextInput
            label="Buscar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            mb="md"
          />
          <Table withColumnBorders withRowBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>ID</Table.Th>
                <Table.Th>NIT/Cedula</Table.Th>
                <Table.Th>Nombre</Table.Th>
                <Table.Th>Correo</Table.Th>
                <Table.Th>Encargado</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <tbody>
              {filteredClients.map((client) => (
                <Table.Tr
                  key={client.id}
                  onClick={() => handleRowClick(client)}
                  style={{ cursor: "pointer" }}
                >
                  <Table.Td>{client.id}</Table.Td>
                  <Table.Td>{client.nit_cedula}</Table.Td>
                  <Table.Td>{client.nombre}</Table.Td>
                  <Table.Td>{client.correo}</Table.Td>
                  <Table.Td>{client.encargado}</Table.Td>
                </Table.Tr>
              ))}
            </tbody>
          </Table>
        </Paper>
      </Grid.Col>
    </Grid>
  );
};

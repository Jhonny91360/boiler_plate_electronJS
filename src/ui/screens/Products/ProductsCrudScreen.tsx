import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  TextInput,
  Button,
  Table,
  Title,
  FileInput,
  Textarea,
  Image,
  NumberFormatter,
} from "@mantine/core";

import { Product } from "../../db/tables/Products/ProductsType";
import { db } from "../../db/db"; // Importa la base de datos Dexie
import { useNavigate } from "react-router-dom";

export const ProductsCrudScreen = () => {
  const [formData, setFormData] = useState<Product>({
    id: 0,
    nombre: "",
    referencia: "",
    marca: "",
    valor_h: 0,
    descripcion: "",
    foto: null,
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  // Cargar los productos desde la base de datos
  useEffect(() => {
    const loadProducts = async () => {
      const allProducts = await db.products.toArray();
      setProducts(allProducts);
    };
    loadProducts();
  }, []);

  // Filtrar productos por nombre
  const filteredProducts = products.filter(
    (product) =>
      // buscar por nombre , referencia o marca
      product.nombre.toLowerCase().includes(search.toLowerCase()) ||
      product.referencia.toLowerCase().includes(search.toLowerCase()) ||
      product.marca.toLowerCase().includes(search.toLowerCase())
  );

  // Manejar el cambio en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejar el cambio en el archivo de imagen
  const handleFileChange = (file: File | null) => {
    setFormData((prevData) => ({
      ...prevData,
      foto: file,
    }));
  };

  // Guardar un nuevo producto
  const handleSave = async () => {
    const { id, ...restData } = formData;
    console.log("guardando...", restData);
    await db.products.add(restData);
    setFormData({
      id: 0,
      nombre: "",
      referencia: "",
      marca: "",
      valor_h: 0,
      descripcion: "",
      foto: null,
    });
    const allProducts = await db.products.toArray();
    setProducts(allProducts);
  };

  // Modificar un producto existente
  const handleUpdate = async () => {
    if (!formData.id) return;
    await db.products.put(formData);
    const allProducts = await db.products.toArray();
    setProducts(allProducts);
    setFormData({
      id: 0,
      nombre: "",
      referencia: "",
      marca: "",
      valor_h: 0,
      descripcion: "",
      foto: null,
    });
  };

  // Eliminar un producto
  const handleDelete = async () => {
    if (!formData.id) return;
    await db.products.delete(formData.id);
    const allProducts = await db.products.toArray();
    setProducts(allProducts);
    setFormData({
      id: 0,
      nombre: "",
      referencia: "",
      marca: "",
      valor_h: 0,
      descripcion: "",
      foto: null,
    });
  };

  // Manejar el clic en una fila de la tabla
  const handleRowClick = (product: Product) => {
    setFormData(product);
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
          <Title order={3}>Formulario de Producto</Title>
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

          <Textarea
            label="Descripción"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChangeArea}
            required
            mb="md"
          />
          <FileInput
            label="Foto"
            value={formData.foto}
            onChange={handleFileChange}
            mb="md"
          />
          {formData.foto && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                position: "relative",
                width: "fit-content",
              }}
            >
              <Image
                radius="xs"
                style={{
                  width: "200px",
                  height: "200px",
                  marginBottom: "20px",
                }}
                src={formData.foto ? URL.createObjectURL(formData.foto) : ""}
              />
              {/*Boton de eliminar foto */}
              <Button
                style={{ position: "absolute", top: "0px", right: "0px" }}
                color="transparent"
                onClick={() => setFormData({ ...formData, foto: null })}
              >
                🗑️
              </Button>
            </div>
          )}
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
                <Table.Th>Nombre</Table.Th>
                <Table.Th>Referencia</Table.Th>
                <Table.Th>Marca</Table.Th>
                <Table.Th>Valor/Hora</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <tbody>
              {filteredProducts.map((product) => (
                <Table.Tr
                  key={product.id}
                  onClick={() => handleRowClick(product)}
                  style={{ cursor: "pointer" }}
                >
                  <Table.Td>{product.id}</Table.Td>
                  <Table.Td>{product.nombre}</Table.Td>
                  <Table.Td>{product.referencia}</Table.Td>
                  <Table.Td>{product.marca}</Table.Td>
                  <Table.Td>
                    <NumberFormatter
                      prefix="$ "
                      value={product.valor_h}
                      thousandSeparator
                    />
                  </Table.Td>
                </Table.Tr>
              ))}
            </tbody>
          </Table>
        </Paper>
      </Grid.Col>
    </Grid>
  );
};

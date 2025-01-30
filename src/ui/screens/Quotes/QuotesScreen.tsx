import {
  Button,
  Grid,
  Modal,
  NumberFormatter,
  Paper,
  Table,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { Product } from "../../db/tables/Products/ProductsType";
import { Client } from "../../db/tables/Clients/ClientsType";
import { useDisclosure } from "@mantine/hooks";
import { SelectClientModal } from "../Clients/SelectClientModal";
import { SelectProductModal } from "../Products/SelectProductModal";
import { useNavigate } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
//import MyPDF from "../../components/pdf/PDFEjemploModal";
import CotizacionTeesaModalPDF from "../../components/pdf/CotizacionTeesaModal";

//Creamos interface con solo las propiedades que necesitamos del producto
interface ProductQuote extends Omit<Product, "foto" | "referencia"> {
  cantidad: number;
}

interface ClientQuote
  extends Pick<Client, "nombre" | "encargado" | "correo" | "cargo"> {
  descuento?: number;
  fecha: string;
  tecnico: string;
}
export const QuotesScreen = () => {
  //const [rutaImagen, setRutaImagen] = useState("");
  const [products, setProducts] = useState<ProductQuote[]>([]);
  const [formData, setFormData] = useState<ClientQuote>({
    nombre: "",
    encargado: "",
    correo: "",
    cargo: "",
    fecha: "",
    tecnico: "",
  });

  const [openedClient, { open: openClient, close: closeClient }] =
    useDisclosure(false);
  const [openedProduct, { open: openProduct, close: closeProduct }] =
    useDisclosure(false);
  const [openedPDF, { open: openPDF, close: closePDF }] = useDisclosure(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    productId: number
  ) => {
    //cambio la cantidad del producto
    const newProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          cantidad: Number(e.target.value),
        };
      }
      return product;
    });

    setProducts(newProducts);
  };

  const deleteProductFromQuote = (productId: number) => {
    const newProducts = products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  };
  console.log("Productos cargados", products);

  return (
    <>
      <Button
        style={{ marginBottom: "100px" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Regresar
      </Button>
      <Table withColumnBorders withRowBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th></Table.Th>
            <Table.Th>Producto</Table.Th>
            <Table.Th>Marca</Table.Th>
            <Table.Th>Descripción</Table.Th>
            <Table.Th>Precio</Table.Th>
            <Table.Th>Cantidad</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <tbody>
          {products.map((product) => (
            <Table.Tr
              key={product.id}
              //onClick={() => handleRowClick(product)}
              style={{ cursor: "pointer" }}
            >
              <Table.Td>
                <Button
                  color="none"
                  onClick={() =>
                    product.id && deleteProductFromQuote(product.id)
                  }
                >
                  🗑️
                </Button>
              </Table.Td>
              <Table.Td>{product.nombre}</Table.Td>
              <Table.Td>{product.marca}</Table.Td>
              <Table.Td>{product.descripcion}</Table.Td>
              <Table.Td>
                <NumberFormatter
                  prefix="$ "
                  value={product.valor_h}
                  thousandSeparator
                />
              </Table.Td>
              <Table.Td>
                <TextInput
                  //label="Valor/Hora"
                  name="cantidad"
                  type="number"
                  value={product.cantidad}
                  onChange={(e) => {
                    product.id && handleChange(e, product.id);
                  }}
                  required
                  size="xs"
                />
              </Table.Td>
            </Table.Tr>
          ))}
        </tbody>
      </Table>
      <Button
        onClick={() => openProduct()}
        style={{ marginTop: "100px" }}
        mb="sm"
      >
        Cargar producto
      </Button>

      <Grid>
        <Grid.Col span={12} style={{ padding: "20px" }}>
          <Paper shadow="xs">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Title order={3}>Datos cliente</Title>
              <Button onClick={() => openClient()}>Seleccionar Cliente</Button>
            </div>
            <TextInput
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              //onChange={handleChange}
              required
              mb="md"
              disabled
            />
            <TextInput
              label="Encargado"
              name="encargado"
              value={formData.encargado}
              //onChange={handleChange}
              required
              mb="md"
              disabled
            />
            <TextInput
              label="Correo"
              name="correo"
              value={formData.correo}
              //onChange={handleChange}
              required
              mb="md"
              disabled
            />
            <TextInput
              label="Cargo"
              name="cargo"
              value={formData.cargo}
              //onChange={handleChange}
              required
              mb="md"
              disabled
            />
          </Paper>
        </Grid.Col>

        <Grid.Col span={12} style={{ padding: "20px" }}>
          <Paper shadow="xs">
            <Title order={3}>Otros datos</Title>

            <TextInput
              label="Descuento"
              name="descuento"
              value={formData.nombre}
              //onChange={handleChange}
              mb="md"
              type="number"
            />
            <TextInput
              label="Fecha"
              name="fecha"
              value={formData.encargado}
              //onChange={handleChange}
              required
              mb="md"
            />
            <TextInput
              label="Tecnico"
              name="tecnico"
              value={formData.correo}
              //onChange={handleChange}
              required
              mb="md"
            />
          </Paper>
        </Grid.Col>
      </Grid>

      <Button
        color="green"
        onClick={() => openPDF()}
        style={{ marginTop: "20px" }}
        mb="sm"
      >
        Generar cotización
      </Button>

      <Modal
        opened={openedClient}
        onClose={closeClient}
        title="Seleccionar Cliente"
        size={"xl"}
      >
        {/* Modal content */}
        <SelectClientModal
          onClientSelect={(client) => {
            setFormData({ ...client, fecha: "", tecnico: "" });
            closeClient();
          }}
        />
      </Modal>

      <Modal
        opened={openedProduct}
        onClose={closeProduct}
        title="Seleccionar Producto"
        size={"xl"}
      >
        {/* Modal content */}
        <SelectProductModal
          onProductSelect={(product) => {
            const productFormat: ProductQuote = {
              id: product.id,
              nombre: product.nombre,
              marca: product.marca,
              descripcion: product.descripcion,
              valor_h: product.valor_h,
              cantidad: 1,
            };
            setProducts([...products, productFormat]);
            closeProduct();
          }}
        />
      </Modal>

      <Modal
        opened={openedPDF}
        onClose={closePDF}
        title="Cotización"
        size={"100%"}
      >
        {/* Modal content */}
        <PDFViewer style={{ width: "100%", height: "800px" }}>
          {/* <ContratoPDF
            affiliteData={{}}
            //image={imageFirma.split(',')[1]} />
          /> */}
          {/* <MyPDF /> */}
          <CotizacionTeesaModalPDF urlImage={"teesa_logo.png"} />
        </PDFViewer>
      </Modal>
    </>
  );
};

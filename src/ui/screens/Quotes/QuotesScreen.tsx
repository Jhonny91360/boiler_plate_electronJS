import {
  Button,
  Grid,
  Modal,
  NumberFormatter,
  NumberInput,
  Paper,
  Table,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { Product } from "../../db/tables/Products/ProductsType";
import { Client } from "../../db/tables/Clients/ClientsType";
import { useDisclosure } from "@mantine/hooks";
import { SelectClientModal } from "../Clients/SelectClientModal";
import { SelectProductModal } from "../Products/SelectProductModal";
import { useNavigate } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
//import MyPDF from "../../components/pdf/PDFEjemploModal";
import CotizacionTeesaModalPDF, {
  ProductoPDF,
  PropsPDF,
} from "../../components/pdf/CotizacionTeesaModal";
import { db } from "../../db/db";

//Creamos interface con solo las propiedades que necesitamos del producto
interface ProductQuote extends Omit<Product, "foto" | "referencia"> {
  cantidad: number;
}

interface ClientQuote
  extends Pick<
    Client,
    "nombre" | "encargado" | "correo" | "cargo" | "tipoPago"
  > {
  consecutivo: string;
  descuento?: number;
  fecha: string;
  tecnico: string;
  nota: string;
}
export const QuotesScreen = () => {
  const [pdfData, setPdfData] = useState<PropsPDF>();
  const [products, setProducts] = useState<ProductQuote[]>([]);
  const [formData, setFormData] = useState<ClientQuote>({
    consecutivo: "COT-TEESA-CLO-000",
    nombre: "",
    encargado: "",
    correo: "",
    cargo: "",
    fecha: new Date().toLocaleDateString("es-ES"),
    tecnico: "",
    nota: "",
    tipoPago: "",
  });

  const [openedClient, { open: openClient, close: closeClient }] =
    useDisclosure(false);
  const [openedProduct, { open: openProduct, close: closeProduct }] =
    useDisclosure(false);
  const [openedPDF, { open: openPDF, close: closePDF }] = useDisclosure(false);
  const navigate = useNavigate();

  const handleChange = (value: number, productId: number) => {
    //cambio la cantidad del producto
    const newProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          cantidad: Number(value),
        };
      }
      return product;
    });

    setProducts(newProducts);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormChangeArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const deleteProductFromQuote = (productId: number) => {
    const newProducts = products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  };

  const generarCotizacion = async () => {
    const productosFormateados: ProductoPDF[] = products.map(
      (product, index) => {
        return {
          id: index + 1,
          servicio: product.nombre,
          marca: product.marca,
          descripcion: product.descripcion,
          entrega: "A convenir",
          cantidad: product.cantidad,
          valorUnitario: product.valor_h,
          valorTotal: product.cantidad * product.valor_h,
        };
      }
    );

    // Aplicar aumentos de porcentaje segun tipo de pago del cliente
    for (let i = 0; i < productosFormateados.length; i++) {
      const valorUnitarioCalculado = await applyPayment(
        productosFormateados[i].valorUnitario,
        formData.tipoPago
      );
      console.log("valor calculado", valorUnitarioCalculado);
      productosFormateados[i].valorUnitario = valorUnitarioCalculado;
      productosFormateados[i].valorTotal =
        valorUnitarioCalculado * productosFormateados[i].cantidad;
    }

    const totalParcial = productosFormateados.reduce(
      (total, product) => total + product.valorTotal,
      0
    );

    const descuento = formData.descuento
      ? (totalParcial * formData.descuento) / 100
      : 0;
    const ivaCalculado = totalParcial * 0.19;
    const ofertaTotal = totalParcial - descuento + ivaCalculado;

    const pdfData: PropsPDF = {
      consecutivo: formData.consecutivo,
      nombreCliente: formData.nombre,
      cargoEncargado: formData.cargo,
      nombreEncargado: formData.encargado,
      nombreTecnico: formData.tecnico,
      fecha: formData.fecha,
      correoCliente: formData.correo,
      productos: productosFormateados,
      totalParcial: totalParcial,
      descuento: formData.descuento ?? 0,
      ivaCalculado: ivaCalculado,
      descuentoCalculado: descuento ?? 0,
      ofertaTotal: ofertaTotal,
      nota: formData.nota,
    };

    setPdfData(pdfData);
    openPDF();
  };

  const updateConsecutivo = async () => {
    const settings = await db.settings.get(1);
    if (settings) {
      const newConsecutivo = Number(settings.consecutivo) + 1;
      await db.settings.put({
        id: 1,
        consecutivo: newConsecutivo,
        contado: settings.contado,
        credito15: settings.credito15,
        credito30: settings.credito30,
        credito60: settings.credito60,
      });
      alert("Consecutivo actualizado");
      setFormData((prevData) => ({
        ...prevData,
        consecutivo: `COT-TEESA-CLO-${newConsecutivo}`,
      }));
      closePDF();
    }
  };

  const applyPayment = async (valor: number, tipoPago: string) => {
    const setting = await db.settings.get(1);
    const valorNum = Number(valor);
    let multiple = 1;
    if (setting) {
      if (tipoPago === "Contado") {
        multiple = Number(setting.contado);
      } else if (tipoPago === "Credito 15") {
        multiple = Number(setting.credito15);
      } else if (tipoPago === "Credito 30") {
        multiple = Number(setting.credito30);
      } else if (tipoPago === "Credito 60") {
        multiple = Number(setting.credito60);
      }
    }

    if (typeof multiple !== "number" || multiple <= 0) {
      return valorNum;
    }

    return valorNum + valorNum * (multiple / 100);
  };

  useEffect(() => {
    const getConsecutivo = async () => {
      const settings = await db.settings.get(1);
      if (settings) {
        setFormData((prevData) => ({
          ...prevData,
          consecutivo: `COT-TEESA-CLO-${settings.consecutivo ?? 0}`,
        }));
      }
    };
    getConsecutivo();
  }, []);

  console.log("Productos cargados", products);
  console.log("Datos del formulario", formData);

  return (
    <div style={{ padding: "20px" }}>
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
                {/* <TextInput
                  //label="Valor/Hora"
                  name="cantidad"
                  type="number"
                  value={product.cantidad}
                  onChange={(e) => {
                    product.id && handleChange(e, product.id);
                  }}
                  required
                  size="xs"
                /> */}
                <NumberInput
                  label="Valor/Hora"
                  name="cantidad"
                  value={product.cantidad}
                  onChange={(value) => {
                    product.id && handleChange(Number(value), product.id);
                  }}
                  required
                  size="xs"
                  decimalSeparator="." // Asegura que el separador decimal sea un punto
                  min={0} // Opcional: evita valores negativos si lo necesitas
                  step={0.1} // Define el incremento mínimo
                  //precision={2} // Limita el número de decimales
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
              required
              mb="md"
              disabled
            />
            <TextInput
              label="Encargado"
              name="encargado"
              value={formData.encargado}
              required
              mb="md"
              disabled
            />
            <TextInput
              label="Correo"
              name="correo"
              value={formData.correo}
              required
              mb="md"
              disabled
            />
            <TextInput
              label="Cargo"
              name="cargo"
              value={formData.cargo}
              required
              mb="md"
              disabled
            />

            <TextInput
              label="Tipo de pago"
              name="tipoPago"
              value={formData.tipoPago}
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
              value={formData.descuento}
              onChange={handleFormChange}
              mb="md"
              type="number"
            />
            <TextInput
              label="Fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleFormChange}
              required
              mb="md"
            />
            <TextInput
              label="Tecnico"
              name="tecnico"
              value={formData.tecnico}
              onChange={handleFormChange}
              required
              mb="md"
            />
            <Textarea
              label="Nota"
              name="nota"
              value={formData.nota}
              onChange={handleFormChangeArea}
              mb="md"
            />
          </Paper>
        </Grid.Col>
      </Grid>

      <Button
        color="green"
        onClick={generarCotizacion}
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
            setFormData({
              ...client,
              fecha: formData.fecha,
              tecnico: "",
              nota: "",
              consecutivo: formData.consecutivo,
            });
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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <Button color="green" onClick={updateConsecutivo}>
            Registrar
          </Button>
        </div>

        <PDFViewer style={{ width: "100%", height: "800px" }}>
          {pdfData && <CotizacionTeesaModalPDF {...pdfData} />}
        </PDFViewer>
      </Modal>
    </div>
  );
};

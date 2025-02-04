import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { formatCOP } from "../../utilities/GeneralFunctions/Functions";

export interface PropsPDF {
  consecutivo: string;
  nombreCliente: string;
  cargoEncargado: string;
  nombreEncargado: string;
  nombreTecnico: string;
  fecha: string;
  correoCliente: string;
  productos: ProductoPDF[];
  totalParcial: number;
  descuento: number;
  ivaCalculado: number;
  descuentoCalculado: number;
  ofertaTotal: number;
  nota: string;
}

export interface ProductoPDF {
  id: number;
  servicio: string;
  marca: string;
  descripcion: string;
  entrega: string;
  cantidad: number;
  valorUnitario: number;
  valorTotal: number;
}

const styles = StyleSheet.create({
  filasTercerCuadroEtiqueta: {
    width: "15%",
    color: "#032043",
    fontSize: "14px",
    fontWeight: "bold",
    padding: 5,
  },
  filasTercerCuadroContenido: {
    width: "35%",
    color: "#032043",
    fontSize: "14px",
    fontWeight: "bold",
    padding: 5,
  },
  tablaItem: {
    width: "5%",
    borderRight: "2px solid black",
    borderBottom: "2px solid black",
  },
  tablaServicio: {
    width: "15%",
    borderRight: "2px solid black",
    borderBottom: "2px solid black",
  },
  tablaMarca: {
    width: "15%",
    borderRight: "2px solid black",
    borderBottom: "2px solid black",
  },
  tablaDescripcion: {
    width: "30%",
    borderRight: "2px solid black",
    borderBottom: "2px solid black",
  },
  tablaEntrega: {
    width: "11%",
    borderRight: "2px solid black",
    borderBottom: "2px solid black",
  },
  tablaCan: {
    width: "5%",
    borderRight: "2px solid black",
    borderBottom: "2px solid black",
  },
  tablaVrUnitario: {
    width: "11%",
    borderRight: "2px solid black",
    borderBottom: "2px solid black",
  },
  tablaVrTotal: {
    width: "9%",
    borderRight: "2px solid black",
    borderBottom: "2px solid black",
  },
});

const CotizacionTeesaModalPDF = ({
  cargoEncargado,
  consecutivo,
  correoCliente,
  descuento,
  fecha,
  nombreCliente,
  nombreEncargado,
  nombreTecnico,
  nota,
  ofertaTotal,
  productos,
  descuentoCalculado,
  ivaCalculado,
  totalParcial,
}: PropsPDF) => {
  const ProductoTabulado: React.FC<{
    id: number;
    servicio: string;
    marca: string;
    descripcion: string;
    entrega: string;
    cantidad: number;
    valorUnitario: number;
    valorTotal: number;
  }> = ({
    id,
    servicio,
    marca,
    descripcion,
    entrega,
    cantidad,
    valorUnitario,
    valorTotal,
  }) => {
    return (
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.tablaItem}>{id}</Text>
        <Text style={styles.tablaServicio}>{servicio}</Text>
        <Text style={styles.tablaMarca}>{marca}</Text>
        <Text style={styles.tablaDescripcion}>{descripcion}</Text>
        <Text style={styles.tablaEntrega}>{entrega}</Text>
        <Text style={styles.tablaCan}>{cantidad}</Text>
        <Text style={styles.tablaVrUnitario}>{formatCOP(valorUnitario)}</Text>
        <Text style={styles.tablaVrTotal}>{formatCOP(valorTotal)}</Text>
      </View>
    );
  };
  console.log("Los productos", productos);
  return (
    <Document>
      <Page size={"A3"} style={{ padding: 10 }}>
        {/* Primer cuadro */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            height: "130px",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: "50%",
              padding: 5,
              border: "3px solid black",
            }}
          >
            <Image
              style={{
                objectFit: "contain",
                objectPosition: "left",
              }}
              src={"teesa_logo.png"}
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              width: "30%",
              padding: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderBottom: "3px solid black",
              borderTop: "3px solid black",
              borderRight: "3px solid black",
            }}
          >
            <Text
              style={{ fontSize: "20px", fontWeight: "bold", color: "#032043" }}
            >
              PARA SERVIRTE...
            </Text>
            <Text
              style={{
                fontSize: "14px",
                fontWeight: "normal",
                color: "#032043",
              }}
            >
              Somos un proveedor de soluciones innovadoras a los problemas
              existentes en los sistemas y equipos de cocinas industrales
            </Text>
          </View>
          <View
            style={{
              width: "20%",
              padding: 5,
              display: "flex",
              flexDirection: "column",
              borderBottom: "3px solid black",
              borderTop: "3px solid black",
              borderRight: "3px solid black",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                height: "70%",
                width: "100%",
                borderBottom: "3px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#032043",
                }}
              >
                VE-F01
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                height: "30%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#032043",
                }}
              >
                Version 00
              </Text>
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#032043",
                }}
              >
                Creación Marzo 1 2022
              </Text>
            </View>
          </View>
        </View>
        {/* Segundo cuadro */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            height: "130px",
            borderRight: "3px solid black",
            borderLeft: "3px solid black",
            borderBottom: "3px solid black",
          }}
        >
          <View
            style={{
              width: "70%",
              borderRight: "3px solid black",
              padding: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: "16px",
                fontWeight: "normal",
                color: "#032043",
              }}
            >
              SUMINISTRO DE EQUIPOS, SUMINISTRO E IMPORTACIÓN DE REPUESTOS,
              SUMINISTRO DE QUIMICOS PARA LIMPIEZA, MANTENIMIENTO DE EQUIPOS,
              SERVICIO TECNICO ESPECIALIZADO DE EQUIPOS, TRASLADO DE EQUIPOS,
              INSTALACIÓN DE EQUIPOS NUEVOS, DISEÑO, CAPACITACIÓN Y
              AUTOMATIZACIÓN DE EQUIPOS DE COCINA INDUSTRIALES DE LA INDUSTRIA
              ALIMENTARIA
            </Text>
          </View>
          <View
            style={{
              width: "30%",
              padding: 5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60%",
                borderBottom: "3px solid black",
              }}
            >
              <Text
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#032043",
                }}
              >
                COTIZACION
              </Text>
            </View>
            <View
              style={{
                height: "40%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#032043",
                }}
              >
                {consecutivo ?? ""}
              </Text>
            </View>
          </View>
        </View>
        {/* Tercer cuadro */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            borderRight: "3px solid black",
            borderLeft: "3px solid black",
            borderBottom: "3px solid black",
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "#08e526",
              borderBottom: "3px solid black",
              height: "20px",
            }}
          ></View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Primer renglon */}
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.filasTercerCuadroEtiqueta}>Cliente:</Text>
              <Text style={styles.filasTercerCuadroContenido}>
                {nombreCliente ?? ""}
              </Text>
              <Text style={styles.filasTercerCuadroEtiqueta}>Fecha:</Text>
              <Text style={styles.filasTercerCuadroContenido}>
                {fecha ?? ""}
              </Text>
            </View>
            {/* Segundo renglon */}
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.filasTercerCuadroEtiqueta}>Atencion:</Text>
              <Text style={styles.filasTercerCuadroContenido}>
                {nombreCliente ?? ""}
              </Text>
              <Text style={styles.filasTercerCuadroEtiqueta}>O.C No:</Text>
              <Text style={styles.filasTercerCuadroContenido}>
                {consecutivo ?? ""}
              </Text>
            </View>
            {/* Tercer renglon */}
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.filasTercerCuadroEtiqueta}>Cargo:</Text>
              <Text style={styles.filasTercerCuadroContenido}>
                {cargoEncargado ?? ""}
              </Text>
              <Text style={styles.filasTercerCuadroEtiqueta}>Sede:</Text>
              <Text style={styles.filasTercerCuadroContenido}>Cali</Text>
            </View>
            {/* Cuarto renglon */}
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.filasTercerCuadroEtiqueta}>Solicitado:</Text>
              <Text style={styles.filasTercerCuadroContenido}>
                {nombreEncargado ?? ""}
              </Text>
              <Text style={styles.filasTercerCuadroEtiqueta}>Correo:</Text>
              <Text
                style={{
                  ...styles.filasTercerCuadroContenido,
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                {correoCliente ?? ""}
              </Text>
            </View>
            {/* Quinto renglon */}
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.filasTercerCuadroEtiqueta}>Tecnico:</Text>
              <Text style={styles.filasTercerCuadroContenido}>
                {nombreTecnico ?? ""}
              </Text>
              <Text style={styles.filasTercerCuadroEtiqueta}>Correo:</Text>
              <Text
                style={{
                  ...styles.filasTercerCuadroContenido,
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                asistente1.teesa@gmail.com
              </Text>
            </View>
          </View>
        </View>
        {/* Cuarto cuadro Tabla de productos */}
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            borderRight: "3px solid black",
            borderLeft: "3px solid black",
            borderBottom: "3px solid black",
            textAlign: "center",
            fontSize: "12px",
          }}
        >
          {/* Cabecera de la tabla */}
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                ...styles.tablaItem,
                backgroundColor: "#08e526",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Item
            </Text>
            <Text
              style={{
                ...styles.tablaServicio,
                backgroundColor: "#08e526",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Servicio
            </Text>
            <Text
              style={{
                ...styles.tablaMarca,
                backgroundColor: "#08e526",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Marca
            </Text>
            <Text
              style={{
                ...styles.tablaDescripcion,
                backgroundColor: "#08e526",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Descripción
            </Text>
            <Text
              style={{
                ...styles.tablaEntrega,
                backgroundColor: "#08e526",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Entrega
            </Text>
            <Text
              style={{
                ...styles.tablaCan,
                backgroundColor: "#08e526",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Can.
            </Text>
            <Text
              style={{
                ...styles.tablaVrUnitario,
                backgroundColor: "#08e526",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Vr. Unitario
            </Text>
            <Text
              style={{
                ...styles.tablaVrTotal,
                backgroundColor: "#08e526",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Vr. Total
            </Text>
          </View>
          {/* Renglones productos*/}
          {productos.map((item, index) => (
            <ProductoTabulado key={index} {...item} />
          ))}
          {/* Ultimo renglon */}
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.tablaItem}> </Text>
            <Text style={styles.tablaServicio}></Text>
            <Text style={styles.tablaMarca}></Text>
            <Text style={styles.tablaDescripcion}> </Text>
            <Text style={styles.tablaEntrega}></Text>
            <Text style={styles.tablaCan}></Text>
            <Text style={styles.tablaVrUnitario}></Text>
            <Text style={styles.tablaVrTotal}></Text>
          </View>
          {/* Resumen renglon */}
          <View
            style={{ display: "flex", flexDirection: "row", width: "100%" }}
          >
            <Text
              style={{
                color: "#032043",
                width: "64.4%",
                height: "75px",
                borderRight: "2px solid black",
                fontWeight: "bold",
              }}
            >
              {nota ?? ""}
            </Text>
            <View
              style={{
                width: "35.6%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Rengon total parcial */}
              <View
                style={{ display: "flex", flexDirection: "row", width: "100%" }}
              >
                <Text
                  style={{
                    width: "75%",
                    borderRight: "2px solid black",
                    fontWeight: "extrabold",
                    borderBottom: "2px solid black",
                    textAlign: "right",
                    paddingHorizontal: "5px",
                  }}
                >
                  TOTAL PARCIAL
                </Text>
                <Text
                  style={{
                    width: "25%",
                    borderRight: "2px solid black",
                    borderBottom: "2px solid black",
                  }}
                >
                  {formatCOP(totalParcial) ?? ""}
                </Text>
              </View>

              {/* Renglon descuento */}
              <View
                style={{ display: "flex", flexDirection: "row", width: "100%" }}
              >
                <View
                  style={{
                    width: "75%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      width: "60%",
                      borderRight: "2px solid black",
                      fontWeight: "bold",
                      borderBottom: "2px solid black",
                      paddingHorizontal: "5px",
                    }}
                  >
                    DESCUENTO
                  </Text>
                  <Text
                    style={{
                      width: "40%",
                      borderRight: "2px solid black",
                      fontWeight: "bold",
                      borderBottom: "2px solid black",
                      textAlign: "right",
                      paddingHorizontal: "5px",
                    }}
                  >
                    {`${descuento ?? 0}%`}
                  </Text>
                </View>

                <Text
                  style={{
                    width: "25%",
                    borderRight: "2px solid black",
                    borderBottom: "2px solid black",
                  }}
                >
                  {formatCOP(descuentoCalculado ?? 0)}
                </Text>
              </View>

              {/* Renglon iva */}
              <View
                style={{ display: "flex", flexDirection: "row", width: "100%" }}
              >
                <View
                  style={{
                    width: "75%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      width: "60%",
                      borderRight: "2px solid black",
                      fontWeight: "bold",
                      borderBottom: "2px solid black",
                      paddingHorizontal: "5px",
                    }}
                  >
                    IVA
                  </Text>
                  <Text
                    style={{
                      width: "40%",
                      borderRight: "2px solid black",
                      fontWeight: "bold",
                      borderBottom: "2px solid black",
                      textAlign: "right",
                      paddingHorizontal: "5px",
                    }}
                  >
                    19%
                  </Text>
                </View>

                <Text
                  style={{
                    width: "25%",
                    borderRight: "2px solid black",
                    borderBottom: "2px solid black",
                  }}
                >
                  {formatCOP(ivaCalculado ?? 0)}
                </Text>
              </View>

              {/* Rengon oferta total*/}
              <View
                style={{ display: "flex", flexDirection: "row", width: "100%" }}
              >
                <Text
                  style={{
                    width: "75%",
                    borderRight: "2px solid black",
                    borderBottom: "2px solid black",
                    textAlign: "right",
                    paddingHorizontal: "5px",
                  }}
                >
                  Oferta total
                </Text>
                <Text
                  style={{
                    width: "25%",
                    borderRight: "2px solid black",
                    borderBottom: "2px solid black",
                  }}
                >
                  {formatCOP(ofertaTotal ?? 0)}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Quinto cuadro Condiciones comerciales */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            fontSize: "14px",
            borderRight: "3px solid black",
            borderLeft: "3px solid black",
            borderBottom: "3px solid black",
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "#08e526",
              borderBottom: "3px solid black",
              height: "30px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>CONDICIONES COMERCIALES</Text>
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Primer renglon */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "left",
                padding: "2px",
              }}
            >
              <Text style={{ width: "30%" }}>Tiempo de entrega:</Text>
              <Text style={{ width: "70%" }}>A convenir</Text>
            </View>
            {/* Segundo renglon */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "left",
                padding: "2px",
              }}
            >
              <Text style={{ width: "30%" }}>Forma de pago:</Text>
              <Text style={{ width: "70%" }}>Credito</Text>
            </View>
            {/* Tercer renglon */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "left",
                padding: "2px",
              }}
            >
              <Text style={{ width: "30%" }}>Precios:</Text>
              <Text style={{ width: "70%", textDecoration: "underline" }}>
                Debe entenderse como neto, agregar el iva vigente
              </Text>
            </View>
            {/* Cuarto renglon */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "left",
                padding: "2px",
              }}
            >
              <Text style={{ width: "30%" }}>Sitio de entrega:</Text>
              <Text style={{ width: "70%" }}>En sus instalaciones</Text>
            </View>
            {/* Quinto renglon */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "left",
                padding: "2px",
              }}
            >
              <Text style={{ width: "30%" }}>Vigencia de la oferta:</Text>
              <Text style={{ width: "70%" }}>15 dias</Text>
            </View>
            {/* Sexto renglon */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "left",
                padding: "2px",
              }}
            >
              <Text style={{ width: "30%" }}>Garantia:</Text>
              <Text style={{ width: "70%" }}>
                30 dias calendario en mano de obra
              </Text>
            </View>
          </View>
        </View>
        {/* Sexto cuadro Reviso */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            fontSize: "14px",
            borderRight: "3px solid black",
            borderLeft: "3px solid black",
            borderBottom: "3px solid black",
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "#08e526",
              borderBottom: "3px solid black",
              height: "30px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Reviso</Text>
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              margin: "10px",
            }}
          >
            <Text>VICTOR MANUEL PUERTAS DIAZ</Text>
            <Text>Director de proyectos</Text>
            <Text>asistente1.teesa@gmail.com</Text>
          </View>
        </View>
        {/* Septimo cuadro Datos generales teesa */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            fontSize: "14px",
            borderRight: "3px solid black",
            borderLeft: "3px solid black",
            borderBottom: "3px solid black",
          }}
        >
          <View
            style={{
              width: "60%",
              height: "150px",
              borderRight: "3px solid black",
            }}
          >
            <Image source={"pdf_footer.png"}></Image>
          </View>
          <View
            style={{
              width: "40%",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "5px",
              gap: "5px",
            }}
          >
            <Text
              style={{ textDecorationStyle: "solid", textAnchor: "middle" }}
            >
              TECNOLOGIA EN EQUIPOS ALIMENTICIOS S.A.S TEESA S.A.S.
            </Text>
            <Text>901.553.822-9</Text>
            <Text>Carrera 17 F4# 27D-72</Text>
            <Text>318 2581421</Text>
            <Text>coordinadora.teesa@gmail.com</Text>
            <Text>Cali- Colombia- Suramerica</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CotizacionTeesaModalPDF;

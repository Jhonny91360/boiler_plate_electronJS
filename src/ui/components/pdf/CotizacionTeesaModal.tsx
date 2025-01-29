import { Document, Image, Page, Text, View } from "@react-pdf/renderer";

interface Props {
  urlImage: string;
}
const CotizacionTeesaModalPDF = ({ urlImage }: Props) => {
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
              src={urlImage}
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
                COT-TEESA-CLO-509-B
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CotizacionTeesaModalPDF;

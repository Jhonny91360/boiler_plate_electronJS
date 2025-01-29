import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
  },
  text: {
    fontSize: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontWeight: "bold",
  },
});

// Componente del documento
const MyPDF = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>COTIZACIÓN</Text>
        <Text style={styles.text}>Don Makinon - Instalación Hornos</Text>
        <Text style={styles.text}>Fecha: 25 de octubre de 2024</Text>
        <Text style={styles.text}>O.C No: 509-B</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Cliente:</Text>
        <Text style={styles.text}>Victor Manuel Puertas Diaz</Text>
        <Text style={styles.text}>Correo: proyectos.teesa@gmail.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Detalle de la Oferta:</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Item</Text>
          <Text style={styles.label}>Descripción</Text>
          <Text style={styles.label}>Cantidad</Text>
          <Text style={styles.label}>Vr. Unitario</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>1</Text>
          <Text style={styles.text}>Instalación - Horno Combi</Text>
          <Text style={styles.text}>3</Text>
          <Text style={styles.text}>373.333</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>2</Text>
          <Text style={styles.text}>Instalación - Classic</Text>
          <Text style={styles.text}>2</Text>
          <Text style={styles.text}>373.333</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Total Parcial</Text>
          <Text style={styles.text}>1.332.799</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>IVA</Text>
          <Text style={styles.text}>212.800</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.text}>1.119.999</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Condiciones Comerciales:</Text>
        <Text style={styles.text}>Forma de Pago: Crédito</Text>
        <Text style={styles.text}>Tiempo de Entrega: A convenir</Text>
        <Text style={styles.text}>
          Garantía: 30 días calendario en mano de obra
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Atención:</Text>
        <Text style={styles.text}>Leidy Rivera</Text>
        <Text style={styles.text}>Técnico</Text>
      </View>
    </Page>
  </Document>
);

export default MyPDF;

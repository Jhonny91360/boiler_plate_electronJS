import { useNavigate } from "react-router-dom";
import { MenuCard } from "../../components/MenuCard";

export const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        height: "100%",
        width: "100%",
        margin: "auto",
        backgroundColor: "#f5ff8",
        background: "#f5ff8",
        padding: "200px",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <MenuCard
          title="Productos"
          description="Crea, edita y elimina productos de la base de datos"
          badgeText="Nuevo"
          buttonText="Ir"
          buttonAction={() => navigate("/products")}
        />
        <MenuCard
          title="Clientes"
          description="Crea, edita y elimina clientes de la base de datos"
          badgeText="Nuevo"
          buttonText="Ir"
          buttonAction={() => navigate("/clients")}
        />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <MenuCard
          title="Cotizaciones"
          description="Genera cotizaciones de productos para clientes"
          badgeText="Nuevo"
          buttonText="Ir"
          buttonAction={() => navigate("/quotes")}
        />
        <MenuCard
          title="Configuraciones"
          description="Configuraciones del sistema"
          badgeText="Nuevo"
          buttonText="Ir"
          buttonAction={() => navigate("/settings")}
        />
      </div>
    </div>
    // <Container>
    //   <Title mb="xl">Generador de Cotizaciones</Title>

    //   <Grid grow>
    //     <Grid.Col>
    //       <Paper shadow="xs" style={{ textAlign: "center" }}>
    //         <Button fullWidth mt="md" onClick={() => navigate("/products")}>
    //           Gestionar productos
    //         </Button>
    //       </Paper>
    //     </Grid.Col>

    //     <Grid.Col>
    //       <Paper shadow="xs" style={{ textAlign: "center" }}>
    //         <Button fullWidth mt="md" onClick={() => navigate("/clientes")}>
    //           Gestionar clientes
    //         </Button>
    //       </Paper>
    //     </Grid.Col>

    //     <Grid.Col>
    //       <Paper shadow="xs" style={{ textAlign: "center" }}>
    //         <Button fullWidth mt="md" onClick={() => navigate("/cotizaciones")}>
    //           Generar cotización
    //         </Button>
    //       </Paper>
    //     </Grid.Col>

    //     <Grid.Col span={6}>
    //       <Paper shadow="xs" style={{ textAlign: "center" }}>
    //         <Button
    //           fullWidth
    //           mt="md"
    //           onClick={() => navigate("/configuracion")}
    //         >
    //           Ajustes
    //         </Button>
    //       </Paper>
    //     </Grid.Col>
    //   </Grid>
    // </Container>
  );
};

export default HomeScreen;

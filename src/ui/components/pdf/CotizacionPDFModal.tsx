"use client";
import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import moment from "moment";
interface GeneratePdfProp {
  affiliteData: any;
  image?: string;
}

const ContratoPDF = ({ image: signature }: GeneratePdfProp) => {
  const HeaderSection = ({
    page,
    maxPage,
  }: {
    page: number;
    maxPage: number;
  }) => (
    <View
      style={{
        width: "100%",
        display: "flex",
        marginBottom: "10px",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #000",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          height: "100%",
          width: "120px",
          borderRight: "1px solid #000",
          padding: "10px 8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            height: "70px",
            objectFit: "cover",
          }}
          src={`/assets/brand/Logo.png`}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px 8px",
        }}
      >
        <Text
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            fontFamily: "Helvetica-Bold",
          }}
        >
          CORPORACIÓN DEFENSORÍA MILITAR
        </Text>
        <Text
          style={{
            fontSize: "10px",
            marginBottom: "10px",
          }}
        >
          “Las Batallas Legales También las Luchamos Juntos”
        </Text>
        <Text
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            fontFamily: "Helvetica-Bold",
          }}
        >
          CONTRATO DE AFILIACIÓN
        </Text>
      </View>
      <View
        style={{
          height: "100%",
          width: "120px",
          borderLeft: "1px solid #000",
          padding: "10px 8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: "9px",
            marginBottom: "4px",
          }}
        >
          Código: DM-07-FOR-001
        </Text>
        <Text
          style={{
            fontSize: "9px",
            marginBottom: "4px",
          }}
        >
          Revisión:06
        </Text>
        <Text
          style={{
            fontSize: "9px",
            marginBottom: "4px",
          }}
        >
          Fecha: {moment().format("L")}
        </Text>
        <Text
          style={{
            fontSize: "9px",
            marginBottom: "4px",
          }}
        >
          Página {page} de {maxPage}
        </Text>
      </View>
    </View>
  );
  const OneCol = ({ label, value }: any) => (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        borderBottom: "1px solid #000",
      }}
    >
      <Text
        style={{
          borderRight: "1px solid #000",
          margin: "0",
          fontSize: "7pt",
          fontWeight: "bold",
          padding: "5px",
          width: "15%",
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          backgroundColor: "#EFEFEF",
          margin: "0",
          fontSize: "9pt",
          padding: "5px",
          width: "85%",
        }}
      >
        {value}
      </Text>
    </View>
  );
  const DoubleCol = ({ label1, value1, label2, value2 }: any) => (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        borderBottom: "1px solid #000",
      }}
    >
      <View
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "row",
          borderRight: "1px solid black",
        }}
      >
        <Text
          style={{
            borderRight: "1px solid #000",
            margin: "0",
            fontSize: "7pt",
            fontWeight: "bold",
            padding: "5px",
            width: "30%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {label1}
        </Text>
        <Text
          style={{
            backgroundColor: "#EFEFEF",
            margin: "0",
            fontSize: "9pt",
            padding: "5px",
            width: "70%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {value1}
        </Text>
      </View>
      <View
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            borderRight: "1px solid #000",
            margin: "0",
            fontSize: "7pt",
            fontWeight: "bold",
            padding: "5px",
            width: "30%",
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          {label2}
        </Text>
        <Text
          style={{
            backgroundColor: "#EFEFEF",
            margin: "0",
            fontSize: "9pt",
            padding: "5px",
            width: "70%",
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          {value2}
        </Text>
      </View>
    </View>
  );
  const FirstInfoSection = () => (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginTop: "10px",
      }}
    >
      <Text
        style={{
          margin: "0",
          fontSize: "12px",
          padding: "5px",
          width: "100%",
          textAlign: "justify",
          lineHeight: "1.4px",
        }}
      >
        Texto de prueba1
      </Text>
      <Text>Texto de prueba2</Text>
      <Text>Texto de prueba3</Text>
      {/* <Text
        style={{
          margin: "0",
          fontSize: "12px",
          padding: "5px",
          width: "100%",
          textAlign: "justify",
          lineHeight: "1.4px",
        }}
      >
        Entre{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          LA CORPORACIÓN DEFENSORÍA MILITAR{" "}
        </Text>{" "}
        identificada con el Nit.830.018.607-0, Corporación Solidaria, sin ánimo
        de lucro, destinada a la defensa, protección, promoción y divulgación de
        los Derechos Humanos y el Derecho Internacional Humanitario que propende
        por el acceso eficaz y eficiente a la Administración de Justicia de sus
        Afiliados dentro del marco jurídico colombiano, en procura de una
        sociedad justa y equitativa, quien en adelante se denominará la CODEM y
        la persona identificada precedentemente, quien en adelante se denominará
        El AFILIADO, hemos convenido celebrar el presente{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES{" "}
        </Text>
        , el cual se regulará por las cláusulas siguientes
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          CLÁUSULA PRIMERA: OBJETO:{" "}
        </Text>{" "}
        La CODEM se obliga a prestarle AL AFILIADO de conformidad con los
        parámetros establecidos en los Estatutos y normas internas de LA CODEM,
        los servicios de asesoría y defensa técnica jurídica de manera oportuna
        y efectiva, Esta cobertura incluye los siguientes servicios:{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          1. Defensa técnica jurídica en los siguientes procesos en primera y
          segunda instancia:{" "}
        </Text>{" "}
        1.1. Procesos relacionados con conductas cometidas en actos del servicio
        ante la Justicia Penal Militar 1.2 Procesos realizados con causa y razón
        del servicio que tienen conocimiento la Justicia Penal Ordinaria; 1.3.
        Procesos ante la Justicia Penal Ordinaria por los delitos de porte
        ilegal de armas, violencia intrafamiliar por primera vez, lesiones
        personales, homicidio culposo y delitos contra la administración
        pública. 1.4. Procesos disciplinarios internos; 1.5. Procesos
        Disciplinarios ante la Procuraduría General de la Nación 1.6.
        Administrativos relacionados con investigaciones administrativas
        internas, control de repetición 1.7. Procesos de responsabilidad fiscal
        ante la Contraloría General de la República.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          2. Defensa técnica jurídica en los siguientes procesos de familia de
          primera y segunda instancia en los cuales EL AFILIADO sea el DEMANDADO
          y se otorgue poder desde la contestación de la demanda:{" "}
        </Text>{" "}
        2.1. Separación de bienes y Divorcio.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          3. Procesos de familia por mutuo acuerdo:{" "}
        </Text>{" "}
        3.1. Divorcio/ cesación de efectos civiles del matrimonio religioso y
        sucesiones; en este caso el AFILIADO deberá entregar como cuota
        extraordinaria a favor de la CODEM el diez por ciento (10%) del total
        del valor de los bienes a liquidar.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          4. Recursos extraordinarios de casación y revisión. 5. Justicia
          Especial para la Paz - JEP. 6. Demandas ante la Jurisdicción
          Contencioso Administrativa:{" "}
        </Text>{" "}
        Medio de Control de Reparación directa, caso en el cual EL AFILIADO
        deberá entregar como cuota extraordinaria a favor de la CODEM el diez
        por ciento (10%) de las condenas judiciales u otras indemnizaciones
        emitidas a su favor, incluyendo la instancia conciliatoria, para lo cual
        se suscribirá un contrato adicional al presente contrato entre EL
        AFILIADO y LA CODEM, a este servicio aplican las exclusiones mencionadas
        en el parágrafo primero de esta cobertura.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          7. Asesoría Jurídica:{" "}
        </Text>{" "}
        Sobre los temas indicados y en conciliaciones, derechos de petición y/o
        tutelas.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          8. Capacitación:{" "}
        </Text>{" "}
        EL AFILIADO tendrá derecho a un descuento especial de hasta el 40% en el
        valor de los diplomados realizados por LA CODEM.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          PARÁGRAFO PRIMERO. Exclusiones:{" "}
        </Text>{" "}
        Se excluye la defensa técnica y asesoría jurídica en temas relacionados
        con delitos contra la seguridad de la fuerza pública; la existencia y
        seguridad del estado; régimen constitucional y legal; narcotráfico y
        conexos; contra la libertad, formación e integridad sexual y acciones
        judiciales contra el Ministerio de Defensa Nacional y/o el Ejército
        Nacional de Colombia.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          CLÁUSULA SEGUNDA: CONDICIONES GENERALES OBJETO DE ESTE CONTRATO. 1.{" "}
        </Text>{" "}
        La responsabilidad del Abogado Titulado asignado para cada servicio,
        está sujeta a lo que establece la Ley 1123 de 2007 código disciplinario
        del abogado y las demás normas que resulten aplicables a cada caso
        específico, quedando LA CODEM eximida de cualquier responsabilidad civil
        extracontractual.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          2.{" "}
        </Text>
        La asesoría y defensa técnica jurídica solamente se brindará respecto de
        hechos ocurridos dentro del territorio nacional y situaciones legales
        nacidas en vigencia del presente contrato, sin perjuicio de lo
        establecido en el párrafo segundo de cada una de las coberturas.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          3.{" "}
        </Text>{" "}
        El valor de las copias del proceso o la actuación, así como las costas y
        gastos procesales serán asumidos por el AFILIADO.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          4.{" "}
        </Text>{" "}
        En el caso en que el usuario al momento de la suscripción del presente
        contrato requiera asistencia jurídica en un proceso en curso de los
        señalados en los numerales anteriores, LA CODEM procederá con la
        afiliación y decidirá si acepta o no la prestación del servicio para
        este proceso en particular; en caso de aceptarlo, la CODEM requerirá el
        pago de las cuotas extraordinarias que establezca la Dirección General
        Ejecutiva, dependiendo la especialidad, gravedad, complejidad y etapa en
        la que se encuentre el mismo.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          5.{" "}
        </Text>{" "}
        El portafolio de servicios incluye la asesoría y asistencia técnica de
        investigadores y peritos contratados por la CODEM; en caso de requerirse
        algún perito no contratado por la CODEM, deberá ser asumido por EL
        AFILIADO.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          CLÁUSULA TERCERA: OBLIGACIONES DE LAS PARTES: I) DE LA CODEM:{" "}
        </Text>{" "}
        1. Cumplir de manera efectiva e integral con las obligaciones
        consagradas en el presente Contrato por medio de abogados,
        investigadores y peritos debidamente acreditados e idóneos para ejercer
        la actividad, en los lugares del territorio nacional que sea requerido
        el servicio. 2. Guardar la debida reserva respecto de los asuntos e
        información que llegare a conocer, con ocasión y por razón del presente
        contrato. 3. Aplicar técnicas de control de calidad y celeridad al
        trabajo realizado por parte de los abogados, investigadores y peritos
        asignados, de acuerdo a la especialidad de cada asunto. 4. Garantizar
        que EL AFILIADO que se encuentre privado de la libertad, tenga visitas
        y/o entrevistas presenciales o virtuales que se requieran para el
        adecuado desarrollo de su defensa técnica. 5. Brindar AL AFILIADO la
        Información del estado del proceso o de su afiliación cuando éste lo
        requiera.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          II). DEL AFILIADO:{" "}
        </Text>{" "}
        1. Actuar con lealtad y veracidad en toda intervención que realice
        relacionada con este contrato, incluyendo la información que suministre
        al abogado asignado, la cual debe ser suficiente, oportuna y veraz,
        tanto verbal como documentalmente. 2. Informar de manera oportuna a LA
        CODEM y al abogado asignado, cualquier cambio de domicilio, dirección,
        teléfono y correo electrónico, con el fin de garantizar la efectividad
        de las comunicaciones, notificaciones o citaciones que deban surtirse,
        así como mantener actualizados los datos en la Aplicación y los demás
        que establezca LA CODEM. 3. Estar al día en los pagos mensuales de las
        cuotas de afiliación, bien sea mediante descuento o pago directo. 4.
        Participar activamente en el desarrollo de la estrategia de la defensa,
        aportando información, material probatorio y manteniendo contacto
        permanente con el abogado asignado. 5. Informar a LA CODEM las
        irregularidades o inconformidades que se presenten en la prestación del
        servicio. 6. Aportar la revocatoria de poder o paz y salvo en caso de
        contar con apoderado diferente a la CODEM para efectos de asumir la
        representación. 7. Informar a LA CODEM el otorgamiento de poder a un
        abogado diferente al asignado por la misma.
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          CLÁUSULA CUARTA: DERECHOS DE LOS AFILIADOS:{" "}
        </Text>{" "}
        1. Acceder a los servicios que presta LA CODEM en los términos y
        condiciones aquí establecidos en la cláusula primera de este contrato,
        previa solicitud de servicio radicada o presentada a través de los
        medios indicados en el numeral
      </Text> */}
    </View>
  );
  const SecondInfoSection = () => (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <Text
        style={{
          margin: "0",
          fontSize: "12px",
          padding: "5px",
          width: "100%",
          textAlign: "justify",
          lineHeight: "1.4px",
        }}
      >
        cuarto de la cláusula segunda del presente contrato. 2. Ser asistido por
        personal idóneo y acreditado durante las etapas del proceso contempladas
        en el presente contrato y ser informado oportunamente del estado de su
        proceso. 3. Desafiliarse de LA CODEM cuando lo estime conveniente luego
        del término de vencimiento del plazo inicial. La solicitud de
        desafiliación deberá presentarse mediante comunicación escrita radicada
        mínimo con treinta (30) días calendario de antelación al cumplimiento
        del término del contrato o la correspondiente prórroga; en este evento y
        en caso de estar siendo asistido por un abogado asignado por LA CODEM,
        el mencionado abogado deberá presentar la respectiva renuncia al poder.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          CLÁUSULA QUINTA: VIGENCIA:{" "}
        </Text>{" "}
        El término de duración del presente Contrato será de UN (1) AÑO, contado
        a partir de la fecha en que se realice el primer descuento por nómina o
        consignación directa por parte del AFILIADO a favor de LA CODEM, sin
        perjuicio de la fecha de suscripción del presente contrato, ni de la
        prestación efectiva del servicio, el cual podrá ser prestado desde la
        fecha de suscripción de este contrato aun cuando no se haya efectuado el
        primer aporte.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          PARÁGRAFO PRIMERO:{" "}
        </Text>{" "}
        El presente Contrato se PRORROGARÁ automáticamente una vez vencido el
        plazo consagrado en la presente cláusula, por un período igual al
        inicialmente pactado, si ninguna de las partes manifiesta la intención
        de darlo por terminado en los términos establecidos en el cuerpo de este
        contrato. En caso de desafiliación del usuario, ésta se hará efectiva
        dentro de los sesenta (60) días calendario contados a partir del recibo
        de la solicitud de la desafiliación. Para que proceda la desafiliación o
        terminación del contrato será indispensable que EL AFILIADO esté al día
        en el pago de sus aportes, salvo que la CODEM decida desafiliar al
        usuario por las causales definidas en los Estatutos y en el este
        contrato.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          PARÁGRAFO SEGUNDO:{" "}
        </Text>{" "}
        LA CODEM se reserva el derecho de admisión y de continuación del
        contrato. En todo caso, será motivo de desafiliación o suspensión
        inmediata del servicio, cualquier acción en la que el afiliado actúe de
        manera desleal, delictual, o por comportamientos irrespetuosos u otra
        conducta que atente o ponga en peligro la integridad de la CODEM o del
        personal puesto al servicio del AFILIADO de acuerdo a los estatutos de
        la CODEM.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          CLÁUSULA SEXTA: VALOR Y FORMA DE PAGO DE LA CUOTA DE AFILIACIÓN:{" "}
        </Text>{" "}
        Con la firma del presente Contrato EL AFILIADO autoriza descontar
        mensualmente de su nómina el{" "}
        <Text style={{ textDecoration: "underline" }}>
          {"affiliteData.discountPercentage?.percentage"}
        </Text>
        % de su salario básico, asignación de retiro o pensión según sea el caso
        como cuota de afiliación. En caso de acumularse tres pagos o cuotas sin
        realizar, EL AFILIADO se considerará desafiliado y sin derecho a
        servicios, debiendo pagar un valor equivalente a 24 cuotas, más el valor
        asignado por proceso.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          PARÁGRAFO PRIMERO:{" "}
        </Text>{" "}
        En caso de que EL AFILIADO se encuentre en Escuela de Formación, los
        aportes por nómina procederán una vez hayan culminado la etapa de
        formación y haga parte de la respectiva nómina.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          PARÁGRAFO SEGUNDO:{" "}
        </Text>{" "}
        La cuota de afiliación constituye un APORTE SOLIDARIO de carácter
        consensual; en ningún momento se hará devolución de los aportes hechos
        por EL AFILIADO dada la naturaleza jurídica de LA CODEM y del presente
        contrato.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          PARÁGRAFO TERCERO:{" "}
        </Text>{" "}
        En caso de que no sea posible realizar los aportes por nómina, el
        AFILIADO estará obligado a aportar un monto correspondiente a la
        sumatoria de doce (12) cuotas o aportes mensuales de la vigencia del
        respectivo contrato.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          CLÁUSULA SEPTIMA: MÉRITO EJECUTIVO:{" "}
        </Text>{" "}
        Para todos los efectos legales, el presente contrato presta mérito
        ejecutivo en caso de incumplimiento por parte del AFILIADO.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          CLÁUSULA OCTAVA: CONFLICTO DE INTERESES:{" "}
        </Text>{" "}
        En caso de que dos o más afiliados a LA CODEM sean contrapartes en el
        mismo proceso jurídico, se prestará el servicio de asesoría y asistencia
        jurídica al que resultare investigado y/o demandado en el proceso. Lo
        anterior de ningún modo constituirá incumplimiento del presente contrato
        por parte de LA CODEM atendiendo de qué se trata del cumplimiento de un
        deber legal.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          CLÁUSULA NOVENA: CAUSALES DE TERMINACIÓN: I) POR PARTE DE LA CODEM:{" "}
        </Text>{" "}
        1. Por el incumplimiento del AFILIADO de cualquiera de las obligaciones
        contenidas en este contrato. 2. Por la muerte del AFILIADO. 3. Por
        disolución y liquidación de LA CODEM 4. En cualquier momento de manera
        unilateral de conformidad a lo establecido en sus estatutos.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          II). POR PARTE DEL AFILIADO:{" "}
        </Text>{" "}
        1. Por el incumplimiento de LA CODEM de cualquiera de las obligaciones
        contenidas en este contrato. 2. Por vencimiento del término del contrato
        en su plazo inicial o durante sus prórrogas.
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          CLÁUSULA DÉCIMA: DOMICILIO CONTRACTUAL:{" "}
        </Text>
        Para todos los efectos legales, el domicilio contractual será la ciudad
        de Bogotá, D.C. Las comunicaciones y notificaciones serán recibidas por
        las partes contratantes al correo electrónico
        recepcion@defensoriamilitar.org y EL AFILIADO en la dirección, teléfono,
        celular o correo electrónico registrado en el encabezamiento del
        presente contrato.
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          CLÁUSULA DÉCIMA PRIMERA: AUTORIZACIÓN PARA TRATAMIENTO DE DATOS
          PERSONALES:
        </Text>{" "}
        EL AFILIADO en su calidad de titular de los datos personales, de
        conformidad con lo establecido en la Ley Estatutaria 1581 de 2012, el
        Decreto Reglamentario 1377 de 2013 y demás normas concordantes con la
        protección de datos personales, de manera libre y voluntaria manifiesta
        que:{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          1)
        </Text>{" "}
        LA CODEM actuará como responsable del tratamiento de los datos de los
        cuales es titular.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          2)
        </Text>{" "}
        LA CODEM se ha comprometido a conservar los datos personales que EL
        AFILIADO le ha proporcionado, bajo las condiciones de seguridad y
        privacidad necesarias para impedir su adulteración, pérdida, consulta,
        uso o acceso no autorizado o fraudulento.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          3).
        </Text>
        Conjunta o separadamente LA CODEM podrá recolectar, usar y tratar los
        datos personales del AFILIADO conforme a la Política de Tratamiento de
        Datos personales de la CODEM.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          4)
        </Text>{" "}
        La CODEM se ha comprometido a que cuando le haya encargado el
        tratamiento de los datos personales del AFILIADO a terceros, se
        asegurará que éstos cumplan las políticas y procedimientos que
        garanticen conservar tales datos, bajo las condiciones de seguridad y
        privacidad necesarias para impedir su adulteración, pérdida, consulta,
        uso o acceso no autorizado o fraudulento.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          5)
        </Text>{" "}
        La CODEM le ha informado al AFILIADO sus derechos como titular de los
        datos los cuales están previstos en la Constitución y la ley,
        especialmente el derecho a conocer, actualizar, rectificar y suprimir la
        información personal, así como el derecho a revocar el consentimiento
        otorgado para el tratamiento de datos personales. Por todo lo anterior
        EL AFILIADO manifiesta de manera libre y voluntaria que{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          AUTORIZA{" "}
        </Text>{" "}
        a la CODEM a continuar con el tratamiento de sus datos personales que
        haya almacenado o que en el futuro almacene en sus bases de datos o
        archivos, en virtud de la suscripción del presente Contrato de
        Afiliación.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          CLÁUSULA DÉCIMA SEGUNDA:{" "}
        </Text>{" "}
        Con la suscripción del presente contrato se da por terminado cualquier
        contrato, vínculo legal o jurídico anterior con LA CODEM, por tanto, de
        manera expresa el AFILIADO renuncia libremente a iniciar cualquier tipo
        de acción judicial y/o legal en contra de LA CODEM, entendiéndose por
        tanto a paz y salvo por todo concepto anterior con LA CODEM.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          PARÁGRAFO:{" "}
        </Text>
        En todo caso, el presente contrato estará sujeto a lo establecido en los
        estatutos de la CODEM.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          CLÁUSULA DÉCIMA TERCERA:{" "}
        </Text>{" "}
        Las partes de común acuerdo establecen que el CONTRATO podrá ser cedido
        total o parcialmente por parte de LA CODEM.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          {" "}
          CLÁUSULA DÉCIMA CUARTA: PERFECCIONAMIENTO DEL CONTRATO:{" "}
        </Text>{" "}
        El presente contrato de prestación de servicios, requiere para su
        perfeccionamiento, la suscripción por cada una de las partes.{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "Helvetica-Bold" }}>
          El presente contrato de prestación de servicios se suscribe, el día{" "}
          <Text style={{ textDecoration: "underline" }}>
            {moment().format("D")}
          </Text>{" "}
          del mes{" "}
          <Text style={{ textDecoration: "underline" }}>
            {moment().format("M")}
          </Text>{" "}
          del año{" "}
          <Text style={{ textDecoration: "underline" }}>
            {" "}
            {moment().format("YYYY")}.
          </Text>
        </Text>
      </Text>
    </View>
  );
  const SignatureInfoSection = () => (
    <View
      style={{
        width: "100%",
        marginTop: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "absolute",
        bottom: "30px",
        left: "10px",
      }}
    >
      <View
        style={{
          width: "270px",
          border: "1px solid #000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            fontSize: "10px",
            fontWeight: "bold",
            borderBottom: "1px solid #000",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "4px 0",
          }}
        >
          <Text>POR LA CORPORACIÓN DEFENSORÍA MILITAR</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
          }}
        >
          <View
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              borderRight: "1px solid #000",
              height: "100%",
              width: "30%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
                fontWeight: "bold",
                fontSize: "8px",
                textAlign: "center",
                padding: "0 2px",
              }}
            >
              REPRESENTANTE LEGAL
            </Text>
          </View>
          <View
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              height: "100%",
              width: "70%",
            }}
          >
            <View>
              <Image
                style={{
                  height: "160px",
                  objectFit: "contain",
                  objectPosition: "left",
                }}
                src={`/assets/brand/Firma.png`}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "270px",
          border: "1px solid #000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            fontSize: "10px",
            fontWeight: "bold",
            borderBottom: "1px solid #000",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "4px 0",
          }}
        >
          <Text>EL AFILIADO</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
          }}
        >
          <View
            style={{
              fontWeight: "bold",
              borderRight: "1px solid #000",
              height: "100%",
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                height: "80%",
                position: "relative",
              }}
            >
              {signature && (
                <Image
                  style={{
                    //width: 'objectFit',
                    height: "60px",
                    objectFit: "contain",
                    objectPosition: "left",
                    position: "absolute",
                    top: "0",
                    left: "4px",
                  }}
                  src={`data:image/png;base64, ${signature}`}
                />
              )}
            </View>
            <View
              style={{
                width: "100%",
                fontSize: "10px",
                fontWeight: "bold",
                borderTop: "1px solid #000",
                padding: "2px",
                textAlign: "center",
                position: "relative",
              }}
            >
              <Text
                style={{
                  fontFamily: "Helvetica-Bold",
                  fontWeight: "bold",
                  height: "100%",
                  fontSize: "8px",
                  position: "absolute",
                  top: "2px",
                  left: "4px",
                }}
              >
                CC
              </Text>
              <Text>Expedida en: {moment().format("L")}</Text>
            </View>
          </View>
          <View
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              height: "100%",
              width: "30%",
            }}
          >
            <Text></Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <Document>
      <Page size="A3" style={{ padding: 10 }}>
        {/* header */}
        <HeaderSection page={1} maxPage={2} />
        {/* table */}
        <View
          style={{
            border: "1px solid #000",
          }}
        >
          <DoubleCol
            label1={"CONTRATO No"}
            value1={"affiliteData?.contract?.id"}
            label2={"CÓDIGO DE AFILIACIÓN"}
            value2={"affiliteData?.affiliationCode"}
          />
          <DoubleCol
            label1={"CIUDAD"}
            value1={"affiliteData.city.name"}
            label2={"FECHA"}
            value2={moment().format("L")}
          />
          <OneCol label={"NOMBRE COMPLETO"} value={`${"affiliteData.name"}`} />
          <DoubleCol
            label1={"CÉDULA DE CIUDADANÍA"}
            value1={"affiliteData.documentNum"}
            label2={"LUGAR DE EXPEDICIÓN"}
            value2={"affiliteData.documentCity"}
          />
          <DoubleCol
            label1={"GRADO"}
            value1={"affiliteData.militaryGrade.name"}
            label2={"UNIDAD MILITAR"}
            value2={"affiliteData.militaryUnit.name"}
          />
          <DoubleCol
            label1={"DIRECCIÓN"}
            value1={"affiliteData?.address"}
            label2={"CIUDAD Y DEPARTAMENTO"}
            value2={`${"affiliteData.city.name"} / ${"affiliteData.department.name"}`}
          />
          <DoubleCol
            label1={"NÚMERO CELULAR 1"}
            value1={"affiliteData.phone"}
            label2={"NÚMERO CELULAR 2"}
            value2={""}
          />
          <OneCol label={"CORREO ELECTRÓNICO"} value={"affiliteData.email"} />
        </View>
        {/* Info Contract */}
        <FirstInfoSection />
      </Page>
      <Page size="A3" style={{ padding: 10 }}>
        {/* header */}
        <HeaderSection page={2} maxPage={2} />

        {/* Info Contract */}
        <SecondInfoSection />

        {/* Signatures */}
        <SignatureInfoSection />
      </Page>
    </Document>
  );
};

export default ContratoPDF;

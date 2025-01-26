import { Table, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { Client } from "../../db/tables/Clients/ClientsType";
import { db } from "../../db/db";

interface SelectClientModalProps {
  onClientSelect: (client: Client) => void;
}
export const SelectClientModal = ({
  onClientSelect,
}: SelectClientModalProps) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [search, setSearch] = useState("");
  const filteredClients = clients.filter(
    (client) =>
      // buscar por nombre , referencia o marca
      client.nombre.toLowerCase().includes(search.toLowerCase()) ||
      client.nit_cedula.toLowerCase().includes(search.toLowerCase()) ||
      client.encargado.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const loadClients = async () => {
      const allClients = await db.clients.toArray();
      setClients(allClients);
    };
    loadClients();
  }, []);

  return (
    <>
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
              onClick={() => onClientSelect(client)}
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
    </>
  );
};

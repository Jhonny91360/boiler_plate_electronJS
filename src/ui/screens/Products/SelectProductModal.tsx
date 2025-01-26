import { NumberFormatter, Table, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { Product } from "../../db/tables/Products/ProductsType";
import { db } from "../../db/db";

interface SelectProductModalProps {
  onProductSelect: (product: Product) => void;
}
export const SelectProductModal = ({
  onProductSelect,
}: SelectProductModalProps) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  // Filtrar productos por nombre
  const filteredProducts = products.filter(
    (product) =>
      // buscar por nombre , referencia o marca
      product.nombre.toLowerCase().includes(search.toLowerCase()) ||
      product.referencia.toLowerCase().includes(search.toLowerCase()) ||
      product.marca.toLowerCase().includes(search.toLowerCase())
  );

  // Cargar los productos desde la base de datos
  useEffect(() => {
    const loadProducts = async () => {
      const allProducts = await db.products.toArray();
      setProducts(allProducts);
    };

    loadProducts();
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
              onClick={() => onProductSelect(product)}
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
    </>
  );
};

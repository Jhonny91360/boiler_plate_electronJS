import { Card, Text, Badge, Button, Group } from "@mantine/core";

interface Props {
  title: string;
  description: string;
  badgeText: string;
  buttonText: string;
  buttonAction: () => void;
}
export const MenuCard = ({
  title,
  description,
  badgeText,
  buttonText,
  buttonAction,
}: Props) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        width: 300,
        height: 200,
      }}
    >
      {/* <Card.Section>
        <Image src="src/ui/assets/bg-8.png" height={160} alt="Norway" />
      </Card.Section> */}

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color="pink">{badgeText}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={buttonAction}>
        {buttonText}
      </Button>
    </Card>
  );
};

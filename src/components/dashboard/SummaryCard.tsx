import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface SummaryCardProps {
  title: string;
  value: number;
}

export default function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h3"
          component="p"
          sx={{
            fontWeight: "bold",
          }}
        >
          {value}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

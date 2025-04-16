import { Link, useLoaderData } from "react-router-dom";
import { Product } from "../utils/Interface";
import Rating from "../components/Rating";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function ProductList() {
  const { products } = useLoaderData() as { products: Product[] };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, p: 3 }}>
      {products.map((p: Product) => (
        <Box
          key={p.id}
          sx={{
            width: { xs: "100%", sm: "48%", md: "23%" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link to={`/product/${p.id}`} style={{ textDecoration: "none" }}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 400,
                width: "100%",
              }}
            >
              <CardMedia
                component="img"
                image={p.images[0]}
                alt={p.title}
                sx={{
                  height: 200,
                  objectFit: "contain",
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {p.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.description.length > 100
                    ? p.description.slice(0, 100) + "..."
                    : p.description}
                </Typography>
                <Rating value={parseFloat(p.rating)} />
              </CardContent>
              <Box sx={{ px: 2, pb: 2 }}>
                <Typography variant="subtitle1" color="primary">
                  ${p.price}
                </Typography>
              </Box>
            </Card>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default ProductList;

import { Link, useLoaderData } from "react-router-dom";
import { Product } from "../utils/Interface";
import Rating from "../components/Rating";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

function ProductList() {
  const { products } = useLoaderData() as { products: Product[] };

  return (
    <Grid container spacing={3} padding={3}>
      {products.map((p: Product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={p.id}>
          <Link to={`/product/${p.id}`} style={{ textDecoration: "none" }}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 400,
                width: 450,
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
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;

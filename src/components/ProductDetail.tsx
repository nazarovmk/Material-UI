import { useParams } from "react-router-dom";
import { Product } from "../utils/Interface";
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Box,
  Chip,
  Rating,
} from "@mui/material";

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product)
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Card sx={{ maxWidth: 800, boxShadow: 5, p: 2 }}>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2}>
          <Box flex={1}>
            <CardMedia
              component="img"
              height="300"
              image={product.images[0]}
              alt={product.title}
              sx={{ objectFit: "contain", borderRadius: 2 }}
            />
          </Box>
          <Box flex={1}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {product.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1,
                  mb: 2,
                }}
              >
                <Chip label={product.category} color="primary" />
                <Chip label={product.brand} color="secondary" />
              </Box>

              <Typography variant="body1" gutterBottom>
                {product.description}
              </Typography>

              <Typography variant="h6" color="primary">
                Price: ${product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discount: {product.discountPercentage}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Stock: {product.stock}
              </Typography>

              <Box mt={2}>
                <Rating
                  name="read-only"
                  value={product.rating}
                  precision={0.5}
                  readOnly
                />
              </Box>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default ProductDetail;

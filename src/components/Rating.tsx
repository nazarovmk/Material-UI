import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

interface RatingProps {
  value: number;
}

export default function BasicRating({ value }: RatingProps) {
  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Typography component="legend">Rating</Typography>
      <Rating name="simple-controlled" value={value} readOnly />
    </Box>
  );
}

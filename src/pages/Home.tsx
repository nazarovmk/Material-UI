import { Container } from "@mui/material";
import { axiosInstance } from "../utils";
import ProducList from "../components/ProducList";

export const loader = async () => {
  const req = await axiosInstance("/product?limit=194");
  const data = req.data;
  return data;
};
function Home() {
  return (
    <Container maxWidth="xl">
      <div>
        <h2>Home</h2>
        <ProducList />
      </div>
    </Container>
  );
}

export default Home;

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";

function MainLayouts() {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          py: 5,
        }}
      >
        <Outlet />
      </Box>
      {/* Footer */}
    </>
  );
}

export default MainLayouts;

import { Link } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        React Application
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button component={Link} to="/counter" variant="contained">
          Counter
        </Button>
        <Button component={Link} to="/register" variant="contained">
          User Form
        </Button>
        <Button component={Link} to="/editor" variant="contained">
          Rich Text Editor
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
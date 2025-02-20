import { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
    
      <motion.div
        animate={{ backgroundColor: `rgba(0, 0, 255, ${count / 10})` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ padding: "20px", borderRadius: "8px" }}
      >
        <Typography variant="h4">Counter: {count}</Typography>
      </motion.div>

      <Button onClick={() => setCount(count + 1)} sx={{ m: 1 }} variant="contained">
        Increment
      </Button>
      <Button onClick={() => setCount(count - 1)} sx={{ m: 1 }} variant="contained">
        Decrement
      </Button>
      <Button onClick={() => setCount(0)} sx={{ m: 1 }} variant="contained" color="secondary">
        Reset
      </Button>
    </Box>
  );
};

export default Counter;
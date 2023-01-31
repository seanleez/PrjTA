import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./InvalidPage.module.scss";

const InvalidPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box className={`${styles.container}`}>
      <Typography className={`${styles.title}`}>404</Typography>
      <Typography className={`${styles.message}`}>
        The page could not be found !
      </Typography>
      <Button
        variant="contained"
        className={`primary-button`}
        onClick={() => navigate("/")}
      >
        Go To Home Page
      </Button>
    </Box>
  );
};

export default InvalidPage;

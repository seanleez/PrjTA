import EmailIcon from "@assets/icons/email-icon.svg";
import PasswordIcon from "@assets/icons/password-icon.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import styles from "./LoginForm.module.scss";

interface IValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("Invalid email address").required("Required"),
      password: yup.string().required("Required"),
    }),
    onSubmit: (values: IValues) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`${styles.formContainer}`}
      noValidate
      autoComplete="off"
      spellCheck="false"
    >
      <Typography className={`${styles.title}`}>Welcome Back!</Typography>

      <TextField
        placeholder="Email *"
        name="email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={EmailIcon} alt={EmailIcon} />
            </InputAdornment>
          ),
        }}
        helperText={formik.touched.email && formik.errors.email}
        value={formik.values.email}
        onChange={formik.handleChange}
      />

      <TextField
        type={showPassword ? "text" : "password"}
        placeholder="Password *"
        name="password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={PasswordIcon} alt={PasswordIcon} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        helperText={formik.touched.password && formik.errors.password}
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <Button className={`primary-button ${styles.submitButton}`} type="submit">
        Login
      </Button>
      <Divider />
      <Typography className={`${styles.link}`}>
        Don't have an account?
        <Link to={"/register"}>
          <b> Sign Up</b>
        </Link>
      </Typography>
    </form>
  );
};

export default LoginForm;

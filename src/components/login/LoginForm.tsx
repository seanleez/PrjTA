import EmailIcon from "@assets/icons/email-icon.svg";
import PasswordIcon from "@assets/icons/password-icon.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import styles from "./LoginForm.module.scss";

import { useDispatch } from "react-redux";
import { setCredentials } from "@redux/slices/authSlice";
import { useLoginMutation } from "@services/authApiSlice";
import clsx from "clsx";

interface IValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "vanviendong@gmail.com",
      password: "donglee123",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("Invalid email address")
        .min(8, "At least 8 characters")
        .required("Required"),
      password: yup
        .string()
        .min(8, "At least 8 characters")
        .required("Required"),
    }),
    onSubmit: handleSubmit,
  });

  function handleSubmit(values: IValues) {
    (async () => {
      console.log(values);
      try {
        const accessToken = await login(values).unwrap();
        const credentials = {
          userEmail: formik.values.email,
          accessToken,
        };
        dispatch(setCredentials(credentials));
      } catch (error) {}
    })();
  }

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
      <Button
        className={clsx(
          "primary-button",
          styles.submitButton,
          isLoading && styles.disabled,
        )}
        disabled={isLoading}
        type="submit"
      >
        Login
        {isLoading && <CircularProgress size={24} sx={{ marginLeft: "5px" }} />}
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

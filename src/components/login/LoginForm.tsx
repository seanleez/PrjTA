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
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import styles from "./LoginForm.module.scss";

import { ModalDialog } from "@components/common";
import { useAppDispatch } from "@hooks/reduxToolkitHooks";
import { logIn } from "@redux/slices/authSlice";
import { useLoginMutation } from "@services/authApi";
import clsx from "clsx";

interface IValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "vanviendong123@gmail.com",
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
        const { accessToken } = await login(values).unwrap();
        dispatch(logIn({ accessToken }));
      } catch (error) {}
    })();
  }

  return (
    <>
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
        {isError && (
          <span className={`${styles.errorMessage}`}>
            {(error as any)?.data?.message}
          </span>
        )}
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
        </Button>
        <Divider />
        <Typography className={`${styles.link}`}>
          Don't have an account?
          <Link to={"/register"}>
            <b> Sign Up</b>
          </Link>
        </Typography>
      </form>

      <ModalDialog
        type={"success"}
        openDialog={isSuccess}
        message={"Login Successfully!"}
        onCloseDialog={() => navigate("/")}
      />
    </>
  );
};

export default LoginForm;

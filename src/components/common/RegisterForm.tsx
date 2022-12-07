import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import styles from "./RegisterForm.module.scss";
import UserIcon from "@assets/icons/user-icon.svg";
import PhoneIcon from "@assets/icons/phone-icon.svg";
import AddressIcon from "@assets/icons/address-icon.svg";
import EmailIcon from "@assets/icons/email-icon.svg";
import PasswordIcon from "@assets/icons/password-icon.svg";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";

interface IRegisterForm {
  title: "Register" | "Edit Information";
}

interface IValues {
  userName: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC<IRegisterForm> = ({ title }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      userName: "",
      phone: "",
      address: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    // validateOnBlur: true,
    validationSchema: yup.object().shape({
      userName: yup.string().required("Required"),
      phone: yup
        .string()
        .matches(/^\d+$/, "Phone has to be contained all numbers"),
      email: yup.string().email("Invalid email address").required("Required"),
      password: yup.string().required("Required"),
      confirmPassword: yup
        .string()
        .required("Required")
        .oneOf(
          [yup.ref("password"), null],
          "Confirm passwod must match password",
        ),
    }),
    onSubmit: (values: IValues) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`${styles["form-container"]}`}
      noValidate
      autoComplete="off"
      spellCheck="false"
    >
      <Typography className={`${styles["title"]}`}>{title}</Typography>
      <TextField
        placeholder="User Name *"
        name="userName"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={UserIcon} alt={UserIcon} />
            </InputAdornment>
          ),
        }}
        // helperText={formik.errors.userName}
        error={formik.touched.userName && Boolean(formik.errors.userName)}
        helperText={formik.touched.userName && formik.errors.userName}
        value={formik.values.userName}
        onChange={formik.handleChange}
      />
      <TextField
        placeholder="Phone"
        name="phone"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={PhoneIcon} alt={PhoneIcon} />
            </InputAdornment>
          ),
        }}
        helperText={formik.errors.phone}
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      <TextField
        placeholder="Address"
        name="address"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={AddressIcon} alt={AddressIcon} />
            </InputAdornment>
          ),
        }}
        value={formik.values.address}
        onChange={formik.handleChange}
      />
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
        error={formik.touched.email && Boolean(formik.errors.email)}
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
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <TextField
        type={showPassword ? "text" : "password"}
        placeholder="Confirm Password *"
        name="confirmPassword"
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
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
      />

      <Button
        className={`primary-button ${styles["submit-button"]}`}
        type="submit"
      >
        {title === "Register" ? "Sign up" : "Update"}
      </Button>

      <Typography className={`${styles["link"]}`}>
        Already have an account?{" "}
        <Link to={"/login"}>
          <b>Sign In</b>
        </Link>
      </Typography>
    </form>
  );
};

export default RegisterForm;

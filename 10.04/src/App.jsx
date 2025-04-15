import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';

export default function App() {

  const [passHelperConfig, setPassHelperConfig] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const pass = watch("password", "");

  useEffect(() => {

    if (errors.password) return setPassHelperConfig({
      title: errors.password.message,
      color: "error.main",
    });

    if (pass.length === 0) return setPassHelperConfig({
      title: "",
      color: "inherit",
    });

    if (pass.length >= 10) return setPassHelperConfig({
      title: "Password is strong!",
      color: "success.main",
    });

    if (pass.length >= 6) return setPassHelperConfig({
      title: "Password is medium!",
      color: "warning.main",
    });

    setPassHelperConfig({
      title: "Password is weak!",
      color: "text.secondary",
    });
  }, [pass, errors.password])


  const onSubmit = (data) => console.log(data)

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        maxWidth: 300,
        margin: "5rem auto",
        padding: 2,
        border: "1px solid #ddd",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={2}>
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        error={!!errors.email}
        fullWidth
        helperText={errors.email?.message}
        {...register("email", {
          required: "Email is required!",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          }
        })}
      />
      <TextField
        label="Password"
        type="password"
        error={!!errors.password}
        fullWidth
        helperText={passHelperConfig.title}
        FormHelperTextProps={{
          sx: {
            color: passHelperConfig.color
          }
        }}

        {...register("password", {
          required: "Password is required!",
          minLength: {
            value: 6,
            message: "Password is weak, at least 6 characters!",
          }
        })}
      />
      <Button type="submit" variant="contained" color="primary">
        Sign In
      </Button>
    </Box>
  )
};

import { useFormik } from "formik";
import { Button, TextField, Grid } from "@mui/material";
import emailjs from "emailjs-com";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

export const Contact = () => {
  const sendEmail = (data, resetForm) => {
    const emailData = {
      to_name: "Lucas",
      from_name: `${data.name} ${data.lastname}`,
      message: data.massage,
      email: data.email,
    };

    emailjs
      .send(
        "service_kzjofqg",
        "template_k57sqlf",
        emailData,
        "tMYUyOz1LZ4Wci1sp"
      )
      .then((res) => {
        console.log("Email Sent: ", res.text);
        toast.success("Message sent successfully!", {
          className: "toastify-custom",
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        resetForm(); // Asegúrate de que se llame a resetForm aquí
      })
      .catch((err) => {
        console.log("Email Error: ", err.text);
        toast.error("Error sending message, please try again.", {
          className: "toastify-custom toastify-custom-error",
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const { handleSubmit, handleChange, values, resetForm, errors } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      massage: "",
    },
    onSubmit: (data, { resetForm }) => {
      sendEmail(data, resetForm);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .required("This field is required")
        .matches(/^[A-Za-z\s]+$/, "Only letters are allowed")
        .min(3, "This field requires at least 3 characters"),
      lastname: Yup.string()
        .trim()
        .required("This field is required")
        .matches(/^[A-Za-z\s]+$/, "Only letters are allowed")
        .min(3, "This field requires at least 3 characters"),
      email: Yup.string()
        .trim()
        .email("This field requires a valid email address")
        .required("This field is required"),
      massage: Yup.string()
        .trim()
        .required("This field is required")
        .min(3, "This field requires at least 3 characters")
        .max(500, "This field allows up to 500 characters"),
    }),
  });

  return (
    <div
      className="contact_container"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        color: "#fafafa",
        padding: "4em",
      }}
    >
      <h3 style={{ textAlign: "center", margin: "1em", fontSize: "1.6rem" }}>
        Contact
      </h3>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="name"
              label="Name"
              variant="filled"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name ? true : false}
              helperText={errors.name}
              InputProps={{
                style: { color: "#fafafa" },
              }}
              sx={{
                backgroundColor: "#0a0a0a8e",
                "& .MuiFilledInput-root": { backgroundColor: "#0a0a0a8e" },
                "& .MuiInputLabel-root": { color: "#fafafa" },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="lastname"
              label="Lastname"
              variant="filled"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              error={errors.lastname ? true : false}
              helperText={errors.lastname}
              InputProps={{
                style: { color: "#fafafa" },
              }}
              sx={{
                backgroundColor: "#0a0a0a8e",
                "& .MuiFilledInput-root": { backgroundColor: "#0a0a0a8e" },
                "& .MuiInputLabel-root": { color: "#fafafa" },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              variant="filled"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
              InputProps={{
                style: { color: "#fafafa" },
              }}
              sx={{
                backgroundColor: "#0a0a0a8e",
                "& .MuiFilledInput-root": { backgroundColor: "#0a0a0a8e" },
                "& .MuiInputLabel-root": { color: "#fafafa" },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="massage"
              label="Message"
              variant="filled"
              name="massage"
              value={values.massage}
              onChange={handleChange}
              InputProps={{
                style: { color: "#fafafa" },
              }}
              error={errors.massage ? true : false}
              helperText={errors.massage}
              multiline
              rows={4}
              sx={{
                backgroundColor: "#0a0a0a8e",
                "& .MuiFilledInput-root": { backgroundColor: "#0a0a0a8e" },
                "& .MuiInputLabel-root": { color: "#fafafa" },
              }}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#fafafa", color: "#0a0a0a" }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
      <ToastContainer />
    </div>
  );
};

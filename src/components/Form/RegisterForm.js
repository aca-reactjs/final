import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import './RegisterForm.css';

export default function RegisterForm({ title, response, formik }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 64px)',
      }}
    >
      {!response ? null : (
        <Snackbar open autoHideDuration={6000}>
          <MuiAlert severity={response.type} sx={{ width: '100%' }}>
            {response.message}
          </MuiAlert>
        </Snackbar>
      )}
      <form className="signup-form" onSubmit={formik.handleSubmit}>
        {title && (
          <Typography
            sx={{ color: 'primary.main' }}
            component="h4"
            variant="h5"
          >
            {title}
          </Typography>
        )}

        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          sx={{ width: '100%' }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          sx={{ width: '100%' }}
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ width: '100%', marginTop: '2em' }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}

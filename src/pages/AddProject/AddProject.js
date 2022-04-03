import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../constants/paths';
import { useAuth } from '../../hooks/useAuth';
import { addProject } from '../../Service/firestore';

export default function AddProject() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      subject: '',
    },
    onSubmit: async (values) => {
      try {
        await addProject({ ...values, userId: user.uid });
        navigate(`/${paths.projects}`);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
  });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '1em' }}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 400,
          gap: '1em',
        }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          type="text"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <TextField
          type="text"
          name="subject"
          label="subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
        />
        <TextField
          label="description"
          name="description"
          multiline
          rows={4}
          variant="outlined"
          value={formik.values.description}
          onChange={formik.handleChange}
        />

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}

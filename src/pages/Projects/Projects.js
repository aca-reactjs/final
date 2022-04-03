import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { useAuth } from '../../hooks/useAuth';
import { getAllProjectByUserId } from '../../Service/firestore';

export default function Projects() {
  const { user } = useAuth();
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    if (user) {
      getAllProjectByUserId(user.uid).then((data) => {
        setProjects(data);
      });
    }
  }, [user]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1em',
        margin: '1em',
        justifyContent: 'center',
      }}
    >
      {projects &&
        projects.map(({ id, ...rest }) => <ProjectCard key={id} {...rest} />)}
    </Box>
  );
}

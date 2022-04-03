import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import EmptyScreen from '../../components/EmptyScreen/EmptyScreen';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { getAllProjectByUserId } from '../../Service/firestore';
import { useAuth } from '../../hooks/useAuth';

import empty from '../../assets/empty.png';

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

  if (projects === null) {
    return <LoadingScreen />;
  }

  if (projects && projects.length === 0) {
    return <EmptyScreen img={empty} title="no projects" />;
  }

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

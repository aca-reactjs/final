import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import { generateRandomColor } from '../../utils';

export default function ProjectCard({ name, description, subject }) {
  return (
    <Card sx={{ maxWidth: 230, bgcolor: generateRandomColor() }}>
      <CardHeader title={name} subheader={subject} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

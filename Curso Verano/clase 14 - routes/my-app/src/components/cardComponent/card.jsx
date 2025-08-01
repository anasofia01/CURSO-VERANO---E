import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

function CardCharacter({ character }) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia component='img' height='140' image={character.image} alt={character.name} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{character.name}
					</Typography>
					<Typography variant='body2' sx={{ color: 'text.secondary' }}>
						{character.gender}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='primary' component={Link} to={`/character/${character.id}`}>
					Share
				</Button>
			</CardActions>
		</Card>
	);
}

export default CardCharacter;

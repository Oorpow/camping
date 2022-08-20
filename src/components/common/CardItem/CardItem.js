import React from 'react'
import LazyLoad from 'react-lazyload'
import {
	CardActionArea,
	CardMedia,
	CardContent,
	Card,
	Typography,
} from '@mui/material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { useNavigate } from 'react-router'
import styles from './CardItem.module.less'

const CardItem = (props) => {
	const { src, title, price, capacity } = props

	const navigate = useNavigate()

	const handleNavToDetail = (title) => {
		navigate(`/product/${title}`)
	}

	return (
		<Card
			sx={{
				boxShadow: '0 0 10px 0 rgb(0 0 0 / 15%)',
			}}
			variant="outlined"
			className={styles.card_main}
		>
			<CardActionArea onClick={() => handleNavToDetail(title)}>
				<LazyLoad>
					<CardMedia
						component="img"
						image={process.env.REACT_APP_DEV_URL + src}
						alt={title}
						className={styles.card_main_img}
					/>
				</LazyLoad>

				<CardContent>
					<Typography gutterBottom variant="h6" component="div">
						{title}
					</Typography>
					<div className={styles.guests}>
						<PersonOutlineOutlinedIcon sx={{ fontSize: 20 }} />
						<span>{capacity} Guests</span>
					</div>
					<div className={styles.price}>
						<span>${price} </span>
						/night
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default CardItem

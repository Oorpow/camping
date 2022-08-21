import React, { useState } from 'react'
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
import MySkeleton from '../MySkeleton/MySkeleton'
import { changeSkeleton } from '../../../utils/changeSkeleton'

const CardItem = (props) => {
	const { src, title, price, capacity } = props

	const navigate = useNavigate()
	const handleNavToDetail = (title) => {
		navigate(`/product/${title}`)
	}

	const [status, setStatus] = useState('pending')

	return (
		<>
			<MySkeleton status={status} />
			<Card
				sx={{
					boxShadow: '0 0 10px 0 rgb(0 0 0 / 15%)',
				}}
				variant="outlined"
				style={{
					visibility: status === 'success' ? 'visible' : 'hidden',
				}}
				className={styles.card_main}
			>
				<CardActionArea onClick={() => handleNavToDetail(title)}>
					<LazyLoad>
						<CardMedia
							component="img"
							image={process.env.REACT_APP_DEV_URL + src}
							alt={title}
							className={styles.card_main_img}
							onLoad={() => changeSkeleton('success', setStatus, 1000)}
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
		</>
	)
}

export default CardItem

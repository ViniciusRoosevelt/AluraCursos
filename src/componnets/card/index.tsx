import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import { FormEventHandler, MouseEventHandler } from "react";




type CardStyle = {
    image_url: string
    alt: string
    title : string
    description: string
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}
export const CardDifferent = ({image_url,alt,title, description, onClick}: CardStyle) => {
    return (
        <Card style={{padding: 12}}  sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
      <CardMedia
        component="img"
        height="194"
        image={image_url}
        alt={alt}
      />
       <Typography variant="body2">
       {description}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton onClick={onClick} aria-label="delete card">
          <DeleteOutline />
        </IconButton>
      </CardActions>
    </Card>
    )
}
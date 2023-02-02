import { AppBar,Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ButtonDiferent } from "../button";
import { MouseEventHandler } from "react";
type AppBartStyle = {
  title : string;
  buttonLabel : string;
  onClickButton?: MouseEventHandler<HTMLButtonElement> | undefined
}
export  const AppBarDifferent = ({title,buttonLabel,onClickButton} : AppBartStyle) => {
    return (<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          
          <Button onClick={onClickButton} color="inherit">{buttonLabel}</Button>
        </Toolbar>
      </AppBar>
    </Box>)
}
//react
import * as React from 'react';
import { Link } from "react-router-dom"

//MUI components
import {Button, Menu, MenuItem} from '@mui/material/';

//styles
import "./Menu.css"

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const styles = {
        popUpBtn: {
            textDecoration: "none",
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            textTransform: "lowercase",
            backgroundColor: "transparent"
        }
    }

    return (
        <div>
            <Button
                sx={{ backgroundColor: 'transparent', '&:hover': { backgroundColor: "transparent" } }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <div className='filter_button-text'>
                    Filtrar por Categoria

                </div>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >   <div className='option_list'>
                    <Link to="/">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                Todos
                            </p>
                        </MenuItem>
                    </Link>
                    <Link to="/category/accion">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                Accion
                            </p>
                        </MenuItem>
                    </Link>
                    <Link to="/category/aventura">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                Aventura</p>
                        </MenuItem>
                    </Link>
                    <Link to="/category/artesmarciales">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                Artes Marciales</p>
                        </MenuItem>
                    </Link>
                    <Link to="/category/battleroyale">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                Battle Royale</p>
                        </MenuItem>
                    </Link>
                    <Link to="/category/deportes">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                Deportes</p>
                        </MenuItem>
                    </Link>
                    <Link to="/category/estrategia">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                Estrategia</p>
                        </MenuItem>
                    </Link>
                    <Link to="/category/fps">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                FPS</p>
                        </MenuItem>
                    </Link>
                    <Link to="/category/mmorpg">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                MMORRPG</p>
                        </MenuItem>
                    </Link>
                    <Link to="/category/moba">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                MOBA</p>
                        </MenuItem>
                    </Link>
                    <Link to="/category/multijugador">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                Multijugador</p>
                        </MenuItem>
                    </Link>
                    <Link to="/category/mundoabierto">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                Mundo Abierto</p>
                        </MenuItem>
                    </Link>
                    <Link to="/category/rol">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                Rol</p>
                        </MenuItem>
                    </Link>
                    <Link to="/category/simulacion">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                Simulacion</p>
                        </MenuItem>
                    </Link>
                    <Link to="/category/terror">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                Terror</p>
                        </MenuItem>
                    </Link>
                    <Link to="/category/unjugador">
                        <MenuItem onClick={handleClose}>
                            <p className="option_list_link">
                                Un Jugador</p>
                        </MenuItem>
                    </Link>
                </div>
            </Menu>
        </div>
    );
}
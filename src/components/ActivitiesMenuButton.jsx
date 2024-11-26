import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/400.css';

export default function ActivitiesMenuButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen= (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-owns={open ? 'mouse-over-menu' : undefined}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onMouseEnter={handleMenuOpen}
                sx={{display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    boxSizing: 'border-box',
                    backgroundColor: 'transparent',
                    fontFamily: 'Roboto, sans-serif',
                    justifyContent: 'left',
                    textTransform: 'initial',
                    borderRadius: '4px',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    pointerEvents: 'auto',
                    color: open ? '#00C26D' : '#1D1D1D', // Menü açıkken yeşil, değilken varsayılan
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                }}
            >
                Etkinlikler
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    onMouseLeave : handleClose,
                }}
                sx = {{
                    cursor: 'pointer',
                    pointerEvents: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiMenu-paper': {
                        visibility: open ? 'visible' : 'hidden',
                        backgroundColor: '#fff',
                        color: '#1D1D1D',
                        justifyContent: 'left',
                        border: '1px solid #D8D8D8',
                        borderTop: '4px solid #00C26D',
                        borderRadius: '5px',
                        padding: '10px 0',
                        minWidth: '150px',
                        lineHeight:'24px',

                    },
                    '& .MuiMenuItem-root': {
                        backgroundColor: 'fff',
                        textDecoration: 'none',
                        verticalAlign: 'middle',
                        position: 'relative',
                        boxSizing: 'border-box',
                        alignItems: 'center',
                        fontFamily: 'Roboto, sans-serif',
                        textTransform: 'initial',
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        letterSpacing: 0.15,
                        lineHeight:'1.5rem',
                        width: 'auto',
                        color: '#1D1D1D',
                        borderRadius: '4px',
                        textSpacing: '0.025rem',
                        padding: '6px 16px',
                        justifyContent: 'left',
                        '&:hover': {
                            backgroundColor: '#fff',
                            color: '#00C26D',
                        },
                    },
                }}
            >
                <MenuItem onClick={()=>window.location.href='https://www.techcareer.net/bootcamp'}
                disableRipple>Bootcamp</MenuItem>
                <MenuItem onClick={()=>window.location.href='https://www.techcareer.net/hackathon'}
                disableRipple>Hackathon</MenuItem>
                <MenuItem onClick={()=>window.location.href='https://www.techcareer.net/hiring-challenge'}
                disableRipple>Hiring Challenge</MenuItem>
                <MenuItem onClick={()=>window.location.href='https://www.techcareer.net/events'}
                disableRipple>Tüm Etkinlikler</MenuItem>
            </Menu>
        </div>
    );
}
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/400.css';

export default function CommunityMenuButton() {
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
                disableRipple
            >
                Komünite
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
                <MenuItem onClick={()=>window.location.href='https://www.techcareer.net/community'}
                          disableRipple>Komüniteye Katıl</MenuItem>
                <MenuItem onClick={()=>window.location.href='https://tr.techcareer.net/community/techcareernet-developer-clubs/?_gl=1*1rdcwky*_gcl_aw*R0NMLjE3MzA4MDI1NjAuQ2owS0NRaUFvYWU1QmhDTkFSSXNBRFZMelpmLWtaM0NfRnpvcHZpUWRvTVhhb2ZucDZVTEJyaUYxWC04S1FnZ0RreTF0Rl9MdEtsNDdsTWFBcXNSRUFMd193Y0I.*_gcl_au*MTg3MDc3ODkwOC4xNzMwODAyNTYw*_ga*MTk0Mjk4NDU2OC4xNzMwODAyNTYw*_ga_E0FGSHPKVP*MTczMjAzOTE3MC4xOS4xLjE3MzIwMzkxNzcuNTMuMC4w*_fplc*MlphUnRYJTJGR1FuRFFDRHllcjVpeFglMkZPTGQyNXhIUUZEUm5nSnQlMkZVN0F2M2tFejRRWGoyeDY1TlVOc3dPZTVrcGxSJTJCbmhSZ1Foc1VjWmxidHVESFhuYTdqcExCb2c3VTFDUnR2RjYlMkJaSFJxcjlVcWxBNkQ5UTlNT2tqU25nZyUzRCUzRA..'}
                          disableRipple>TDC</MenuItem>
                <MenuItem onClick={()=>window.location.href='https://www.techcareer.net/blog'}
                          disableRipple>Blog</MenuItem>
                <MenuItem onClick={()=>window.location.href='https://www.techcareer.net/podcast'}
                          disableRipple>Podcast</MenuItem>
                <MenuItem onClick={()=>window.location.href='https://www.techcareer.net/kariyer-rehberi-fikirleri-ve-basamaklari'}
                          disableRipple>Kariyer Rehberi</MenuItem>
                <MenuItem onClick={()=>window.location.href='https://www.techcareer.net/dictionary'}
                          disableRipple>Teknik Sözlük</MenuItem>
            </Menu>
        </div>
    );
}
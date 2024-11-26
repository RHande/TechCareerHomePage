import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './assets/techcareer-logo.svg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '@fontsource/roboto/500.css';
import ActivitiesMenuButton from "./components/ActivitiesMenuButton.jsx";
import ArrowTooltipsButton from "./components/ArrowTooltipsButton.jsx";
import {Typography} from "@mui/material";
import CommunityMenuButton from "./components/CommunityMenuButton.jsx";




class Navi extends React.Component {
    render() {
        const Search = styled('div')(({ theme }) => ({
            position: 'relative',
            padding: '0px 15px 0px 15px',
            border: '1px solid #BDBDBD',
            borderRadius: theme.shape.borderRadius,
            boxSizing: 'border-box',
            display: 'flex', // Flexbox kullanımı
            alignItems: 'center', // Dikey merkezleme
            '@media (min-width: 900px)': {
                height: '36px',
            },
            '@media (max-width: 900px)': {
                display: 'none',
            },
            '&:focus': {
                boxShadow:'#DBE6FF 0px 2px 2px 0px, #DBE6FF 0px 0px 2px 2px',
            },
            '&:hover': {
                boxShadow:'#DBE6FF 0px 2px 2px 0px, #DBE6FF 0px 0px 2px 2px',
                border: '1px solid #1D1D1D',
                borderRadius: '4px'
            },
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            marginLeft: '24px',
            width: '247px',
            maxWidth: '247px',
            minWidth: '247px'
        }));

        const SearchIconWrapper = styled('div')(() => ({
            padding: '1px 0px 1px 0px',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#878787',
            fill: 'currentColor',
            userSelect: 'none',
            width: '1em',
            height: '1em',
            flexShrink: 0,
            transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            fontSize: '1.5rem',
            boxSizing:'inherit',
            overflowClipMargin: 'content-box',
            overflow: 'clip',
            flexDirection:'column',

        }));

        const StyledInputBase = styled(InputBase)(({ theme }) => ({
            width: '100%',
            color: '#293349',
            fontSize: '14px',
            fontWeight: 500,
            paddingLeft: '15px',
            letterSpacing: 'inherit',
            '& .MuiInputBase-input': {
                letterSpacing: '0.15px',
                lineHeight: '1.4375em',
                cursor: 'text',
                display: 'inline-flex',
                alignItems: 'center',
                width: '100%',
                position: 'relative',
                borderRadius: '4px',
                paddingLeft: '15px',
                transition: theme.transitions.create('width'),
            },
        }));

        return (
                <AppBar sx={{backgroundColor: '#fff',
                    cursor: 'default',
                    display: 'flex',
                    justifyContent: 'center',
                    width: '%100',
                    height: '68px',
                    boxShadow:'0px 1px 5px rgba(0, 0, 0, 0.1)',
                    top: 0,           // Ekranın en üstüne sabitlenir
                    zIndex: 1200}} position= 'absolute'>
                    <Toolbar spacing={1} direction="row"
                        sx = {{ marginLeft: 'auto',
                            marginRight: 'auto',
                            display: 'flex',
                            boxSizing: 'border-box',
                            width:'100%',
                            lineHeight: '24px',
                            alignItems: 'center',
                            '@media (min-width: 1200px)': {
                    maxWidth: '1200px'
                },
                            '@media (min-width: 600px)': {
                                minHeight: '64px',
                                paddingLeft: '24px',
                                paddingRight: '24px'

                            }}}>
                        <IconButton sx={{mr: 2, marginLeft: '3px', marginRight: '12px',
                            display: 'flex',
                            '@media (max-width: 600px)': {
                                marginLeft: '2px'
                            },
                            '@media (min-width: 1025px)': {
                                display: 'none'
                            },
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            position:'relative',
                            padding:'0px 0px 0px 0px'}}
                                    edge="start"
                                    aria-label="open drawer"
                        >
                            <MenuIcon sx={{
                                display: 'inline-flex',
                                justifyContent: 'flex-start',
                                position: 'relative',
                                fontSize: '32px',
                                color: '#293349',
                                '@media (min-width: 1025px)': {
                                    display:'none'
                                },
                            }}/>
                        </IconButton>
                       <Box
                           sx={{
                               width: '185px',
                               maxWidth: '185px',
                               flexGrow: 1,
                               display: 'flex',
                               color: 'transparent',
                               boxSizing: 'border-box',
                               cursor: 'pointer',
                               alignItems: 'center',
                       }}>
                           <Box
                               component="img"
                               src={Logo}
                               alt="Logo"
                               onClick={() => window.location.href = 'https://www.techcareer.net'}
                               sx={{
                                   height: '20px',
                                   padding: '0px 0px 0px 0px',
                                   width: '185px',
                                   maxWidth: '185px',
                                   aspectRatio: 'auto 185/20',
                                   overflowClipMargin: 'content-box',
                                   overflow: 'clip',
                                   cursor: 'pointer', // Tıklanabilir olduğunu belirtmek için
                                   display: 'block',  // Varsayılan img davranışı yerine geçer
                                   objectFit: 'contain', // Görsel boyutlandırma için
                                   '@media (max-width: 900px)': {
                                    width: '120px',
                                    height: '13px',
                                    },
                               }}
                           />
                       </Box>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Etkinlik, İş İlanı, Blog Ara"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Search>
                        <SearchIcon sx={{
                            display: 'flex',
                            marginLeft: 'auto',
                            marginRight: '16px',
                            justifyContent: { xs: 'flex-end' },
                            color: '#1D1D1D',
                            '@media (min-width: 900px)': {
                                display: 'none',
                            },
                            '@media (max-width: 600px)': {
                                marginRight:'0px'
                            },
                            '@media (max-width: 900px)': {
                                marginRight:'0px'
                            },
                            width: '1em',
                            height: '1em',
                            padding: '1px 0px 1px 0px'}}/>
                        <Box>
                        <Stack spacing={1} direction="row"
                        sx={{
                            width:'453px',
                            height: '28px',
                            maxHeight: '24px',
                            lineHeight: '24px',
                            marginLeft: '16px',
                            marginRight: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            position: 'relative',
                            boxSizing: 'border-box',
                            letterSpacing: '0.15px',
                            '@media (max-width: 1025px)': {
                                display: 'none',
                            },
                        }}>
                            <ActivitiesMenuButton sx = {{
                                display: 'inline-flex',
                                alignItems: 'center',
                                position: 'fixed',
                                boxSizing: 'border-box',
                                backgroundColor: 'transparent',
                                fontFamily: 'Roboto, sans-serif',
                                justifyContent: 'left',
                                color: '#1D1D1D',
                                textTransform: 'initial',
                                borderRadius: '4px',
                                fontWeight: 500,
                                fontSize: '0.875rem',
                            }}/>
                            <ArrowTooltipsButton sx = {{
                                display: 'inline-flex',
                                maxHeight: '24px',
                                alignItems: 'center',
                                position: 'fixed',
                                boxSizing: 'border-box',
                                backgroundColor: 'transparent',
                                fontFamily: 'Roboto, sans-serif',
                                justifyContent: 'left',
                                color: '#1D1D1D',
                                textTransform: 'initial',
                                borderRadius: '4px',
                                fontWeight: 500,
                                fontSize: '0.875rem',
                            }}/>
                            <Button variant="text"
                                    sx = {{
                                        display: 'flex',
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
                                        color: '#1D1D1D',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            color: '#00C26D',
                                        },
                                        '&:focus': {
                                            outline: 'none', // Mavi gölgeyi kaldırır
                                            boxShadow: 'none', // Varsayılan gölgeyi sıfırlar
                                        },
                                    }}
                            disableRipple
                                    onClick={()=>window.location.href='https://www.techcareer.net/courses'}
                                    >
                                <Typography
                                    sx={{
                                        boxSizing: 'border-box',
                                        fontWeight: 500,
                                        marginRight: '4px',
                                        color: '#00C26D',
                                        fontSize: '20px',
                                        '@media(min-width:900)': {
                                            fontSize: '1.25rem'
                                        },
                                        '@media(min-width:600)': {
                                            fontSize: '1.25rem'
                                        }
                                    }}
                                >●</Typography>Eğitimler</Button>
                            <CommunityMenuButton sx = {{
                                display: 'inline-flex',
                                alignItems: 'center',
                                position: 'fixed',
                                boxSizing: 'border-box',
                                backgroundColor: 'transparent',
                                fontFamily: 'Roboto, sans-serif',
                                justifyContent: 'left',
                                color: '#1D1D1D',
                                textTransform: 'initial',
                                borderRadius: '4px',
                                fontWeight: 500,
                                fontSize: '0.875rem',
                            }}/>
                            <Button variant="text"
                                    disableRipple
                                    sx = {{
                                        display: 'flex',
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
                                        color: '#1D1D1D',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            color: '#00C26D',
                                        },
                                        '&:focus': {
                                            outline: 'none', // Mavi gölgeyi kaldırır
                                            boxShadow: 'none', // Varsayılan gölgeyi sıfırlar
                                        },
                                    }}
                                    onClick={()=>window.location.href='https://www.techcareer.net/sirketler-icin'}
                                     >
                            Şirketler</Button>
                        </Stack>
                        </Box>
                        <Box
                        sx={{
                            display: 'flex',
                            flexDirection:'row',
                            justifyContent: 'center',
                            marginLeft: 'auto',
                            '@media (max-width: 900px)':{
                                paddingRight:'8px',
                                paddingLeft:'8px',
                                marginLeft:0
                            },

                        }}>
                        <Button variant="contained"
                                position="relative"
                        sx={{
                            '@media (max-width: 900px)': {
                                display: 'inline',
                                paddingRight:'8px',
                                paddingLeft:'8px',
                                position: 'relative',
                                justifyContent: 'flex-end',
                                marginLeft:'auto'
                            },
                            letterSpacing:'0.025rem',
                        justifyContent: 'flex-end',
                        color:'#fff',
                        backgroundColor:'#00C26D',
                        position:'relative',
                        alignItems:'center',
                        boxSizing:'border-box',
                        verticalAlign:'middle',
                        textTransform:'initial',
                        textDecoration: 'none',
                        minWidth:'64px',
                        padding: '6px 16px',
                        borderRadius:'4px',
                        fontWeight:'500',
                        display:'inline',
                        maxHeight: '36px',
                        width:'119px',
                        lineHeight:'24px',
                        boxShadow: 'none',
                            transition:'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                            '&:focus': {
                                outline: 'none', // Mavi gölgeyi kaldırır
                                boxShadow: 'none', // Varsayılan gölgeyi sıfırlar
                            },
                            '&:hover':{
                                boxShadow: 'none',
                                backgroundColor: '#01D076',

                            },
                        }}
                        onClick={()=>window.location.href='https://login.techcareer.net/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dtcnuiapp%26redirect_uri%3Dhttps%253A%252F%252Fwww.techcareer.net%252Fauth%252Fsign-in%26response_type%3Dcode%26scope%3Demail%2520offline_access%2520openid%2520permissions%2520profile%2520roles%2520tcnstsadminpanel_api%26state%3D2f83533102484a9cae35e27482e12109%26code_challenge%3DAr08_bmG-z5JzUM5Ajfsk6sKFzgWIZ2H08-Gmk-SbIo%26code_challenge_method%3DS256%26culture%3Dtr&loginUrl=https://www.techcareer.net/auth/sign-in'}
                        >Giriş/Üye Ol</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
        );

    };
}

export default Navi;
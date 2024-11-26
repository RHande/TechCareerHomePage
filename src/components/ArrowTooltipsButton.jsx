import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .MuiTooltip-tooltip`]: {
        backgroundColor: '#1D1D1D',
        color: 'fff',
        fontSize: 12,
        fontWeight: 500,
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '4px',
        padding: '6px 12px',
    },
    [`& .MuiTooltip-arrow`]: {
        color: '#1D1D1D', // Arrow'un rengi arka planla aynı
    },
}));

export default function ArrowTooltipsButton() {
    return (
        <CustomTooltip title="Yeni işinle sende hayalindeki kariyere kavuşabilirsin.
        Senin için topladığımız iş fırsatlarını şimdi incele" arrow>
            <Button
                sx={{
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
            onClick={()=>window.location.href='https://www.techcareer.net/jobs'}
            disableRipple>
                İş İlanları
            </Button>
        </CustomTooltip>
    );
}
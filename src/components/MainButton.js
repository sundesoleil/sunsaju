import Button from '@mui/material/Button';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Stack from '@mui/material/Stack';

const MainButton = (props) => (
  <Stack direction="row" spacing={2} display="flex" justifyContent="center" alignItems="center">
    <Button
      type="submit"
      style={{ marginTop: '10px', background: '#4044A3', color: '#ffffff', border: 'none', fontSize: '16px', fontWeight: 'bold', borderRadius: '20px' }}
      variant="outlined"
      startIcon={<Fingerprint />}
      {...props}
    >
      {props.children}
    </Button>
  </Stack>
);

export default MainButton;

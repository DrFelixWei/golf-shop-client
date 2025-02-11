'use client';

import { Box, Button } from '@mui/material';

interface LogoutFormProps {
  onConfirm: () => void;
  translations: Record<string, string>;
}

const LogoutForm: React.FC<LogoutFormProps> = ({ onConfirm, translations }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ccc',
        borderRadius: 4,
        padding: 2,
        marginTop: 12, 
        marginLeft: 20,
        zIndex: 100,
      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button variant="contained" color="primary" onClick={onConfirm}>
          {translations.logout}
        </Button>
      </Box>
    </Box>
  );
};

export default LogoutForm;

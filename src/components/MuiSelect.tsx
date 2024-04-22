import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';

export const MuiSelect = () => {
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState<string[]>([]);
    console.log({ countries });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string);
    };

    const handleCountriesChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
    };

    return (
        <Box width="250px" display="flex" flexDirection="column" gap="1rem">
            <TextField
                label="Select Country"
                select
                value={country}
                onChange={handleChange}
                fullWidth
            >
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="US">USA</MenuItem>
                <MenuItem value="PH">Philippines</MenuItem>
            </TextField>
            <TextField
                label="Select Country"
                select
                value={countries}
                onChange={handleCountriesChange}
                fullWidth
                SelectProps={{ multiple: true }}
                size="small"
                color="secondary"
                helperText="Please select your country"
            >
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="US">USA</MenuItem>
                <MenuItem value="PH">Philippines</MenuItem>
            </TextField>
        </Box>
    );
};

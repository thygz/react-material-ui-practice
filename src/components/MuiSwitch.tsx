import {
    Box,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Switch,
} from '@mui/material';
import { useState } from 'react';

export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);
    console.log({ skills });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if (index === -1) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value));
        }
    };

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="Dark mode"
                    control={
                        <Switch
                            checked={checked}
                            onChange={handleChange}
                            size="small"
                            color="success"
                        />
                    }
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label="HTML"
                            value="html"
                            control={
                                <Switch
                                    checked={skills.includes('html')}
                                    onChange={handleSkillChange}
                                />
                            }
                        />
                        <FormControlLabel
                            label="CSS"
                            value="css"
                            control={
                                <Switch
                                    checked={skills.includes('css')}
                                    onChange={handleSkillChange}
                                />
                            }
                        />
                        <FormControlLabel
                            label="Javascript"
                            value="javascript"
                            control={
                                <Switch
                                    checked={skills.includes('javascript')}
                                    onChange={handleSkillChange}
                                />
                            }
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    );
};

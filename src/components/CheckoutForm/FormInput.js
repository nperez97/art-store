import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label }) => {
    const { control } = useFormContext();

    return (
        // <Grid item xs={12} sm={6}>
        //     <Controller
        //         defaultValue=""
        //         as={TextField}
        //         control={control}
        //         fullWidth
        //         name={name}
        //         label={label}
        //         required
        //     />
        // </Grid>
        <Grid item xs={12} sm={6}>
            <Controller
                defaultValue=""
                control={control}
                name={name}
                render={({ field }) => (
                    <TextField
                        {...field}
                        name={name}
                        label={label}
                        required
                        fullWidth
                    />
                )}
            />
        </Grid>
    )
}

export default FormInput
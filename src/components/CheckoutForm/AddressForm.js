import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { commerce } from '../../lib/commerce';

import FormInput from './FormInput';

const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}))

const AddressForm = ({checkoutToken}) => {
    const methods = useForm();

    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, []);


    return (
        <>
            <Typography variant='h6' gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit="">
                    <Grid container spacing={3}>
                        <FormInput name='firstName' label='First name' required />
                        <FormInput name='lastName' label='Last name' required />
                        <FormInput name='email' label='Email' required />
                        <FormInput name='address1' label='Address' required />
                        <FormInput name='city' label='City' required />
                        <FormInput name='state' label='State' required />
                        <FormInput name='zip' label='Zip' required />3
                        <Grid>
                            <InputLabel id="country">Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullwidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map((country) => (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        {/* <Grid>
                            <InputLabel id="country">Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullwidth onChange={(e) => setShippingCountry(e.target.value)}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid>
                            <InputLabel id="country">Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullwidth onChange={(e) => setShippingCountry(e.target.value)}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid> */}
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
import React, { useState } from 'react';
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './FormInput';

const AddressForm = () => {
const [shippingCountries, setShippingCountries] = useState([]);
const [shippingCountry, setShippingCountry] = useState('');
const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
const [shippingSubdivision, setShippingSubdivision] = useState('');
const [shippingOptions, setShippingOptions] = useState([]);
const [shippingOption, setShippingOption] = useState('');

    const methods = useForm();

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                         <FormInput required name="firstName" label="First Name" />
                         <FormInput required name="lastName" label="Last Name" />
                         <FormInput required name="Address" label="Address" />
                         <FormInput required name="Email" label="Email" />
                         <FormInput required name="City" label="City" />
                         <FormInput required name="zipCode" label="ZIP COde" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={} fullwidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Subdivision</InputLabel>
                        <Select value={} fullwidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Option</InputLabel>
                        <Select value={} fullwidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm;

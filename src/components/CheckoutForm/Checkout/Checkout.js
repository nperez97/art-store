import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Button, Typography, Divider, CircularProgress } from '@material-ui/core';

import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment details'];

const Checkout = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(2);

    const Confirmation = () => (
        <div>Confirmation</div>
    );

    const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />;


  return (
    <>
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h5" align="center"></Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : <Form />}
            </Paper>
        </main>
    </>
  )
}

export default Checkout
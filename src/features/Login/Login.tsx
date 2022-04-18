import React from 'react'
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from '@material-ui/core'
import {useFormik} from "formik";

export const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            alert( JSON.stringify(values) )
        }
    })

    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit} >
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}>here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            name={'email'}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            name={'password'}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox
                                onChange={formik.handleChange}
                                checked={formik.values.rememberMe}
                                name={'rememberMe'}
                            />}
                        />
                        <Button type={'submit'} variant={'contained'}
                                color={'primary'}>Login</Button>
                    </FormGroup>
                </FormControl>
            </form>

        </Grid>
    </Grid>
}

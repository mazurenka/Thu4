import React from 'react'
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from '@material-ui/core'
import {useFormik} from "formik";
import { loginTC } from './authReducer';
import {useDispatch} from "react-redux";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: values => {
            const errors: FormikErrorType = {};

            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 4) {
                errors.password = "Must be more than 4 symbols"
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values))
        }
    })

    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit}>
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
                            // name={'email'}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // value={formik.values.email}
                            { ...formik.getFieldProps('email') }
                        />

                        {
                            formik.touched.email
                            && formik.errors.email
                            && <div style={{color: 'red'}}>{formik.errors.email}</div>
                        }

                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            name={'password'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />

                        {
                            formik.touched.password
                            && formik.errors.password
                            && <div style={{color: 'red'}}>{formik.errors.password}</div>
                        }

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

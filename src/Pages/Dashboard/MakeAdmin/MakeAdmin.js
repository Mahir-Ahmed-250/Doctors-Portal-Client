import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from './../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        console.log('click')
        const user = { email }
        fetch('https://mighty-forest-99071.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make And Admin</h2>
            <form onClick={handleAdminSubmit}>
                <TextField
                    sx={{ width: "20%", m: 1 }}
                    label="Email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <br />
                <Button type="submit" variant="contained">Make Admin</Button>
                {success && <Alert severity="success" >Made Admin Successfully</Alert>}
            </form>
        </div>
    );
};

export default MakeAdmin;
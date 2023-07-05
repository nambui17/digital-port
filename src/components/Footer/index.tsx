import React, {useState, useEffect} from 'react';
import { BottomNavigation, Box, SpeedDial, SpeedDialIcon } from '@mui/material';

function Footer() {

    return (
        <>
            <SpeedDial
                ariaLabel='Contact speed dial'
                sx={{ position: 'absolute', bottom: 16, right: 16}}
                icon={<SpeedDialIcon/>}
            >

            </SpeedDial>
        </>
    )
}
import React from 'react';

import { Button, CircularProgress } from '@material-ui/core';


const Empty = props => (
    <div>
        <h3>You did not fetch any content</h3>
        
        {props.isLoading === true ?
            <Loader />
        :     
            <Button 
                onClick={() => props.onClick()}
                size="small" 
                variant="contained" 
                color="primary"
            >
                Fetch data
            </Button>
        }
    </div>
)

const Loader = () => (
    <CircularProgress color="secondary" />
)


export default Empty;
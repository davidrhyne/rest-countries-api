import React from 'react'
import * as ROUTES from '../constants/routes';
import { Link as ReachRouterLink, useParams } from 'react-router-dom';

export default function Featured() {
    const params = useParams()
    console.log(params.countryCode)
    return (
        <div>
            <div>this is the featured page </div>
            <ReachRouterLink to={ROUTES.HOME}>go home</ReachRouterLink>
        </div>
    )
}

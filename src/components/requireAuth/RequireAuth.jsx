import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase/config';

export default function RequireAuth({ children }) {
    let location = useLocation();

    if (!auth.currentUser){
        return <Navigate to="/login" state={{ from: location}} replace />
    }
    return children;
}

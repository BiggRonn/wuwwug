import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

export default function RequireAuth({ children }) {
    let location = useLocation();
    const { currentUser } = useAuthContext();

    if (!currentUser){
        return <Navigate to="/login" state={{ from: location}} replace />
    }
    return children;
}

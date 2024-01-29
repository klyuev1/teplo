import React from 'react';
import { Navigate } from "react-router-dom";

import {ProtectedRouteProps} from "../../utils/interfaces"

const ProtectedRoute: React.FC<ProtectedRouteProps>  = ({ element: Component, ...props  }) => {
  return (
    props.isLoggedIn ? <Component {...props} /> : <Navigate to="/" replace/>
)}

export default ProtectedRoute;
import React from 'react';

import {FormValue} from "../utils/interfaces";

const CurrentUserContext = React.createContext<FormValue | undefined>(undefined);

export default CurrentUserContext;
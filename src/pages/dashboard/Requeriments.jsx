import React from 'react'
import PropTypes from 'prop-types';

import 'styles/pages/dashboard/Requeriments.scss';
import { CircularProgressbar } from 'react-circular-progressbar';

export function Requeriments(){

  return (
    <section>
      <CircularProgressbar value={80} text={`500 kcl`} />;
    </section>
  )
}
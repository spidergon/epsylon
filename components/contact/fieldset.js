import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

export default function Fieldset({ name, label, ...rest }) {
  return (
    <div className="field flex column" style={{ gap: '0.5em' }}>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage className="error" component="span" name={name} />
    </div>
  );
}

Fieldset.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

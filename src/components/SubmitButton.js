import React from 'react'
// import PropTypes from 'prop-types'
import Spinner   from 'components/Spinner';

const SubmitButton = ({loading, fields, disabled, submit}) => {
  disabled = disabled || loading
  return (   
    <button
      style={ { width: '100px' }}
      className="btn btn-primary btn-rounded btn-outline"
      type="submit"
      disabled={false}
      onClick={() => submit(fields)}>
      { loading && <Spinner spinColor={'#000'} spinAlignment={'left'} /> }
      { !loading && 'Submit' }
    </button>
  )
}

export default SubmitButton

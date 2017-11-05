import React from 'react'
import {connect} from 'react-redux'
import {submit} from 'redux/modules/auth'
import Form from 'components/Form'
import InputGroup from 'components/InputGroup'
import {Link} from 'react-router-dom'
import SubmitButton from 'components/SubmitButton'
import {validateInput} from 'redux/modules/common'

const Login = ({fields, loading, submit}) => (
  <Form
    title="Login"
    description="Please enter your name and email address to login">
    {fields[0] && <InputGroup field={fields[0]} validateInput={validateInput} />}
    {fields[1] && <InputGroup field={fields[1]} validateInput={validateInput} />}
    {fields &&
      submit && <div className="form-group text-right"><SubmitButton loading={loading} submit={submit} fields={fields} /> </div>}
    <div className="links">
      <p>
        <span className="m-r-5">Don't have an account?</span>
        <Link to="/pages/create-account">Create account</Link>
      </p>
    </div>
  </Form>
)

const mapStateToProps = (state, ownProps) => {
  return {
    fields: state.auth.fields
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submit: fields => dispatch(submit(fields)),
    validateInput: (e, field) => dispatch(validateInput(e, field))    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

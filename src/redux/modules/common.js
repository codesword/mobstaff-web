import approve from 'approvejs'

export function validateSelect(e, field) {
  return validate(e.target.value, field)
}

export function validateInput(e, field) {
  return validate(e.target.value, field)
}

export function setFormState(formState) {
  return {
    type: 'SET_FORM_STATE',
    formState
  }
}

export function validate(value, field) {
  field.value = value
  field = validateField(field)
  return {
    type: 'VALIDATE',
    field
  }
}

export function inValidate(field) {
  return {
    type: 'IN_VALID',
  }
}

export function validateAll(fields) {
  fields = fields.map(field => validateField(field))
  return {
    type: 'VALIDATE_ALL',
    fields
  }
}

export function validateField(field) {
  console.log('called validateInput', field)  
  let result = approve.value(field.value, field.rules)
  if (result.errors && result.errors.length > 0) {
    field = Object.assign({}, field, {
      errors: Array.from(result.errors),
      value: ''
    })
  } else {
    field = Object.assign({}, field, {
      errors: []
    })
  }
  return field
}
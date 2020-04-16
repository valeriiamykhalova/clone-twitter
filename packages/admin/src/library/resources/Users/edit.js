import React from 'react'

import { Edit, SimpleForm, TextInput } from 'react-admin'

import { requiredFieldValidation, required, number } from '@/shared/validators'

export default function UsersEdit(props) {
  return (
    <Edit {...props} title="Edit User">
      <SimpleForm>
        <div>
          <TextInput
            source="first_name"
            label="First name"
            validate={requiredFieldValidation}
          />

          <TextInput
            source="last_name"
            label="Last name"
            validate={requiredFieldValidation}
          />

          <TextInput
            source="facebookId"
            label="Facebook ID"
            validate={[required(), number()]}
          />
        </div>
      </SimpleForm>
    </Edit>
  )
}

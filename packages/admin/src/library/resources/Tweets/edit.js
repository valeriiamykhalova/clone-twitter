import React from 'react'

import { Edit, SimpleForm, TextInput } from 'react-admin'

import { requiredFieldValidation } from '@/shared/validators'

export default function UsersEdit(props) {
  return (
    <Edit {...props} title="Edit User">
      <SimpleForm>
        <div>
          <TextInput
            multiline
            source="content"
            label="Content"
            validate={requiredFieldValidation}
          />

          <TextInput
            source="firstName"
            label="First name"
            validate={requiredFieldValidation}
          />

          <TextInput
            source="lastName"
            label="Last name"
            validate={requiredFieldValidation}
          />
        </div>
      </SimpleForm>
    </Edit>
  )
}

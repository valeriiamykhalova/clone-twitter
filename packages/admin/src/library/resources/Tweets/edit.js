import React from 'react'

import { Edit, SimpleForm, TextInput, required, number } from 'react-admin'

import { requiredFieldValidation } from '@/shared/validators'

const numberValidation = [required(), number()]

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

          <TextInput
            source="comments"
            label="Comments"
            validate={numberValidation}
          />

          <TextInput
            source="hearts"
            label="Hearts"
            validate={numberValidation}
          />

          <TextInput
            source="retweets"
            label="Retweets"
            validate={numberValidation}
          />
        </div>
      </SimpleForm>
    </Edit>
  )
}

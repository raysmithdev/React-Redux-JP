import React from 'react'
import { Form } from 'semantic-ui-react'

const FormView = ({ addBlog }) => (
  <Form onSubmit={ (event) => {
    event.preventDefault()
    let title = event.target.title.value
    let content = event.target.content.value
    addBlog(title, content)
  }}
  >
    <Form.Group widths='equal'>
        <Form.Input name="title" label='First name' placeholder='First name' />
    </Form.Group>
    <Form.TextArea name="content" label='About' placeholder='Tell us more about you...' />
    <Form.Button>Submit</Form.Button>
  </Form>
)

export default FormView

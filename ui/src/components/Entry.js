import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const Entry = ({onAdd, onChange}) => {
    return (
        <Form inline>
            <Form.Control 
                id="playername"
                placeholder="Name"
                className="mb-2 mr-sm-2"
                name = "name"
                onChange = {onChange}
            />
            <FormControl 
                id="playerteam" 
                placeholder="Team" 
                className="mb-2 mr-sm-2"
                name = "team"
                onChange = {onChange}
            />
            <Button type="submit" variant = "danger" className="mb-2" onClick={onAdd}>
                Submit
            </Button>
        </Form>
    );
}

export default Entry

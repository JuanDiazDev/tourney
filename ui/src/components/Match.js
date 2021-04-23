import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const Match = ({onAdd, onChange}) => {
    return (
        <Form inline>
            <Form.Control 
                id="local"
                placeholder="Local"
                className="mb-2 mr-sm-2"
                name = "teams"
                onChange = {onChange}
            />
            <FormControl 
                id="local" 
                placeholder="0" 
                className="mb-2 mr-sm-2"
                name = "score"
                onChange = {onChange}
            />
            <Form.Control 
                id="visitor"
                placeholder="0"
                className="mb-2 mr-sm-2"
                name = "score"
                onChange = {onChange}
            />
            <FormControl 
                id="visitor" 
                placeholder="Visitor" 
                className="mb-2 mr-sm-2"
                name = "teams"
                onChange = {onChange}
            />
            <Button type="submit" variant = "danger" className="mb-2" onClick={onAdd}>
                Submit
            </Button>
        </Form>
    )
}

export default Match

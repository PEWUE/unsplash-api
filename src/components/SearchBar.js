import React, {useState} from 'react';
import {Form, InputGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';

const SearchBar = ({submit, userQuery}) => {

    const history = useHistory();
    const [query, setQuery] = useState(userQuery);

    const handleSubmit = event => {
        event.preventDefault();
        submit(query);
        history.push("/result-page");
    }

    const handleChange = event => {
        setQuery(event.target.value);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faSearch}/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control onChange={handleChange} defaultValue={userQuery} type="text" placeholder="Search free high-resolution photos" />
                </InputGroup>
            </Form>
        </div>
    );
};

export default SearchBar;

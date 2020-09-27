import React from "react";

const SearchBar = () => {
    return <Form.Row>
                <Form.Group as={Col}>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Search here.."
                            />
                       <InputGroup.Prepend>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon="search" />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                </Form.Group>
            </Form.Row>;
};

export default SearchBar;

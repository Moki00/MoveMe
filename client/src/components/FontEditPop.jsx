import React from "react";
import styled from "styled-components";

const Button = styled.div.attrs({
    className: "btn btn-warning w-100 text-danger",
})`
    background-color: #fff55a;
`;

const wrapper = styled.div.attrs({
    className: " input-group-append",
})``;

const Container = styled.div.attrs({
    className: "col-12 text-dark ",
})``;

const Row = styled.div.attrs({
    className: "row mt-3",
})``;

const Input = styled.div.attrs({
    className: "col-4",
})``;

const Label = styled.div.attrs({
    className: "col-4",
})``;

const LeftSide = styled.div.attrs({
    className: "col-12 col-lg-6 ",
})``;

//for desktop only
const RightSide = styled.div.attrs({
    className: "col-12 col-lg-6 ",
})``;

const FonteditPop = () => {
    return (
        <div class="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 className="text-dark">Edit Style</h4>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                        >
                            &times;
                        </button>
                    </div>
                    <div class="modal-body">
                        <Container>
                            <Row>
                                <LeftSide>
                                    <div className="mt-3 d-none d-lg-block text-center font-weight-bold">
                                        Font
                                    </div>
                                    <Row>
                                        <Label>Size</Label>
                                        <Input>
                                            <Button>-</Button>
                                        </Input>
                                        <Input>
                                            <Button>+</Button>
                                        </Input>
                                    </Row>
                                    <Row>
                                        <Label>Font Weight</Label>
                                        <Input>
                                            <Button>-</Button>
                                        </Input>
                                        <Input>
                                            <Button>+</Button>
                                        </Input>
                                    </Row>
                                    <Row>
                                        <Label>Font color </Label>
                                        <Input>
                                            <input
                                                type="color"
                                                style={{
                                                    width: "100%",
                                                    height: "25px",
                                                }}
                                                value="#00ffff"
                                            />
                                        </Input>
                                        <Input></Input>
                                    </Row>
                                    <Row>
                                        <Label>Font</Label>
                                        <Input>
                                            <select
                                                name="cars"
                                                id="cars"
                                                style={{
                                                    background: "#fff55a",
                                                    width: "100%",
                                                    color: "red",
                                                }}
                                            >
                                                <option></option>
                                                <option value="">Arial</option>
                                                <option value="">
                                                    Times New Roman
                                                </option>
                                                <option value="">Times</option>
                                                <option value="">
                                                    Courier New
                                                </option>
                                            </select>
                                        </Input>
                                        <Input></Input>
                                    </Row>
                                </LeftSide>
                                <RightSide>
                                    <div className="mt-3 d-none d-lg-block text-center font-weight-bold">
                                        Overlay
                                    </div>
                                    <Row>
                                        <Label>BG color</Label>
                                        <Input>
                                            <input
                                                type="color"
                                                style={{
                                                    width: "100%",
                                                    height: "25px",
                                                }}
                                                value="#00ffff"
                                            />
                                        </Input>
                                        <Input></Input>
                                    </Row>

                                    <Row>
                                        <Label>BG Opacity</Label>
                                        <Input>
                                            <Button>-</Button>
                                        </Input>
                                        <Input>
                                            <Button>+</Button>
                                        </Input>
                                    </Row>
                                    <Row style={{ "margin-top": "20px" }}>
                                        {/* <Input>
                                            <Button
                                                className="d-lg-none"
                                                style={{
                                                    background: "red",
                                                    border: "red",
                                                }}
                                            >
                                                Close
                                            </Button>
                                        </Input>
                                        <Input>
                                            <Button
                                                className="d-lg-none"
                                                style={{
                                                    background: "red",
                                                    border: "red",
                                                }}
                                            >
                                                Save
                                            </Button>
                                        </Input> */}
                                        <Input></Input>
                                    </Row>
                                </RightSide>
                            </Row>
                        </Container>
                    </div>
                    <div class="modal-footer">
                        {/* <button
                            type="button"
                            class="btn btn-default btn-danger"
                            data-dismiss="modal"
                        >
                            Close
                        </button> */}
                        <button
                            type="button"
                            class="btn btn-default btn-warning text-danger"
                            data-dismiss="modal"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FonteditPop;

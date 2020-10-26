import React from "react";
import styled from "styled-components";

const Button = styled.div.attrs({
    className: "btn btn-warning w-100",
})``;

const wrapper = styled.div.attrs({
    className: "input-group-append",
})``;

const Container = styled.div.attrs({
    className: "col-12 text-dark",
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
    className: "col-12 col-lg-6 p-2",
})``;

const RightSide = styled.div.attrs({
    className: "col-12 col-lg-6 p-2",
})``;

const FontEdit = () => {
    return (
        <Container style={{ background: "#cecece" }}>
            <Row>
                <LeftSide>
                    <div className="mt-3 d-none d-lg-block text-center font-weight-bold">
                        Font
                    </div>
                    <Row>
                        <Label>Size</Label>
                        <Input>
                            <Button style={{ color: "red" }}>-</Button>
                        </Input>
                        <Input>
                            <Button style={{ color: "red" }}>+</Button>
                        </Input>
                    </Row>
                    <Row>
                        <Label>Font Weight</Label>
                        <Input>
                            <Button style={{ color: "red" }}>-</Button>
                        </Input>
                        <Input>
                            <Button style={{ color: "red" }}>+</Button>
                        </Input>
                    </Row>
                    <Row>
                        <Label>Font color </Label>
                        <Input>
                            <input
                                type="color"
                                style={{ width: "100%", height: "25px" }}
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
                                    background: "#ffc107",
                                    width: "100%",
                                    color: "red",
                                }}
                            >
                                <option></option>
                                <option value="">Arial</option>
                                <option value="">Times New Roman</option>
                                <option value="">Times</option>
                                <option value="">Courier New</option>
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
                                style={{ width: "100%", height: "25px" }}
                                value="#00ffff"
                            />
                        </Input>
                        <Input></Input>
                    </Row>

                    <Row>
                        <Label>BG Opacity</Label>
                        <Input>
                            <Button style={{ color: "red" }}>-</Button>
                        </Input>
                        <Input>
                            <Button style={{ color: "red" }}>+</Button>
                        </Input>
                    </Row>
                    <Row style={{ "margin-top": "20px" }}>
                        <Input>
                            <Button
                                className="d-lg-none"
                                style={{ background: "red", border: "red" }}
                            >
                                Close
                            </Button>
                        </Input>
                        <Input>
                            <Button
                                className="d-lg-none"
                                style={{ background: "red", border: "red" }}
                            >
                                Save
                            </Button>
                        </Input>
                        <Input></Input>
                    </Row>
                </RightSide>
            </Row>
        </Container>
    );
};

export default FontEdit;

import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button.attrs({type:'button', className:'btn btn-primary'
})``

class RandomB extends Component {
    render() {
        return (
                <Button>Random</Button>
        )
    }
}

export default RandomB
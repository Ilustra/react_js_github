import styled, { keyframes } from "styled-components";

export const Surface = styled.div`
height: 100vh;
width: 100vw;

background-image: linear-gradient(#fafafa, #fafafa,#fafafa);
`;
export const BoxRow = styled.div.attrs({ className: 'flex flex-row' })``
export const Bottom = styled.button.attrs({ className: 'bg-primary rounded-md ' })``

export const Input = styled.input.attrs({ className: ' p-2 rounded-md shadow-md w-full ' })``
export const Card = styled.div.attrs(props => ({ className: ' bg-withe rounded-md shadow-md ' + props.className }))`
background-color: #fff;
`
export const Text = styled.p`
font-size: 14px;
`
export const Title = styled.p`
font-size: 20px;
`
export const render = keyframes`
    from {
        opacity: 0;
        bottom: -20%;
    }

    to {
    opacity: 3;
    bottom: 0
    }

`
export const griid = keyframes`
    from {
        top: -75%
    }

    to {
 
    top: 0px;
    }

`
export const Transition = styled.div`
    animation-duration: 3s;
    animation-delay: 3s;
    animation-name: slidein;
    position: absolute;
    animation: ${render} 1s  ;

`
export const Grid = styled.div`
    animation-duration: 1s;
    animation-delay: 1s;
    animation-name: slidein;

    border:solid;
    position:relative;
    display: flex;

    position: relative;
      animation: ${griid} 1s  ;

`
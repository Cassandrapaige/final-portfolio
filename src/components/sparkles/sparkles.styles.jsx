import styled, { keyframes } from "styled-components"

export const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`

export const SparkleWrapper = styled.span`
  position: absolute;
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    animation: comeInOut 700ms forwards;
  }
`

export const SparkleSvg = styled.svg`
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    animation: spin 1000ms linear;
  }
`

export const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: 700;
`

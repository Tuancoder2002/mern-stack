import { Col, Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: red;
`

export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left;
`

export const WrapperHeaderAccount= styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    color: #fff;
    gap: 10px;
`

export const WrapperHeaderLeft = styled(Col)`
    display: flex;
`

export const WrapperHeaderShopping = styled.div`
    align-items: center;
    padding-left: 10px;
    color: #fff;
    gap: 10px;
    display: flex;
`
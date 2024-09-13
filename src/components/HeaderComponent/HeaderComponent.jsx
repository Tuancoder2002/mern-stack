import { Col } from "antd";
import React from "react";
import { AudioOutlined, UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperHeaderLeft, WrapperHeaderShopping } from "./styles";

import { Input } from 'antd';
const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);

const onSearch = (value, _e, info) => console.log(info?.source, value);

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader gutter={10}>
                <Col span={6}>
                    <WrapperTextHeader>Tuancode</WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        suffix={suffix}
                        onSearch={onSearch}
                    />
                </Col>
                <WrapperHeaderLeft span={6}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '25px' }} />
                        <div>
                            <span>Đăng nhập/Đăng ký</span>
                            <div>
                                <span>Tài khoản</span>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <WrapperHeaderShopping>                  
                            <ShoppingCartOutlined style={{ fontSize: '30px' }}/>
                            <div>
                                <span>Giỏ hàng</span>                
                            </div>                      
                    </WrapperHeaderShopping>
                </WrapperHeaderLeft>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent
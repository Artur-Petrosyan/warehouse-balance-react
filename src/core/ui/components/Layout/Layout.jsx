import React , { useState } from 'react';
import { AccountBookOutlined , FileOutlined , HomeFilled , TeamOutlined } from '@ant-design/icons';
import { Layout as LayoutAntd , Menu } from 'antd';
import { RouterMemo } from "src/app/Providers/routes";
import { useNavigation } from "core/hooks/useNavigation";
import { useNavigate } from "react-router-dom";
import { withMemo } from "core/hoc";

const {Content , Footer , Sider} = LayoutAntd;

function getItem( label , key , icon , children ) {
    return {
        key ,
        icon ,
        children ,
        label ,
    };
}

const items = [
    getItem('Home' , '/' , <HomeFilled/>) ,
    getItem('Warehouse' , 'Warehouse' , <AccountBookOutlined/>) ,
    getItem('About Us' , 'About Us' , <TeamOutlined/>) ,
    getItem('Contacts' , 'Contacts' , <FileOutlined/>) ,
];
const Layout = () => {
    const [collapsed , setCollapsed] = useState(false);
    const path = useNavigation();
    const navigation = useNavigate();
    return (
        <LayoutAntd
            style={{
                minHeight : '100vh' ,
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={( value ) => setCollapsed(value)}>
                <div className="demo-logo-vertical"/>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline" items={items}
                    onClick={( e ) => navigation(path(e.key.toLowerCase()))}
                />
            </Sider>
            <LayoutAntd>
                <Content
                    style={{
                        margin : '0 16px' ,
                    }}
                >
                    <RouterMemo/>
                </Content>
                <Footer
                    style={{
                        textAlign : 'center' ,
                    }}
                >
                    Clear Count Lite ©2023 Created by Artur Petrosyan
                </Footer>
            </LayoutAntd>
        </LayoutAntd>
    );
}
const LayoutMemo = withMemo(Layout)
export default LayoutMemo;
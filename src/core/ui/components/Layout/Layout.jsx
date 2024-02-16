import React , { useState } from 'react';
import {
    AccountBookOutlined ,
    FileOutlined ,
    HomeFilled ,
    MenuUnfoldOutlined ,
    TeamOutlined ,
    UnorderedListOutlined
} from '@ant-design/icons';
import { Button , Drawer , Layout as LayoutAntd , Menu , Typography } from 'antd';
import { RouterMemo } from "src/app/Providers/routes";
import { useNavigation } from "core/hooks/useNavigation";
import { useNavigate } from "react-router-dom";
import { withMemo } from "core/hoc";
import './LayoutSider.scss'
import useMatchMedia from "core/hooks/MediaQueryList/useMatchMedia";

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
    getItem('Partners' , 'Partners' , <TeamOutlined/>) ,
    getItem('Product list' ,"Product-List",<UnorderedListOutlined />)
];
const Layout = () => {
    const path = useNavigation();
    const navigation = useNavigate();
    const [open , setOpen] = useState(false);
    const {isMobile , isIpadOrTablet} = useMatchMedia()
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <LayoutAntd
            className="layout__isMobile"
            hasSider={!isMobile && !isIpadOrTablet}
            style={{minHeight : "100vh"}}
        >
            {!isMobile && !isIpadOrTablet && <Sider
                className="isDesktop"
                theme="light"
                breakpoint={'lg'}
            >
                <div className="demo-logo-vertical"/>
                <Menu
                    theme="light"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                    onClick={( e ) => navigation(path(e.key.toLowerCase()))}
                />
            </Sider>}
            {(isMobile || isIpadOrTablet) && < div className="isMobile">
                <div className="isMobile__button">
                    <Button type="primary" icon={<MenuUnfoldOutlined/>} onClick={showDrawer}/>
                    <Typography.Title level={1}>ClearCountLite</Typography.Title>
                </div>
                <Drawer
                    onClose={onClose}
                    open={open}
                >
                    <Menu
                        theme="light"
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        items={items}
                        onClick={( e ) => navigation(path(e.key.toLowerCase()))}
                    />
                </Drawer>
            </div>
            }
            <LayoutAntd>
                <Content className="content__isMobile"
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
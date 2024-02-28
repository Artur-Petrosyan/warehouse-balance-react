import React from "react";
import LayoutMemo from "../core/ui/components/Layout/Layout";
import "../App.css";
import { ConfigProvider } from "antd";
import styles from "src/core/styles.json";
function App() {
    return (
        <ConfigProvider theme={styles}>
            <div className="App">
                <LayoutMemo />
            </div>
        </ConfigProvider>
    );
}

export default App;

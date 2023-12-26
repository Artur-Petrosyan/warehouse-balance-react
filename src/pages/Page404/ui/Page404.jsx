import { useNavigate } from "react-router-dom";
import { Button , Result } from "antd";

export const Page404 = () => {
    const navigate = useNavigate()
    const navigateToHome = () => navigate('/')
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
        >
            <Button type="primary" onClick={navigateToHome}>
                Back Home
            </Button>
        </Result>
    )

}
/**
 * A file upload component that uses Ant Design's Upload component.
 *
 * @param {Object} props - The props for the file upload component.
 * @param {Function} props.beforeUpload - A function that handles the file upload before it is sent to the server.
 * @param {boolean} props.multiple - Whether to allow multiple files to be uploaded.
 * @param {boolean} props.showUploadList - Whether to show a list of uploaded files.
 * @returns {JSX.Element} The file upload component.
 * @example
 * import { Upload } from "path/to/uploadComponent";
 *
 * const handleFileUpload = (file) => {
 *   // Handle the file upload
 * };
 *
 * const uploadProps = {
 *   beforeUpload: handleFileUpload,
 *   multiple: true,
 *   showUploadList: true,
 * };
 *
 * const MyFileUploadComponent = () => {
 *   return (
 *     <Upload {...uploadProps}>
 *       <Button icon={<UploadOutlined />}>Upload File</Button>
 *     </Upload>
 *   );
 * };
 */
import { Button, Upload as UploadAntd } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getUploadProps } from "./lib";

export const Upload = ({ beforeUpload }) => {
    const uploadProps = getUploadProps(beforeUpload);
    return (
        <UploadAntd {...uploadProps}>
            <Button icon={<UploadOutlined />}>Upload File</Button>
        </UploadAntd>
    );
};

import { setUploadXMLToLocalStorage } from "core/lib/XMLDataLocalStorage/setXMLDataReact";

/**
 * Retrieves the upload props for a file upload component.
 *
 * @returns {Object} An object containing the upload props.
 * @example
 * import { getUploadProps } from "path/to/uploadProps";
 *
 * const uploadProps = getUploadProps();
 *
 * // Use the upload props in a file upload component
 * <Upload {...uploadProps}>
 *   <Button icon={<UploadOutlined />}>Upload</Button>
 * </Upload>
 */
export const getUploadProps = () => (
    {
        beforeUpload: setUploadXMLToLocalStorage,
        multiple: false,
        showUploadList: false,
    }
);
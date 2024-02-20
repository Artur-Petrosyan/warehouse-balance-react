/**
 * Retrieves the upload props for a file upload component.
 *
 * @param {Function} [beforeUpload] - A function that is called before a file is uploaded.
 * @returns {Object} An object containing the upload props.
 * @example
 * import { getUploadProps } from "path/to/uploadProps";
 *
 * // Define a beforeUpload function
 * const beforeUpload = (file) => {
 *   console.log("Uploading file:", file);
 *   return false; // Return false to prevent the file from being uploaded
 * };
 *
 * const uploadProps = getUploadProps(beforeUpload);
 *
 * // Use the upload props in a file upload component
 * <Upload {...uploadProps}>
 *   <Button icon={<UploadOutlined />}>Upload</Button>
 * </Upload>
 */
export const getUploadProps = (beforeUpload) => ({
  beforeUpload: beforeUpload,
  multiple: false,
  showUploadList: false,
});

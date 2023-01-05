import { deleteSingleUploadedFile, singleFileUpload } from "./index";

export const handleFileUploadSingle = async (fileData) => {
    if (
        !fileData?.to_be_deleted_file_id ||
        (await deleteSingleUploadedFile({ fileID: fileData?.to_be_deleted_file_id }))
    ) {
        return await singleFileUpload({
            fileBuffer: fileData?.to_be_uploaded_buffer,
            purpose: fileData?.purpose,
        });
    }
};

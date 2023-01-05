import {
    post_batchFileUploaded,
    delete_BatchFile,
    delete_SingleFile,
    get_fetchAllFilesUploaded,
    post_singleFileUploaded,
    patch_updateSingleFile,
} from "../../api/EndPoints";
import axiosServerInstance from "../../config/api/axois";

import { notifyApiErrorMessage } from "../notifications/notifyApiErrorMessage";

export const singleFileUpload = async ({ fileBuffer, purpose }) => {
    const formData = new FormData();
    formData.append("file", fileBuffer);
    formData.append("purpose", purpose);
    return await axiosServerInstance()
        .post(post_singleFileUploaded(), formData)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            notifyApiErrorMessage(err);
        });
};

export const batchFileUpload = async ({ fileBuffers, purpose }) => {
    const formData = new FormData();
    formData.append("files", fileBuffers);
    formData.append("purpose", purpose);
    return await axiosServerInstance()
        .post(post_batchFileUploaded(), formData)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            notifyApiErrorMessage(err);
        });
};

export const deleteSingleUploadedFile = async ({ fileID }) => {
    return await axiosServerInstance()
        .delete(delete_SingleFile(fileID))
        .then((response) => {
            return true;
        })
        .catch((err) => {
            notifyApiErrorMessage(err);
        });
};

export const fetchAllFilesUpload = async () => {
    return await axiosServerInstance()
        .get(get_fetchAllFilesUploaded())
        .then((response) => {
            console.log(response, "fetch All Files Uploaded");
        })
        .catch((err) => {
            notifyApiErrorMessage(err);
        });
};

export const deleteBatchUploadedFile = async ({ fileID }) => {
    return await axiosServerInstance()
        .delete(delete_BatchFile(fileID))
        .then((response) => {
            return true;
        })
        .catch((err) => {
            notifyApiErrorMessage(err);
        });
};

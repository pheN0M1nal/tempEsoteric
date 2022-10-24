import { batchFileUploaded, deleteBatchFile, deleteSingleFile, fetchAllFilesUploaded, singleFileUploaded } from "../../api";
import axiosServerInstance from "../../config/api/axios";

import {notifyApiErrorMessage} from "../notifications/notifyApiErrorMessage";

export const singleFileUpload = async ({fileBuffer, purpose}) => {
    
    const formData = new FormData()
    formData.append('file', fileBuffer);
    formData.append('purpose', purpose);
    return await axiosServerInstance()
        .post(singleFileUploaded(), formData)
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            notifyApiErrorMessage(err)
        });
}


export const batchFileUpload = async ({fileBuffers, purpose}) => {
    
    const formData = new FormData()
    formData.append('files', fileBuffers);
    formData.append('purpose', purpose);
    return await axiosServerInstance()
        .post(batchFileUploaded(), formData)
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            notifyApiErrorMessage(err)
        });
}

export const deleteSingleUploadedFile = async ({fileID}) => {
    return await axiosServerInstance()
        .delete(deleteSingleFile(fileID))
        .then((response) => {
            return true
        })
        .catch((err) => {
            notifyApiErrorMessage(err)
        });
}

export const fetchAllFilesUpload = async () => {
    return await axiosServerInstance()
        .get(fetchAllFilesUploaded())
        .then((response) => {
            console.log(response,"fetch All Files Uploaded")
        })
        .catch((err) => {
            notifyApiErrorMessage(err)
        });
}

export const deleteBatchUploadedFile = async ({fileID}) => {
    return await axiosServerInstance()
        .delete(deleteBatchFile(fileID))
        .then((response) => {
            return true
        })
        .catch((err) => {
            notifyApiErrorMessage(err)
        });
}
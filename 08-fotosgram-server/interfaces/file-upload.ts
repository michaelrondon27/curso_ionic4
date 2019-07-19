export interface FileUpload {
    name: string;
    data: any;
    encoding: string;
    tempFilePAth: string;
    truncated: boolean;
    mimetype: string;

    mv: Function;
}
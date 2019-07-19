import { FileUpload } from "../interfaces/file-upload";
import path from 'path';
import fs from 'fs';

export default class FileSystem {

    constructor() { }

    guardarImagenTemporal( file: FileUpload, userId: string ) {

        const path = this.crearCarpetaUsuario( userId );

    }

    private crearCarpetaUsuario( userId: string ) {

        const pathUser = path.resolve( __dirname, '../uploads/', userId );
        
        const pathUserTemp = pathUser + '/temp';

        const existe = fs.existsSync( pathUser );

        if ( !existe ) {

            fs.mkdirSync( pathUser );
            fs.mkdirSync( pathUserTemp );

        }

        return pathUserTemp;

    }

}

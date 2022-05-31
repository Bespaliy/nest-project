import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()
export class FilesService {


    async createFile(file): Promise<string> {
        const filePath = path.join(__dirname, '..', 'static');
        const fileName = uuid.v4() + '.jpg';
        console.log(path.join(filePath, fileName));
        fs.access(filePath)
            .catch((err) => console.error(err))
            .then(async () => {
                const str = await fs.mkdir(filePath, { recursive: true });
            })
            .then(async () => {
                await fs.writeFile(path.join(filePath, fileName), file.buffer);
            })
            .catch(() => {
                throw new HttpException('Not found file', HttpStatus.NOT_FOUND);
            });
        return fileName;
    }

}

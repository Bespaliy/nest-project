import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { doesNotMatch } from "assert";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "src/exception/validation.exception";

@Injectable()
export class ValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        console.log('value', value);
        const obj = plainToClass(metadata.metatype, value);
        const errors = await validate(obj);
        console.log('obj', obj);
        console.log('errors', errors);
        console.log('Metadata', metadata);
        if (errors.length) {
            const messages = errors.map(error => {
                return `${error.property} - ${Object.values(error.constraints).join(', ')}`
            });
            throw new ValidationException(messages);
        }
        return value;
    }
}
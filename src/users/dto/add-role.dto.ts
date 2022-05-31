import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
    @IsString({ message: 'value must be string' })
    readonly value: string;

    @IsNumber({}, { message: 'userId must be number' })
    readonly userId: number;
}
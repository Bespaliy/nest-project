import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({ example: 'user@gmail.com', description: 'Email adress' })
    @IsString({ message: 'Must be a string' })
    @IsEmail({}, {message: 'It not email'})
    readonly email: string;
    
    @ApiProperty({ example: 'asd123ad', description: 'User`s password' })
    @IsString({ message: 'Must be a string' })
    @Length(8, 8, { message: 'Password must be 8 in len' })
    readonly password: string;
}
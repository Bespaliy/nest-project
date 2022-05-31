import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table, BelongsToMany, HasMany } from 'sequelize-typescript';
import { Post } from 'src/posts/posts.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Unique id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'user@gmail.com', description: 'Email adress' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({ example: 'asd123ad', description: 'User`s password' })
    @Column({ type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({ example: 'true', description: 'is user banned' })
    @Column({ type: DataType.STRING, defaultValue: false})
    banned: boolean;

    @ApiProperty({ example: 'some reason', description: 'Reason of ban' })
    @Column({ type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => Post)
    posts: Post[];
}
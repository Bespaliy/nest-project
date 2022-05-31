import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { UserRoles } from './user-roles.model';

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Unique id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'ADMIN', description: 'Value role of user' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({ example: 'Administrator', description: 'description of role' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
// role.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';
import { Permission } from './permission.model';

export type RoleDocument = Role & Document;

@Schema({
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  })
export class Role {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Permission' }] })
  permissions: Permission[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
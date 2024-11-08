// user.schema.ts
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document , Types } from "mongoose";
import { Role } from "./rol.model";

export type UserDocument = User & Document;

@Schema({
  timestamps: {
    createdAt: true,
    updatedAt: true,
  },
})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  phone: string;

  @Prop()
  address: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: Types.ObjectId, ref: "Role" }) // Reference to Role schema
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);

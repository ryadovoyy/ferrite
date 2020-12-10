import { Prop, getModelForClass } from '@typegoose/typegoose';

class UserClass {
  @Prop()
  public email!: string;

  @Prop()
  public password!: string;

  @Prop()
  public token!: string;
}

export const User = getModelForClass(UserClass);

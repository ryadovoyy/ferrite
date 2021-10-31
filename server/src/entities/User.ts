import { ModelOptions, Prop, getModelForClass } from '@typegoose/typegoose';

@ModelOptions({ options: { customName: 'User' } })
class UserClass {
  @Prop({ required: true, unique: true })
  public email!: string;

  @Prop({ required: true })
  public password!: string;
}

export const User = getModelForClass(UserClass);

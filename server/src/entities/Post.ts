import mongoose from 'mongoose';
import { defaultClasses, Prop, getModelForClass } from '@typegoose/typegoose';

class PostClass extends defaultClasses.TimeStamps {
  @Prop()
  public userId!: mongoose.Types.ObjectId;

  @Prop()
  public boardId!: mongoose.Types.ObjectId;

  @Prop()
  public rating!: number;

  @Prop()
  public title!: string;

  @Prop()
  public text!: string;

  @Prop()
  public commentCount!: number;
}

export const Post = getModelForClass(PostClass);

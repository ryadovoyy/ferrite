import mongoose from 'mongoose';
import { defaultClasses, Prop, getModelForClass } from '@typegoose/typegoose';

class CommentClass extends defaultClasses.TimeStamps {
  @Prop()
  public userId!: mongoose.Types.ObjectId;

  @Prop()
  public postId!: mongoose.Types.ObjectId;

  @Prop()
  public parentId?: mongoose.Types.ObjectId;

  @Prop()
  public rating!: number;

  @Prop()
  public text!: string;
}

export const Comment = getModelForClass(CommentClass);

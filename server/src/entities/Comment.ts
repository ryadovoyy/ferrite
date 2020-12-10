import mongoose from 'mongoose';
import {
  ModelOptions,
  Prop,
  defaultClasses,
  getModelForClass
} from '@typegoose/typegoose';

@ModelOptions({ options: { customName: 'Comment' } })
class CommentClass extends defaultClasses.TimeStamps {
  @Prop({ required: true })
  public userId!: mongoose.Types.ObjectId;

  @Prop({ required: true })
  public postId!: mongoose.Types.ObjectId;

  @Prop({ default: null })
  public parentId?: mongoose.Types.ObjectId;

  @Prop({ default: 0 })
  public rating?: number;

  @Prop({ required: true })
  public text!: string;
}

export const Comment = getModelForClass(CommentClass);

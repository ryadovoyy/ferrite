import mongoose from 'mongoose';
import {
  ModelOptions,
  Prop,
  defaultClasses,
  getModelForClass
} from '@typegoose/typegoose';

@ModelOptions({ options: { customName: 'Post' } })
class PostClass extends defaultClasses.TimeStamps {
  @Prop({ required: true })
  public userId!: mongoose.Types.ObjectId;

  @Prop({ required: true })
  public boardId!: mongoose.Types.ObjectId;

  @Prop({ default: 0 })
  public rating?: number;

  @Prop({ required: true })
  public title!: string;

  @Prop({ required: true })
  public text!: string;

  @Prop({ default: 0 })
  public commentCount?: number;
}

export const Post = getModelForClass(PostClass);

import mongoose from 'mongoose';
import { ModelOptions, Prop, getModelForClass } from '@typegoose/typegoose';

@ModelOptions({ options: { customName: 'Board' } })
class BoardClass {
  @Prop({ required: true })
  public userId!: mongoose.Types.ObjectId;

  @Prop({ required: true, unique: true })
  public shortName!: string;

  @Prop({ required: true })
  public name!: string;

  @Prop({ required: true })
  public description!: string;
}

export const Board = getModelForClass(BoardClass);

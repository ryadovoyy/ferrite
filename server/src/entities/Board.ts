import mongoose from 'mongoose';
import { Prop, getModelForClass } from '@typegoose/typegoose';

class BoardClass {
  @Prop()
  public userId!: mongoose.Types.ObjectId;

  @Prop()
  public shortName!: string;

  @Prop()
  public name!: string;

  @Prop()
  public description!: string;
}

export const Board = getModelForClass(BoardClass);

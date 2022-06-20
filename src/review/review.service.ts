import { Injectable } from '@nestjs/common';
import { ReviewModel } from './review.model';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { CreateReviewDto } from './dto/create-review.dto';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModel)
    private readonly reviewModel: ModelType<ReviewModel>,
  ) {}

  async create(dto: CreateReviewDto): Promise<DocumentType<ReviewModel>> {
    return await this.reviewModel.create(dto);
  }

  async delete(id: string): Promise<DocumentType<ReviewModel> | null> {
    return await this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findByProductId(id: string): Promise<DocumentType<ReviewModel>[]> {
    return await this.reviewModel
      .find({
        productId: new Types.ObjectId(id),
      })
      .exec();
  }

  async deleteByProductId(id: string) {
    return await this.reviewModel
      .deleteMany({
        productId: new Types.ObjectId(id),
      })
      .exec();
  }
}

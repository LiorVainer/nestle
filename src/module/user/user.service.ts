import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(id: ObjectId) {
    return await this.userModel.find({ _id: id });
  }

  async findByUsername(username: string) {
    return await this.userModel.findOne({ username: username });
  }

  async update(id: ObjectId, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: ObjectId) {
    return `This action removes a #${id} user`;
  }
}

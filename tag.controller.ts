import { Controller, Get, Post, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './tag.schema';
import { Model } from 'mongoose';

@Controller('tags')
export class TagController {
    constructor( @InjectModel('Tag') public readonly tagDB: Model<Cat>) {}

    @Get()
    async getAll(){
        return await this.tagDB.find();
    }

    @Post()
    async add(@Body() tag) {
        const newTag = await new this.tagDB(tag).save();
        return newTag;
    }
}

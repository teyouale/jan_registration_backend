import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Document } from './entities/document.entity';

@Injectable()
export class DocumentService {
  constructor(@InjectRepository(Document) private repo: Repository<Document>) {}

  async create(file: Express.Multer.File) {
    var file_location = await this.saveFile(file);

    var document = this.repo.create({
      file_name: file.originalname,
      file_type: file.mimetype,
      file_location: file_location,
      file_size: file.size,
    });

    var doc = await this.repo.save(document);
    return doc.id;
  }

  async saveFile(file: Express.Multer.File) {
    var fs = require('fs');
    const { resolve } = require('path');
    //Create folder/directory if not exists

    const crypto = require('crypto');
    const fileName = crypto.randomUUID() + file.originalname;
    await fs.writeFile(fileName, file.buffer, function (err) {
      if (err) return new BadRequestException('Unable to save the file');
    });

    var absolutePath = resolve(fileName);
    console.log({ absolutePath });

    return absolutePath;
  }

  findAll() {
    return `This action returns all document`;
  }

  async findOne(id: string) {
    var doc = await this.repo.findOneBy({ id });
    if (doc) return doc.file_location;
    return '';
  }

  update(id: string, updateDocumentDto: UpdateDocumentDto) {
    return `This action updates a #${id} document`;
  }

  remove(id: number) {
    return `This action removes a #${id} document`;
  }
}

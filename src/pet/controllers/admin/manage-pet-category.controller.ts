import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { CreatePetCategoryDto } from '../../dtos/pet-dto';
import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { FormDataRequest } from 'nestjs-form-data';

const transformError = (error: ValidationError) => {
  const { property, constraints } = error;
  return {
    property,
    constraints,
  };
};

@Controller('admin/pet-categories')
export class ManagePetCategoryController {
  @Get('')
  getList() {
    return 'admin pet category list';
  }

  @Get('create')
  @Render('pet/admin/manege-pet-category/create')
  view_create() {
    return {
      data: {
        mode: 'create',
      },
    };
  }

  @Post('create')
  @Render('pet/admin/manege-pet-category/create')
  @FormDataRequest()
  async create(@Body() body: CreatePetCategoryDto) {}

  @Get(':id')
  getDetail(@Param('id') id: number) {
    return `admin pet category detail ${id}`;
  }
}

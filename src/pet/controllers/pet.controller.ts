import { Controller, Get, Param } from '@nestjs/common';

@Controller('pets')
export class PetController {
  @Get('')
  getList() {
    return 'Pet list';
  }

  @Get(':id')
  getDetail(@Param('id') id: number) {
    return `Pet detail ${id}`;
  }
}

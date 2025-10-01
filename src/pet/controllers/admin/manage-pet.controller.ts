import { Controller, Get, Param } from '@nestjs/common';

@Controller('admin/pets')
export class ManagePetController {
  @Get('')
  getList() {
    return 'admin pet list';
  }

  @Get(':id')
  getDetail(@Param('id') id: number) {
    return `admin pet detail ${id}`;
  }
}

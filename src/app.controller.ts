import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  @ApiTags('API Health')
  @ApiOkResponse({ description: 'API is healthy.' })
  @Get()
  async healthCheck(): Promise<string> {
    return 'Healthy.'
  }
}

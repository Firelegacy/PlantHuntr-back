import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  isHealthy(): string {
    return 'PlantHuntr is up and running!';
  }
}

import {get} from '@loopback/rest';

export class HealthController {
  @get('/health')
  hello(): string {
    return 'Healthy!';
  }
}

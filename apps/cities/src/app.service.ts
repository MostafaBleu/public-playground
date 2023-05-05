import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCities(): string[] {
    return [
      'New York',
      'Buffalo',
      'Rochester',
      'Yonkers',
      'Syracuse',
      'Albany',
      'New Rochelle',
      'Mount Vernon',
      'Schenectady',
      'Utica',
      'White Plains',
      'Hempstead',
      'Troy',
      'Niagara Falls',
      'Binghamton',
      'Freeport',
      'Valley Stream',
    ];
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class OverrideService {

  constructor() { }

  getName(): string {
    return 'Sanborn Sen';
  }
}

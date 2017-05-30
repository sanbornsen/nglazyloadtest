import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  getName(): string {
    return 'Sudipta Sen';
  }

}

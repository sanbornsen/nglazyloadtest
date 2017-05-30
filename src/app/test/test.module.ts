import { OverrideService } from './override.service';
import { TestService } from './test.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  providers: [
    // TestService,
    OverrideService,
    {
      provide: OverrideService,
      useExisting: TestService
    }
  ],
  declarations: [
    TestComponent
  ]
})
export class TestModule {}

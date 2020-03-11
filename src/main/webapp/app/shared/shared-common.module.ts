import { NgModule } from '@angular/core';

import { TestJavaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TestJavaSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TestJavaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestJavaSharedCommonModule {}

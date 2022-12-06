
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesananEditPage } from './pesanan_edit.page';

describe('PesananEditPage', () => {
  let component: PesananEditPage;
  let fixture: ComponentFixture<PesananEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PesananEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesananEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





/* End of file  */

/* Created at 2022-12-01 08:35:02 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
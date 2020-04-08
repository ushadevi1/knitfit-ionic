import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductdetailpagePage } from './productdetailpage.page';

describe('ProductdetailpagePage', () => {
  let component: ProductdetailpagePage;
  let fixture: ComponentFixture<ProductdetailpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetailpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductdetailpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

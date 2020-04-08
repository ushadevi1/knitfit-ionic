import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoppatternPage } from './shoppattern.page';

describe('ShoppatternPage', () => {
  let component: ShoppatternPage;
  let fixture: ComponentFixture<ShoppatternPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppatternPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppatternPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

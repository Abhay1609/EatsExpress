import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableMenuComponent } from './available-menu.component';

describe('AvailableMenuComponent', () => {
  let component: AvailableMenuComponent;
  let fixture: ComponentFixture<AvailableMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

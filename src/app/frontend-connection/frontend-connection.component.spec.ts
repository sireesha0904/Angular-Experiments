import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendConnectionComponent } from './frontend-connection.component';

describe('FrontendConnectionComponent', () => {
  let component: FrontendConnectionComponent;
  let fixture: ComponentFixture<FrontendConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendConnectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

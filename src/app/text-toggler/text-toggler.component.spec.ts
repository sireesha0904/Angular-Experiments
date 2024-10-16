import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTogglerComponent } from './text-toggler.component';

describe('TextTogglerComponent', () => {
  let component: TextTogglerComponent;
  let fixture: ComponentFixture<TextTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextTogglerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

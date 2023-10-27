import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSelectListComponent } from './theme-select-list.component';

describe('ThemeSelectListComponent', () => {
  let component: ThemeSelectListComponent;
  let fixture: ComponentFixture<ThemeSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeSelectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

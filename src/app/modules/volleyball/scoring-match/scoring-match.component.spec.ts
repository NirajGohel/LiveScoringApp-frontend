import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringMatchComponent } from './scoring-match.component';

describe('ScoringMatchComponent', () => {
  let component: ScoringMatchComponent;
  let fixture: ComponentFixture<ScoringMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoringMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoringMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

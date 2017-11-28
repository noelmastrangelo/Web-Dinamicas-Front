import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasPrincipalComponent } from './artistas-principal.component';

describe('ArtistasPrincipalComponent', () => {
  let component: ArtistasPrincipalComponent;
  let fixture: ComponentFixture<ArtistasPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistasPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistasPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

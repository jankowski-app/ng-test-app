import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabListsComponent } from './user-tab-lists.component';

describe('UserTabListsComponent', () => {
  let component: UserTabListsComponent;
  let fixture: ComponentFixture<UserTabListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTabListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTabListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

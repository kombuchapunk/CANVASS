import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { AddPollComponent } from './add-poll/add-poll.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'ask',
    component: AddPollComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { AddPollComponent } from './add-poll/add-poll.component';
import { MyPollsComponent } from './my-polls/my-polls.component';

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
    path: 'my-polls',
    component: MyPollsComponent
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

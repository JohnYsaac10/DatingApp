import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { MemberListComponent } from './app/members/member-list/member-list.component';
import { ListsComponent } from './app/lists/lists.component';
import { MessagesComponent } from './app/messages/messages.component';
import { AuthGuard } from './app/_guards/auth.guard';
import { MemberDetailComponent } from './app/members/member-detail/member-detail.component';
import { MemberDetailResolver } from './app/_resolvers/member-detail.resolver';
import { MemberListResolver } from './app/_resolvers/member-list.resolver';
import { MemberEditComponent } from './app/members/member-edit/member-edit.component';
import { MemberEditResolver } from './app/_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './app/_guards/prevent.unsaved.guard';



export const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {   path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent, resolve: { users: MemberListResolver } },
            {path: 'member/edit', component: MemberEditComponent,
                    resolve: { user: MemberEditResolver }, canDeactivate: [PreventUnsavedChanges] },
            {path: 'member/:id', component: MemberDetailComponent, resolve: { user: MemberDetailResolver } },
            {path: 'lists', component: ListsComponent},
            {path: 'messages', component: MessagesComponent}
        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

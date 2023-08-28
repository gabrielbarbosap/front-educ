import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeDetailComponent } from './pages/theme-detail/theme-detail.component';
import { SubjectDetailComponent } from './pages/subject-detail/subject-detail.component';
import { AgnosticDetailThemeComponent } from './pages/agnostic-detail-theme/agnostic-detail-theme.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { ChatInteractiveComponent } from './pages/chat-interactive/chat-interactive.component';
import { LudicSelectsComponent } from './pages/ludic-selects/ludic-selects.component';
import { StudyScheduleComponent } from './pages/study-schedule/study-schedule.component';
import { TeacherScheduleComponent } from './pages/teacher-schedule/teacher-schedule.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'subject-detail', component: SubjectDetailComponent },
  { path: 'theme', component: ThemeDetailComponent },
  { path: 'theme-detail', component: AgnosticDetailThemeComponent },
  { path: 'chat', component: ChatInteractiveComponent },
  { path: 'ludic', component: LudicSelectsComponent },
  { path: 'shedule', component: StudyScheduleComponent },
  { path: 'teacher-shedule', component: TeacherScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

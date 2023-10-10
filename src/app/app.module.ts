import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatControlerComponent } from './components/chat-controler/chat-controler.component';
import { ThemeDetailComponent } from './pages/theme-detail/theme-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { SubjectDetailComponent } from './pages/subject-detail/subject-detail.component';
import { AgnosticDetailThemeComponent } from './pages/agnostic-detail-theme/agnostic-detail-theme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { ChatInteractiveComponent } from './pages/chat-interactive/chat-interactive.component';
import { LudicSelectsComponent } from './pages/ludic-selects/ludic-selects.component';
import { StudyScheduleComponent } from './pages/study-schedule/study-schedule.component';
import { TeacherScheduleComponent } from './pages/teacher-schedule/teacher-schedule.component';
import { LoginComponent } from './pages/login/login.component';
import { CorrectTextComponent } from './pages/correct-text/correct-text.component';
import { EnemComponent } from './pages/enem/enem.component';
import { TeacherScheduleDetailComponent } from './pages/teacher-schedule-detail/teacher-schedule-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ChatControlerComponent,
    ThemeDetailComponent,
    SubjectDetailComponent,
    AgnosticDetailThemeComponent,
    SubjectsComponent,
    ChatInteractiveComponent,
    LudicSelectsComponent,
    StudyScheduleComponent,
    TeacherScheduleComponent,
    LoginComponent,
    CorrectTextComponent,
    EnemComponent,
    TeacherScheduleDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

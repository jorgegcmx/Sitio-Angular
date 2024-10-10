
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { InicioComponent } from './inicio/inicio.component';
import { GoogleComponent } from './components/social-login/google/google.component';


export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./inicio/inicio.component').then((c) => c.InicioComponent)
    },
    {
        path: "resume",
        loadComponent: () => import('./resume/resume.component').then((c) => c.ResumeComponent)
    },
    {
        path: "exercises",
        loadComponent: () => import('./exercises/exercises.component').then((c) => c.ExercisesComponent)
    },
    {
        path: "go",
        loadComponent: () => import('./components/social-login/google/google.component').then((c) => c.GoogleComponent)
    }
];




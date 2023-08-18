import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppRouting } from './core/routing/app.routing';

const routes: Routes = [
  {path: '', redirectTo: AppRouting.Recipies, pathMatch: 'full'},
  {path: AppRouting.Recipies, children: [
    {path: '', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesPageModule)},
    {path: `:${AppRouting.RecipeId}`, loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then(m => m.RecipeDetailPageModule)}
  ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

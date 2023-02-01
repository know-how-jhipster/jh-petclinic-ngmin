import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'vets',
        data: { pageTitle: 'Vets' },
        loadChildren: () => import('./vets/vets.module').then(m => m.VetsModule),
      },
      {
        path: 'specialties',
        data: { pageTitle: 'Specialties' },
        loadChildren: () => import('./specialties/specialties.module').then(m => m.SpecialtiesModule),
      },
      {
        path: 'types',
        data: { pageTitle: 'Types' },
        loadChildren: () => import('./types/types.module').then(m => m.TypesModule),
      },
      {
        path: 'owners',
        data: { pageTitle: 'Owners' },
        loadChildren: () => import('./owners/owners.module').then(m => m.OwnersModule),
      },
      {
        path: 'pets',
        data: { pageTitle: 'Pets' },
        loadChildren: () => import('./pets/pets.module').then(m => m.PetsModule),
      },
      {
        path: 'visits',
        data: { pageTitle: 'Visits' },
        loadChildren: () => import('./visits/visits.module').then(m => m.VisitsModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}

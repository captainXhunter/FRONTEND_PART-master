import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Inscription = React.lazy(() => import('./views/inscription'));
const Maquette = React.lazy(() => import('./views/pedagogie/maquettes/maquette'));
const GIT = React.lazy(() => import('./views/pedagogie/GIT'));
const TC = React.lazy(() => import('./views/pedagogie/TC'));
const GEM = React.lazy(() => import('./views/pedagogie/GEM'));
const AERO = React.lazy(() => import('./views/pedagogie/AERO'));
const GC = React.lazy(() => import('./views/pedagogie/GC'));

const routes = [
    { path: '/etudiant', exact: true, name: 'Etudiant'},
    { path: '/etudiant/dashboard', name: 'Dashboard', component: Dashboard},
    { path: '/etudiant/inscription', name: 'Inscription', component: Inscription},
    { path: '/etudiant/pedagogie/maquettes/maquette', name: 'Maquette', component: Maquette},
    { path: '/etudiant/pedagogie/GIT', name: 'GIT', component: GIT},
    { path: '/etudiant/pedagogie/TC', name: 'TC', component: TC},
    { path: '/etudiant/pedagogie/GC', name: 'GC', component: GC},
    { path: '/etudiant/pedagogie/GEM', name: 'GEM', component: GEM},
    { path: '/etudiant/pedagogie/AERO', name: 'AERO', component: AERO},



]    

export default routes;
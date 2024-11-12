import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { PacientesComponent } from './paciente/paciente.component';
import { MedicosComponent } from './medicos/medicos.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component'; // Importa el componente de especialidades
import { MedicoEspecialidadComponent } from './medico-especialidad/medico-especialidad.component';
import { HorariosComponent } from './horarios/horarios.component';
import { DocumentosLaboratorioComponent } from './documentos-laboratorio/documentos-laboratorio.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { HorarioMedicoEspecialidadComponent } from './horario-medico-especialidad/horario-medico-especialidad.component';
import { CuposComponent } from './cupo/cupo.component';
import { ReservasComponent } from './reserva/reserva.component';
import { ConsultaMedicaComponent } from './consulta-medica/consulta-medica.component';
import { PermisoPostergacionComponent } from './permiso-postergacion/permiso-postergacion.component';
import { MedicamentoComponent } from './medicamento/medicamento.component';


// Definición de Rutas
export const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      // Administración de Roles y Usuarios
      { path: 'roles', component: RolesComponent },
      { path: 'users', component: UsersComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'permisos', component: PermissionsComponent },

      // Pacientes y Médicos
      { path: 'pacientes', component: PacientesComponent },
      { path: 'medicos', component: MedicosComponent },
      { path: 'especialidades', component: EspecialidadesComponent },
      { path: 'asociar-especialidad-medico', component: MedicoEspecialidadComponent },

      // Horarios y Cupos
      { path: 'horario', component: HorariosComponent },
      { path: 'asignar', component: HorarioMedicoEspecialidadComponent },
      { path: 'cupo', component: CuposComponent },

      // Reservas y Consultas
      { path: 'reserva', component: ReservasComponent },
      { path: 'consulta', component: ConsultaMedicaComponent },
      { path: 'postergacion', component: PermisoPostergacionComponent },

      // Medicamentos y Recetas
      { path: 'medicamento', component: MedicamentoComponent },

      // Laboratorio e Historias Clínicas
      { path: 'docu-laboratorio', component: DocumentosLaboratorioComponent },
      { path: 'historial', component: HistoriaClinicaComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
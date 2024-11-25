import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService, ModeloCaracterService } from '@core/services';
import { AuthState, Role } from '@shared/enums';

@Component({
  selector: 'app-evaluaciones-proveedor',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './evaluaciones-proveedor.component.html',
  styleUrl: './evaluaciones-proveedor.component.scss',
})
export class EvaluacionesProveedorComponent {
  private loginService = inject(LoginService);
  private modeloCaracterService = inject(ModeloCaracterService);

  authState = this.loginService.authState;
  currentUser = this.loginService.currentUser;

  public AuthState = AuthState;
  public Role = Role;

  // Signal del ModeloMadurezService
  modeloCaracter = this.modeloCaracterService.modeloCaracter;

  constructor() {
    effect(() => {
      const authState = this.authState();
      const user = this.currentUser();
      if (
        authState === AuthState.LoggedIn &&
        user?.rol.nombreRol.toLocaleLowerCase() === Role.Proveedor.toLowerCase()
      ) {
        this.modeloCaracterService.recheckData();
      }
    });
  }

  openLink(): void {
    this.modeloCaracterService.openLink();
  }
}

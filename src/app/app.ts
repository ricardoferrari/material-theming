import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, RouterOutlet } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialog } from './dialogs/detail.dialog';

@Component({
  selector: 'app-root',
  imports: [
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatButtonModule,
    RouterOutlet,
    RouterModule,
    AsyncPipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('material-theming');
  protected readonly darkMode = signal(false);

  readonly dialog = inject(MatDialog);

  private readonly breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  toggleDarkMode() {
    this.darkMode.set(!this.darkMode());
  }

  openDialog() {
    this.dialog.open(DetailDialog, {
      width: '500px',
      backdropClass: 'custom-backdrop',
    });
  }
}

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/layouts/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild(LoaderComponent) loader?: LoaderComponent;

  title = 'frontend';

  ngAfterViewInit() {
    setTimeout(() => {
      this.loader?.showLoader(true);
    }, 0);

    setTimeout(() => {
      this.loader?.showLoader(false);
    }, 3000);
  }
}

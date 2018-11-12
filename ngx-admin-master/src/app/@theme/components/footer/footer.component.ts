import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Powered by <b><a href="http://www.lenovo.com.cn" target="_blank">Lenovo</a></b> 2018</span>
    <div class="socials">
      <a href="http://www.lenovo.com.cn" target="_blank" class="ion ion-link"></a>
    </div>
  `,
})
export class FooterComponent {
}

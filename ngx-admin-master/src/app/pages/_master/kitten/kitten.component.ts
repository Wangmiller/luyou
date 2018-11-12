import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-kitten',
  styleUrls: ['./kitten.component.scss'],
  templateUrl: './kitten.component.html',
})
export class KittenComponent implements OnDestroy {

  currentTheme: string;
  cu_id: string;
  cu_sn: string;
  cu_label: string;
  cu_type: string;
  cu_ln: string;
  cu_pic: string;
  themeSubscription: any;

  constructor(private themeService: NbThemeService) {
    this.cu_id = localStorage.getItem('cu_id');
    this.cu_sn = localStorage.getItem('cu_sn');
    this.cu_label = localStorage.getItem('cu_label');
    this.cu_type = localStorage.getItem('cu_type');
    this.cu_ln = localStorage.getItem('cu_ln');
    this.cu_pic = localStorage.getItem('cu_pic');
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}

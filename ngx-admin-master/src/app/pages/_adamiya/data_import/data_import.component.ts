import {Component, DoCheck, EventEmitter} from '@angular/core';
import {DataImportService} from './data_import.service';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'ngx-adamiya-data-import',
  templateUrl: './data_import.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class DataImportComponent implements DoCheck {

  closesign;
  hrefurl;
  options: UploaderOptions;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  constructor() {
    this.closesign = '0';
    this.options = { concurrency: 1, maxUploads: 3 };
    this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
  }

  onUploadOutput(output: UploadOutput): void {
    if (output.type === 'allAddedToQueue') { // when all files added in queue
      // uncomment this if you want to auto upload files when added
      // const event: UploadInput = {
      //   type: 'uploadAll',
      //   url: '/upload',
      //   method: 'POST',
      //   data: { foo: 'bar' }
      // };
      // this.uploadInput.emit(event);
    } else if (output.type === 'addedToQueue'  && typeof output.file !== 'undefined') { // add file to array when added
      this.files.push(output.file);
    } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
      // update current data in files array for uploading file
      const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
      this.dragOver = false;
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
  }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: 'http://localhost:3000/attach_file',
      method: 'POST',
      data: { foo: 'bar' },
    };

    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
  }

  removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }

  newwindow;

  ngDoCheck() {
    if (this.closesign === '1') {
      this.closesign = '0';
      if (this.newwindow.closed || this.newwindow === null) {
      }
      // window.alert('导入完成！');
      // 查询导入的条数
      // if (window.confirm('导入完成！是否立即查看？')) {
      //   window.location.href = this.hrefurl;
      // }
    }
  }

  importProduct(): void {
    this.closesign = '1';
    this.hrefurl =  '#/pages_a/_adamiya/all_product_list';
    this.newwindow = window.open('/_s_file/import_product', 'newwindow',
      'height=200, width=600, toolbar=no, menubar=no,' +
      ' scrollbars=no, resizable=no, location=no, status=no');
  }

  importEnterprise(): void {
    this.closesign = '1';
    this.hrefurl =  '#/pages_a/_adamiya/all_enterprise_list';
    this.newwindow = window.open('/_s_file/import_enterprise', 'newwindow',
      'height=200, width=600, toolbar=no, menubar=no,' +
      ' scrollbars=no, resizable=no, location=no, status=no');
  }

  importUser(): void {
    this.closesign = '1';
    this.hrefurl =  '#/pages_a/_adamiya/all_user_list';
    this.newwindow = window.open('/_s_file/import_user', 'newwindow',
      'height=200, width=600, toolbar=no, menubar=no,' +
      ' scrollbars=no, resizable=no, location=no, status=no');
  }

  importProject(): void {
    this.closesign = '1';
    this.hrefurl =  '#/pages_a/_adamiya/all_project_list';
    this.newwindow = window.open('/_s_file/import_project', 'newwindow',
      'height=200, width=600, toolbar=no, menubar=no,' +
      ' scrollbars=no, resizable=no, location=no, status=no');
  }

  importIndustry(): void {
    this.closesign = '1';
    this.hrefurl =  '#/pages_a/_adamiya/all_project_list';
    this.newwindow = window.open('/_s_file/import_project', 'newwindow',
      'height=200, width=600, toolbar=no, menubar=no,' +
      ' scrollbars=no, resizable=no, location=no, status=no');
  }

  importScense(): void {
    this.closesign = '1';
    this.hrefurl =  '#/pages_a/_adamiya/all_project_list';
    this.newwindow = window.open('/_s_file/import_project', 'newwindow',
      'height=200, width=600, toolbar=no, menubar=no,' +
      ' scrollbars=no, resizable=no, location=no, status=no');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.css'],
})

// class ImageSnippet {
//   pending: boolean = false;
//   status: string = 'init';

//   constructor(public src: string, public file: File) {}
// }
export class InputImageComponent {
  imageUrl: string = '';

  processImage(el: any) {
    const file: File = el.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (evt: any) => {
      // this.selectedFile = new ImageSnippet(evt.target.result, file);
      // reader.readAsDataURL(file);
      this.imageUrl = reader.result as string;
    });

    reader.readAsDataURL(file);
  }

  reset() {
    this.imageUrl = '';
  }
}

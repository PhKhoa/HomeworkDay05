import { Component,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Item } from '../../materials/item.model';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data:Item,public dialogRef: MatDialogRef<DialogComponent>) {}

  closemessage='close massage'
    
  itemFormGroups !: FormGroup;

  ngOnInit(): void {
    this.itemFormGroups = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      description: new FormControl<string>('', [Validators.required]),
      price: new FormControl<number>(0, [Validators.required]),
      imgSrc: new FormControl<string>('', [Validators.required]),
    });
  }

  closeDialog() {
    this.dialogRef.close(this.itemFormGroups.value);
  }

  itemList: Item[] = [];
  item: Item = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    imgSrc: '',
  };

  addItem() {
    let item: Item = {
      ...this.itemFormGroups.value,
    };
    item.id = Math.floor(Math.random() * 1000);
    this.itemList.push(item);
    //console.log(this.itemList);
     console.log(item);
  }
}

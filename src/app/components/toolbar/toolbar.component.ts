import { Component ,OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Item } from '../../materials/item.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
      width:'60%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
    });

    
    dialogRef.afterClosed().subscribe(result => {
      // Xử lý sau khi dialog đã đóng
      console.log('Dialog closed');
    });
  }
  //itemList: Item[] = [];
  ngOnInit(): void {
    
  }

  show(){
    console.log(this);
  }

}

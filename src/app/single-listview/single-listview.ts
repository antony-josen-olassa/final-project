import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Spiro } from '../spiro.service';

@Component({
  selector: 'app-single-listview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-listview.html',
  styleUrls: ['./single-listview.css']
})
export class SingleListview implements OnInit {
  singleProduct: any;

  constructor(private route: ActivatedRoute, private spiro: Spiro) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.spiro.getSingleProduct(id).subscribe((data: any) => {
        this.singleProduct = data;
        console.log('single product', data);
      });
    }
  }
}

import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { LandLord } from "app/shared/models/LandLord";
import { LandlordService } from "app/shared/services/landlord.service";
import { of } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-landlords",
  templateUrl: "./landlords.component.html",
  styleUrls: ["./landlords.component.scss"],
})
export class LandlordsComponent implements OnInit, AfterViewInit {
  users: any;

  displayedColumns: string[] = ["id_number", "first_name", "email", "phone","residential_address","city"];
  dataSource = new MatTableDataSource([]);

  first_name: string;
  id_number: string;
  email: string;
  phone: string;
  residential_address:string;
  city:string
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private landlord: LandlordService) {}

  ngOnInit(): void {
    this.landlord.getLandlordDetails().subscribe((response) => {
      this.users = response;
      const data = this.users.data;
      let name=data.map((res)=>({
        first_name:`${res.first_name}`,
        id_number:`${res.id_number}`,
        email:`${res.email}`,
        phone:`${res.phone}`,
        city:`${res.city}`,
        residential_address:`${res.residential_address}`
      }))
      console.log(name);
      this.dataSource = new MatTableDataSource<LandLord>(name);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

   
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

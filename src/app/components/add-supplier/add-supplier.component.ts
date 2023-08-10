import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Roles, Sectors } from 'src/app/models/suppliers.model';
import { CountriesService } from 'src/app/services/countries.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})

export class AddSupplierComponent implements OnInit {
  form: FormGroup;
  contries$:Observable<any> = this.countryService.getAllCountries();
  roles: Roles[] = Object.values(Roles);
  selectedRoles: Roles[] = [];
  sectors:Sectors[] = Object.values(Sectors);
  selectedSectors: Sectors[] = [];

  constructor(
    private formBuilder:FormBuilder, 
    private countryService: CountriesService, 
    private dataService: DataService,
    private route: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      vatNumber: [''], // Missing check on regex ^[a-zA-Z0-9]{1,16}$
      name: ['', Validators.required], 
      country: [''],
      roles: new FormControl(),
      sector: new FormControl()
    });
  }

  submit(){
    this.form.get('roles')!.setValue(this.selectedRoles);
    this.form.get('sector')!.setValue(this.selectedSectors);

    if(this.form.valid) {
      this.dataService.addData(this.form.value);
      this.route.navigate(['/suppliers']);
    } else {
      // still need to add error message in html
      console.log('invalid form');
    }
  }

  addRole(role:Roles){
    this.selectedRoles.push(role);
    this.roles.splice(this.roles.indexOf(role), 1);
  }

  removeRole(role:Roles){
    this.roles.push(role);
    this.selectedRoles.splice(this.selectedRoles.indexOf(role), 1);
  }

  addSector(sector:Sectors){
    this.selectedSectors.push(sector);
    this.sectors.splice(this.sectors.indexOf(sector), 1);
  }

  removeSector(sector:Sectors){
    this.sectors.push(sector);
    this.selectedSectors.splice(this.selectedSectors.indexOf(sector), 1);
  }
}

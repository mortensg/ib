import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Roles, Sectors } from 'src/app/models/suppliers.model';
import { selectCountries } from '../../store/countries/countries.selectors';
import { supplierAdded, supplierUpdated } from 'src/app/store/suppliers/suppliers.actions';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})

export class AddSupplierComponent implements OnInit {
  form: FormGroup;
  contries$ = this.store.select(selectCountries);
  roles: Roles[] = Object.values(Roles);
  selectedRoles: Roles[] = [];
  sectors:Sectors[] = Object.values(Sectors);
  selectedSectors: Sectors[] = [];
  isEdit: boolean = this.activatedRoute.snapshot.params['name'] ? true : false;


  constructor(
    private formBuilder:FormBuilder,  
    private route: Router,
    private store:Store,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [Date.now()],
      vatNumber: [''], // Missing check on regex ^[a-zA-Z0-9]{1,16}$
      name: ['', Validators.required], 
      country: [''],
      roles: new FormControl(),
      sector: new FormControl()
    });
    if(this.isEdit) {
      this.selectedRoles = this.activatedRoute.snapshot.params['roles'].split(',') as Roles[];
      this.selectedSectors = this.activatedRoute.snapshot.params['sector'].split(',') as Sectors[];
      this.form.patchValue(this.activatedRoute.snapshot.params);
    }
  }

  submit(){
    this.form.get('roles')!.setValue(this.selectedRoles);
    this.form.get('sector')!.setValue(this.selectedSectors);

    if(this.form.valid) {
      if(this.isEdit) {
        this.store.dispatch(supplierUpdated({supplier:this.form.value}));
      } else {
        this.store.dispatch(supplierAdded({supplier:this.form.value}));
      }
      this.route.navigate(['/suppliers']);
    } else {
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

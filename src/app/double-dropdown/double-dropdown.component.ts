import { Component } from '@angular/core';

@Component({
  selector: 'app-double-dropdown',
  templateUrl: './double-dropdown.component.html',
  styleUrls: ['./double-dropdown.component.scss']
})
export class DoubleDropdownComponent {
  continentsAndCountries = [
    { continent: 'Asia', countries: ['India', 'China', 'Japan', 'South Korea'] },
    { continent: 'Europe', countries: ['Germany', 'France', 'United Kingdom', 'Italy'] },
    { continent: 'North America', countries: ['USA', 'Canada', 'Mexico'] },
    { continent: 'South America', countries: ['Brazil', 'Argentina', 'Colombia'] },
    { continent: 'Africa', countries: ['Nigeria', 'Egypt', 'South Africa'] },
    { continent: 'Australia', countries: ['Australia', 'New Zealand'] }
  ];

  selectedContinent: string = '';
  selectedCountry: string = '';

  updateCountryOptions(continent: string) {
    this.selectedContinent = continent;
    this.selectedCountry = '';
  }

  onCountrySelect(country: string) {
    this.selectedCountry = country;
  }

  getCountryOptions() {
    const selectedContinentObj = this.continentsAndCountries.find(item => item.continent === this.selectedContinent);
    return selectedContinentObj ? selectedContinentObj.countries.map(country => ({ country })) : [];
  }
}

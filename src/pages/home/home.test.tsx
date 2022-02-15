import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import { shallow } from '@testing-library/react';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('HomeComponent', () => {
//   let fixture: HomeComponent;
//   let weatherLocationsQuery: WeatherLocationsQuery;
//   let weatherLocationsService: WeatherLocationsService;
//   let apiService: ApiService;
//   let snackBar: MatSnackBar;

//   beforeEach(() => {
//     snackBar = {
//       open: jest.fn(),
//     } as any;
//     let weatherLocationsStore: WeatherLocationsStore = {
//       upsert: jest.fn(),
//     } as any;

//     apiService = new ApiMockService();
//     weatherLocationsService = new WeatherLocationsService(
//       weatherLocationsStore,
//       apiService
//     );

//     fixture = new HomeComponent(
//       weatherLocationsQuery,
//       weatherLocationsService,
//       apiService,
//       snackBar
//     );
//   });

//   describe('ngOnInit', () => {
//     it('should update selected option and weather location', (done) => {
//       combineLatest([
//         fixture.selectedOption$.pipe(take(1)),
//         fixture.weatherLocation$.pipe(take(1)),
//       ]).subscribe((res) => {
//         expect(res[1].key).not.toBeNull();
//         done();
//       });

//       const coordinates = {
//         latitude: 32.985,
//         longitude: 35.251,
//       };
//       setCoordsGeolocation(coordinates);

//       fixture.ngOnInit();
//     });
//   });

//   describe('onSelectionChange', () => {
//     it('should update weather location', (done) => {
//       fixture.weatherLocation$.pipe(take(1)).subscribe((res) => {
//         expect(res.key).not.toBeNull();
//         done();
//       });

//       const location = {
//         key: '214356',
//         localizedName: 'Yanuh',
//       };

//       fixture.onSelectionChange(location);
//     });
//   });

//   describe('private functions edge cases', () => {
//     describe('getCoordinates', () => {
//       const handleGeolocationError = (done) => {
//         fixture['getCoordinates']()
//           .pipe(take(1))
//           .subscribe(...handaleSubscribeComplete(done));
//       };

//       it('should block fetch of geolocation', (done) => {
//         blockGeolocation();
//         handleGeolocationError(done);
//       });

//       it('should not be supported geolocation', (done) => {
//         notSupportedGeolocation();
//         handleGeolocationError(done);
//       });
//     });

//     describe('updateSelectedOption', () => {
//       it('should not update selected option', (done) => {
//         const coordinates = {
//           latitude: 0,
//           longitude: 0,
//         };
//         of(coordinates)
//           .pipe(fixture['updateSelectedOption']())
//           .subscribe(...handaleSubscribeComplete(done));
//       });
//     });

//     describe('updateWeatherLocation', () => {
//       it('should not update weather location', (done) => {
//         const location = {
//           key: '999999',
//         };
//         of(location)
//           .pipe(fixture['updateWeatherLocation']())
//           .subscribe(...handaleSubscribeComplete(done));
//       });
//     });
//   });
// });
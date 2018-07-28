import {Country} from './Country';
import {State} from './State';

export class Destination {
  id: number;
  destinationName: string;
  city: string;
  district: string;
  country: Country;
  state: State;
}

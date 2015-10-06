import { WaterDefault } from './decorators';

@WaterDefault
export default class Water {
	
	hardness;
	purity;
	koeficient;
	
	constructor() {
		this.hardness = [ 'softer', 'soft', 'normal', 'hard', 'harder' ];
		this.purity = { 
			'london': 'clean',
			'prague': 'cleaner',
			'berlin': 'suck'
		}
	}
	
	public set location(value) {
		this._location = value.toLowerCase();
	}
	
	public get location() {
		return this._location;
	}
	
	public set koeficient(value) {
		this._koeficient = value;
	}
	
	public get koeficient() {
		return this._koeficient;
	}
	
	public quality() {
		return [
			this.purity[this.location],
			return(this.hardness[Math.round((this.koeficient / 100) * (this.hardness.length - 1))]);
		]
	}

}
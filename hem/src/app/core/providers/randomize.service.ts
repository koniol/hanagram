import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomizeService {

  constructor() {
  }

  public static randNumber(max: number): number {
    return (Math.floor(Math.random() * max));
  }

  public randRange(howMany: number, max: number): Array<number> {
    if (howMany >= max) {
      throw new Error('Can not generate random numbers');
    }
    const result = [];
    while (howMany > result.length) {
      const randNumber = RandomizeService.randNumber(max);
      if (!result.includes(randNumber)) {
        result.push(randNumber);
      }
    }

    return result;
  }
}

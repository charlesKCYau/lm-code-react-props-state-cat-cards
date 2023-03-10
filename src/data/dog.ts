export default interface Dog {
    name: string;
    species: string;
    favFoods: Array<string>; // or string[]
    birthYear: number;
    id?: string;
  }
  
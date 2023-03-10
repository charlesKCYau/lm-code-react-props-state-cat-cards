export default interface Cat {
  name: string;
  species: string;
  favFoods: Array<string>; // or string[]
  birthYear: number;
  id?: string;
}

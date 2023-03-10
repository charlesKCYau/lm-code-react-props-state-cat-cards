import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import Cat from "./data/cat";
import Card from "./components/cat_card";
import catData from "./data/cat-data";
import Dog from "./data/dog";
import dogData from "./data/dog-data";
import { v4 as uuidv4 } from 'uuid';

function App(): JSX.Element {
  // JavaScript/TypeScript code can be inserted here!
  const [cats, setCats] = useState<Array<Cat>>(catData);
  console.log("Our pretties 😻: ", cats);
  const catCount = cats.length;

  const [dogs, setDogs] = useState<Array<Dog>>(dogData);
  console.log("Our pretties dogs: ", dogs);
  const dogCount = dogs.length;

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount}/>

      <main>
        <div className="cards__wrapper">
		{cats.map((cat, index) => (
            <Card
			  key={cat.id}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              catIndex={index}
            />
          ))}
		{dogData.map((dog) => (
            <Card
			  key={dog.id}
              name={dog.name}
              species={dog.species}
              favFoods={dog.favFoods}
              birthYear={dog.birthYear}
              catIndex={-1}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

//
// const words = ["come", "buy", "drink", "cook", "study", "eat", "swim"];

//
const words = [
  { id: 0, verb: ["eat", "ate", "eaten"] },
  { id: 1, verb: ["sleep", "slept", "slept"] },
  { id: 2, verb: ["run", "ran", "run"] },
  { id: 3, verb: ["come", "came", "come"] },
  { id: 4, verb: ["work", "worked", "worked"] },
  { id: 5, verb: ["study", "studied", "studied"] },
  { id: 6, verb: ["learn", "learned", "learned"] }, // Bisa juga "learnt" (British English)
  { id: 7, verb: ["cook", "cooked", "cooked"] },
  { id: 8, verb: ["buy", "bought", "bought"] },
  { id: 9, verb: ["drink", "drank", "drunk"] },
  { id: 10, verb: ["watch", "watched", "watched"] },
  { id: 11, verb: ["speak", "spoke", "spoken"] },
  { id: 12, verb: ["talk", "talked", "talked"] },
  { id: 13, verb: ["say", "said", "said"] },
  { id: 14, verb: ["write", "wrote", "written"] },
  { id: 15, verb: ["read", "read", "read"] }, // Pelafalan berbeda di V2 & V3
  { id: 16, verb: ["listen", "listened", "listened"] },
  { id: 17, verb: ["call", "called", "called"] },
  { id: 18, verb: ["open", "opened", "opened"] },
  { id: 19, verb: ["close", "closed", "closed"] },
  { id: 20, verb: ["help", "helped", "helped"] },
];

export default function RandomWordForm() {
  const [word, setWord] = useState("");

  const getRandomWord = () => {
    //
    const randomIndex = Math.floor(Math.random() * words.length);
    setWord(words[randomIndex].verb[0]);
    const verbs = words[randomIndex].verb;

    // add to local storage
    localStorage.setItem("verb", JSON.stringify(verbs) || "[]");
  };

  return (
    <div className="flex flex-col">
      <div className="w-full mt-10">
        <CardContent className="flex flex-col gap-4 items-center">
          <p className="text-center font-bold text-xl">
            {word || "Click here"}
          </p>
          <Button onClick={getRandomWord} className="w-full">
            Acak
          </Button>
        </CardContent>
      </div>
    </div>
  );
}

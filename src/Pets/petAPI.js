const pets = [
  { id: "a234", name: "Oreo", species: "cat", age: 5 },
  { id: "a345", name: "Luna", species: "dog", age: 6 },
  { id: "b234", name: "Bell", species: "cat", age: 3 },
  { id: "cda2", name: "Snowball", species: "rabbit", age: 2 },
  { id: "def4", name: "Nibbles", species: "rabbit", age: 7 },
  { id: "eft2", name: "Bella", species: "chinchilla", age: 4 }
];

const getAll = () => pets;

const getOne = id => pets.find(pet => pet.id === id);

export default {
  getOne,
  getAll
};

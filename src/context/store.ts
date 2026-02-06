import create from 'zustand';

// Define the structure of our state
interface StoreState {
  pets: Pet[];
  careTasks: CareTask[];
  logs: Log[];
  vets: Vet[];
  emergencyContacts: EmergencyContact[];
  petSitters: PetSitter[];
  trips: Trip[];
  addPet: (pet: Pet) => void;
  removePet: (petId: string) => void;
  addCareTask: (task: CareTask) => void;
  removeCareTask: (taskId: string) => void;
}

// Example interfaces for better type safety
interface Pet {
  id: string;
  name: string;
  age: number;
}

interface CareTask {
  id: string;
  description: string;
  date: string;
}

interface Log {
  id: string;
  message: string;
  date: string;
}

interface Vet {
  id: string;
  name: string;
  contact: string;
}

interface EmergencyContact {
  id: string;
  name: string;
  contact: string;
}

interface PetSitter {
  id: string;
  name: string;
  contact: string;
}

interface Trip {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
}

const useStore = create<StoreState>((set) => ({
  pets: [],
  careTasks: [],
  logs: [],
  vets: [],
  emergencyContacts: [],
  petSitters: [],
  trips: [],
  addPet: (pet) => set((state) => ({ pets: [...state.pets, pet] })),
  removePet: (petId) => set((state) => ({ pets: state.pets.filter(pet => pet.id !== petId) })),
  addCareTask: (task) => set((state) => ({ careTasks: [...state.careTasks, task] })),
  removeCareTask: (taskId) => set((state) => ({ careTasks: state.careTasks.filter(task => task.id !== taskId) })),
}));

export default useStore;

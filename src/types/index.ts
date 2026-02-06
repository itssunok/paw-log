// src/types/index.ts

// Type definitions for the application

type Pet = {
    id: string;
    name: string;
    age: number;
    breed: string;
    ownerId: string;
};


type CareTask = {
    id: string;
    petId: string;
    task: string;
    dueDate: Date;
    completed: boolean;
};


type CareLog = {
    id: string;
    petId: string;
    taskId: string;
    date: Date;
    notes: string;
};


type Vet = {
    id: string;
    name: string;
    phone: string;
    address: string;
};


type EmergencyContact = {
    id: string;
    name: string;
    relation: string;
    phone: string;
};


type PetSitter = {
    id: string;
    name: string;
    phone: string;
    rating: number;
};


type Trip = {
    id: string;
    petId: string;
    startDate: Date;
    endDate: Date;
    destination: string;
};


type User = {
    id: string;
    username: string;
    email: string;
};

export type { Pet, CareTask, CareLog, Vet, EmergencyContact, PetSitter, Trip, User };
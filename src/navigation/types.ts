// This file defines navigation type parameters for the application.

// RootStackParamList defines the types of all screens in the Root Stack Navigator.
type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Settings: undefined;
};

// BottomTabParamList defines the types for all screens in the Bottom Tab Navigator.
type BottomTabParamList = {
  Feed: undefined;
  Messages: undefined;
  Profile: undefined;
};

// Note: Add other screens as needed following the same structure.
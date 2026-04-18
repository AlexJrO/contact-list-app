# Contact List App

A React Native contact list application with search functionality built with Expo.

## Features

- **Search Contacts**: Filter contacts by name in real-time
- **Contact Display**: View all contacts with name and phone number
- **Alternating Rows**: Light and dark alternating row backgrounds for better readability
- **Contact Counter**: Shows the number of contacts found based on search

## Project Structure

```
contact-list-app/
├── App.js                 # Main app component
├── app.json              # Expo configuration
├── babel.config.js       # Babel configuration
├── package.json          # Project dependencies
├── .gitignore           # Git ignore file
├── assets/              # Images and icons folder
└── README.md            # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

### Running the App

- **Web**: Press `w` in the terminal
- **Android**: Press `a` in the terminal
- **iOS**: Press `i` in the terminal

## App Usage

1. **Search**: Type a contact name in the search bar to filter results
2. **View Contacts**: Browse through the filtered list of contacts
3. **Contact Count**: The app shows how many contacts match your search

## Sample Contacts

The app comes with 8 pre-loaded contacts:
- Alice Johnson
- Bob Martinez
- Carol White
- David Lee
- Eva Brown
- Frank Wilson
- Grace Kim
- Henry Davis

## Technical Stack

- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform for React Native
- **React Hooks**: State management with `useState`

## Styling

The app uses React Native's `StyleSheet` for styling with:
- Custom color scheme (#f4f4f4 background)
- Responsive text sizing
- Alternating row colors for better visual hierarchy
- Rounded corners and padding for modern UI

## License

MIT
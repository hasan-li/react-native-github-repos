## THINGS THIS IMPLEMENTATION IS MISSING
- TYPE CHECKING - took too long to configure it
- GITHUB AUTH AND CORRESPONDING ROW HIGLIGHTING - did not have time for that
- DID NOT WRITE UNIT TESTS - did not have time for that

## Structure: 
Structure of src folder looks as following: 
```
.
├── actions
│   ├── index.js
│   ├── repos.js
│   └── search.js
├── components
│   ├── Loading
│   │   ├── index.js
│   │   └── style.js
│   ├── Pagination
│   │   ├── index.js
│   │   └── style.js
│   ├── RepoRow
│   │   ├── index.js
│   │   └── style.js
│   └── Search
│       ├── index.js
│       └── style.js
├── constants
│   ├── colors.js
│   ├── repos.js
│   └── search.js
├── index.js
├── reducers
│   ├── index.js
│   ├── repos.js
│   └── search.js
├── routes.js
├── sagas
│   ├── index.js
│   ├── repos.js
│   └── search.js
└── screens
    ├── Application
    │   └── index.js
    └── Main
        ├── index.js
        └── style.js
```

## Tech stack used:
- React Hooks
- Redux for state management
- Redux-saga middleware for handling logic behind
- Styled components

## Linting
For linting Eslint has been used with custom rules

## Application
- App is scalable, in future you can add as many screens/components (and logic behind) as you want.
- The picker for selecting number of rows per page looks ugly. I tried to use `react-native-material-dropdown`, but it had some deprecated lifestyle methods with warnings, so I went with standart `Picker` from react-native
- I used redux-saga as middleware for handling API requests and logic behind (was using it with `reselect` lib, but removed it at some point due to unnecessity)
- Most of the design elements are custom
- 
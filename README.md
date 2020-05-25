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
- Redux-saga as middleware for handling API requests and logic behind (was using it with `reselect` lib, but removed it at some point due to unnecessity)
- Most of the design elements are custom
- 
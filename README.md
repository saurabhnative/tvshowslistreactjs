This project contains a TV Show listing website implemented in react.js  
Instructions to run:-
1) Git clone the repository  
2) cd tvshowslist  
3) npm start  

Directory structure of src folder:  
<pre>
.
├── actions                             <-All redux actions are defined here  
│   ├── apiHandlers                     <-Init,fetch and error calls in api requests are defined here  
│   │   └── tvShowListApiHandlers.js
│   └── componentActions                <-All component level actions are defined here  
│       └── tvShowListActions.js
├── App.css
├── App.js
├── App.test.js
├── components                          <-Global reusable components can be defined here
├── constants                           <-Redux and other api constants added here
│   ├── apiConstants.js
│   └── urlConstants.js
├── index.css
├── index.js
├── logo.svg
├── reducers                            <-All redux reducers added here
│   ├── rootReducer.js
│   └── tvShowListReducer.js
├── screens                            <- All website pages/screens defined here
│   ├── homepage
│   │   ├── homepage.css
│   │   └── homepage.js
│   └── tvShowDetails
│       └── tvShowDetails.js
├── serviceWorker.js
├── store.js
└── utils                              <- Utility functions added here
</pre>

# Route-Planner Documentation

##How to build

Make sure you have the following tools installed on you machine.
-git 
-react
-npm || yarn

0. Download the repo to your local machine 

1. Install Dependencies needed to run the project
```
npm install
```
2. Pass API key into useJsApiLoader as a string || create a local variable to store key in. If you do this please remeber to add your file to the .gitignore so it will not be pushed to git hub.
 ```
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "PASS KEY HERE",
  })
  ```
3. Start the React App
```
npm start
```


#Packages used

- "@emotion/react": "^11.5.0",
- "@emotion/styled": "^11.3.0",
- "@mui/icons-material": "^5.0.5",
- "@mui/material": "^5.0.6",
- "@react-google-maps/api": "^2.5.0",
- "sass": "^1.43.4"
 

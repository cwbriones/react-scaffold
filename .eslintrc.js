{
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins" : [
        "react"
    ],
    "extends" : [
        "airbnb"
        // "eslint:recommended",
        // "plugin:react/recommended"
    ]
}

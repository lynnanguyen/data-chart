# DataChart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

# Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Docker
### Build
docker build -t data-chart .

### Run
docker run -p 4200:4200 data-chart

### Test
Go to http://localhost:4200


# Config
In /app/assets/config.json:
```
{
  "API_URL": "http://localhost:5000"
}
```
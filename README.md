# ToDo Project

Full-stack ToDo list: a .NET 9 Minimal API with MySQL (Entity Framework Core) and a React client.

## Structure

- `TodoApi/` – the server (Minimal API, routes for GET / POST / PUT / DELETE on `/items`)
- `client/` – the React client (axios)

## Running locally

### Server
1. Create a MySQL database named `todolist` with an `Items` table (Id, Name, IsComplete).
2. In `TodoApi/appsettings.Development.json`, set the connection string with your own MySQL password.
3. Run:
   ```
   cd TodoApi
   dotnet watch run
   ```

### Client
```
cd client
npm i
npm start
```

The client runs on http://localhost:3000 and calls the API at http://localhost:5292.

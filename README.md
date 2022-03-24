# Project REST-Rant

REST-Rant is an app where users can review restaurants.

Given the setup instructions, the project folder must be pushed to GitHub and titled rest-rant.
-When viewing the repository, the project includes all required files and packages.
-When viewing the index.js file, all required globals and routes are included.
-When viewing the controllers folder, it includes a places controller (places.js).
-When going to localhost:3000/, the stub Hello World! is rendered.
-When going to localhost:3000/places, the stub GET /places is rendered.
-When going to localhost:3000/anything, the stub 404 page is rendered.



| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/places` | Index page listing all places |
| GET | `/places/new` | New form for a place |
| POST | `/places` | Create a new place |
| GET | `/places/:id` | Show one place in detail (Associated rants, new rant form, delete rant button) |
| GET | `/places/:id/edit` | Edit form for a place |
| PUT | `/places/:id` | Make changes to existing place |
| DELETE | `/places/:id` | Delete a place |
| POST | `/places/:id/rant` | Add rant to a place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant |

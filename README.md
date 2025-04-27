# NE-coding-task

See the application live [here](https://johanbook.com/NE-coding-task/).

A simple React application built with Vite and TypeScript that lets you search
for books using the Google Books API.

## Running Locally

Ensure you have the Nodejs runtime installed. After cloning this repo, then
install the dependencies using `pnpm install`.

Start the development server by running `pnpm run start`.

Open your browser and navigate to [localhost:5173](http://localhost:5173) to
view the app.

## Things to do

- Investigate Google Books API rate-limiting.
  - Cache the books for the landing page.
  - Create account with Google.
- Add pagination to allow users to explore more books.

### Developer todo list

- Add proper linting with Eslint and run it in CI
- Add Storybook to quickly prototype components

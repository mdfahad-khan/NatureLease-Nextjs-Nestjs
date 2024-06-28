
<h2>Languages and Tools</h2>

* [![NestJS][NestJS]][NestJS-url]
* [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
* [![Next.js][Next.js]][Next.js-url]
* [![Tailwind CSS][Tailwind CSS]][Tailwind CSS-url]
* CSS (Cascading Style Sheets)

[NestJS]: https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white
[NestJS-url]: https://nestjs.com/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next-dot-js&logoColor=white
[Next.js-url]: https://nextjs.org/
[Tailwind CSS]: https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind CSS-url]: https://tailwindcss.com/
<h2>Installation and Setup Instructions</h2>
<p align="left">To get a local copy up and running for your Next.js and Nest.js project with Tailwind CSS and PostgreSQL, follow these steps:</p>
<p align="left">
  1. Clone the repository:
  <pre>
  <code>
  git clone https://github.com/mdfahad-khan/Fahad-ProtfolioV2
  </code>
  </pre>
  2. Navigate to the project directory:
  <pre>
  <code>
  cd Fahad-ProtfolioV2
  </code>
  </pre>
  3. Install dependencies for the server (Nest.js):
  <pre>
  <code>
  cd server
  npm install
  </code>
  </pre>
  4. Install dependencies for the client (Next.js):
  <pre>
  <code>
  cd ../client
  npm install
  </code>
  </pre>
  5. Install Tailwind CSS and its dependencies for the client (Next.js):
  <pre>
  <code>
  npm install tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  </code>
  </pre>
  6. Set up PostgreSQL:
     - Install PostgreSQL and set up your database locally or use a cloud service.
     - Create a `.env` file in the server directory and add the following variables:
     <ul>
       <li>DB_HOST = localhost (or your database host)</li>
       <li>DB_PORT = 5432 (or your database port)</li>
       <li>DB_USERNAME = your PostgreSQL username</li>
       <li>DB_PASSWORD = your PostgreSQL password</li>
       <li>DB_DATABASE = your PostgreSQL database name</li>
     </ul>
  7. Start the Nest.js server:
  <pre>
  <code>
  npm start
  </code>
  </pre>
  8. Start the Next.js development server:
  <pre>
  <code>
  npm run dev
  </code>
  </pre>
  9. Open your browser and navigate to:
  <pre>
  <code>
  http://localhost:3000
  </code>
  </pre>
  Your Next.js and Nest.js application with Tailwind CSS and PostgreSQL should now be running locally!
</p>

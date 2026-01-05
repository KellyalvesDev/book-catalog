const books = [
  { title: "Dom Casmurro", author: "Machado de Assis" },
  { title: "1984", author: "George Orwell" }
];

const app = document.getElementById("app");

books.forEach(b => {
  const div = document.createElement("div");
  div.className = "book";
  div.innerHTML = `<strong>${b.title}</strong><br/>${b.author}`;
  app.appendChild(div);
});

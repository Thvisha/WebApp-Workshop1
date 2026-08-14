type Person = {
  firstName: string;
  lastName: string;
  id: number;
};

const person: Person = {
  firstName: "Arun",
  lastName: "Kenjila",
  id: 12,
};

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>Person Details</h1>
  <p><strong>First Name:</strong> ${person.firstName}</p>
  <p><strong>Last Name:</strong> ${person.lastName}</p>
  <p><strong>ID:</strong> ${person.id}</p>
`;
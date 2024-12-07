// API-ból véletlenszerű felhasználói adatok betöltése
const projektLista = document.getElementById("projektlista");

fetch("https://randomuser.me/api/?results=3")
    .then(response => response.json())
    .then(data => {
        const users = data.results;
        users.forEach(user => {
            // Felhasználó adatai
            const name = `${user.name.first} ${user.name.last}`;
            const country = user.location.country;
            const email = user.email;

            // Új projekt elem létrehozása
            const projekt = document.createElement("div");
            projekt.innerHTML = `
                <p><strong>Név:</strong> ${name}</p>
                <p><strong>Ország:</strong> ${country}</p>
                <p><strong>Email:</strong> ${email}</p>
                <hr>
            `;
            projekt.classList.add("projekt-item");
            projektLista.appendChild(projekt);
        });
    })
    .catch(error => {
        console.error("Hiba történt az API betöltésekor:", error);
        projektLista.innerHTML = "<p>Nem sikerült betölteni a projekteket. Próbáld újra később!</p>";
    });

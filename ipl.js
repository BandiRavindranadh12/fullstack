async function searchIPL() {
    const searchQuery = document.getElementById("iplSearch").value.trim();
    const resultsDiv = document.getElementById("searchResults");

    if (searchQuery === "") {
        resultsDiv.innerHTML = "<p>Please enter a team or player name.</p>";
        return;
    }

    const apiKey = "f8f485cc-f794-4400-afb0-8b7e1a0125cb";  // Your API key
    const apiUrl = `https://api.cricapi.com/v1/players?apikey=${apiKey}&search=${searchQuery}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log("API Response:", data);

        if (!data || data.status !== "success" || !data.data || data.data.length === 0) {
            resultsDiv.innerHTML = "<p>No results found.</p>";
            return;
        }

        resultsDiv.innerHTML = ""; // Clear previous results

        data.data.forEach(player => {
            const playerDiv = document.createElement("div");
            playerDiv.classList.add("search-result");
            playerDiv.innerHTML = `<p onclick="redirectToPlayer('${player.id}')">${player.name} (${player.country || "N/A"})</p>`;
            resultsDiv.appendChild(playerDiv);
        });

    } catch (error) {
        resultsDiv.innerHTML = "<p>Error fetching data. Try again later.</p>";
        console.error("Error:", error);
    }
}

function redirectToPlayer(playerId) {
    window.location.href = `player.html?id=${playerId}`;
}
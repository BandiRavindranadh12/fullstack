document.addEventListener("DOMContentLoaded", function() {
    fetchPlayerDetails();
});

async function fetchPlayerDetails() {
    const params = new URLSearchParams(window.location.search);
    const playerId = params.get("id");
    const apiKey = "f8f485cc-f794-4400-afb0-8b7e1a0125cb";  // Your API Key
    const apiUrl = `https://api.cricapi.com/v1/players_info?apikey=${apiKey}&id=${playerId}`;

    if (!playerId) {
        document.getElementById("playerName").innerText = "Invalid Player ID.";
        return;
    }

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log("API Response:", data);

        if (!data || data.status !== "success" || !data.data) {
            document.getElementById("playerName").innerText = "Player not found.";
            return;
        }

        const player = data.data;

        document.getElementById("playerName").innerText = player.name;
        document.getElementById("playerRole").innerText = "Role: " + (player.role || "N/A");
        document.getElementById("battingStyle").innerText = "Batting Style: " + (player.battingStyle || "N/A");
        document.getElementById("bowlingStyle").innerText = "Bowling Style: " + (player.bowlingStyle || "N/A");

    } catch (error) {
        console.error("Error:", error);
        document.getElementById("playerName").innerText = "Error fetching data.";
    }
}
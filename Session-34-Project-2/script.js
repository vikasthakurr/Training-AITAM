async function getUser() {
  const username = document.getElementById("username").value;
  const userCard = document.getElementById("user-card");
  const errorMessage = document.getElementById("error-message");

  if (username === "") {
    errorMessage.textContent = "Please enter a GitHub username.";
    userCard.classList.remove("show");
    return;
  }

  try {
    errorMessage.textContent = "";
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error("User not found");
    }
    const data = await response.json();

    document.getElementById("avatar").src = data.avatar_url;
    document.getElementById("name").textContent = data.name || "No Name";
    document.getElementById("bio").textContent = data.bio || "No bio available";
    document.getElementById("followers").textContent = data.followers;
    document.getElementById("repos").textContent = data.public_repos;
    document.getElementById("following").textContent = data.following;
    document.getElementById("profile-link").href = data.html_url;

    userCard.classList.add("show");
  } catch (error) {
    errorMessage.textContent = "User not found. Please try another username.";
    userCard.classList.remove("show");
  }
}

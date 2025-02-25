async function fetchUsers() {
  try {
    const response = await fetch(
      "https://fake-json-api.mock.beeceptor.com/users"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// fetchUsers();

async function displayUsers() {
  try {
    const users = await fetchUsers();

    const userList = document.getElementById("user-list");
    if (userList) {
      userList.innerHTML = "";

      users.forEach((user) => {
        const userElement = document.createElement("li");
        userElement.className = "user-card";
        userElement.innerHTML = `
                <div class="user-image">
                <img src="${user.image || "/placeholder-user.jpg"} alt="${
          user.name
        } || "user"}
                onerror = "this.src = '/placeholder-user.jpg'">
                </div>

                <h3>${user.name}</h3>
                <p>${user.email}</p>
                <p>${user.phone}</p>
                `;

        userList.appendChild(userElement);
      });
    }
  } catch (error) {
    const errorElement = document.getElementById("error-message");
    if (errorElement) {
      errorElement.textContent = "Failed to fetch data";
      errorElement.style.display = "block";
    }
  }
}

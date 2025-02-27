// async function fetchUsers() {
//   try {
//     const response = await fetch("https://api.github.com/users/");

//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const data = await response.json();

//     const usernames = data.map((user) => user.login);

//     console.log(usernames);

//     return usernames;
//   } catch (error) {
//     console.log(error);

//     throw error;
//   }
// }


<script>

document.getElementById("submit").addEventListener("click",()=>{

    let a = Math.floor(Math.random() * 255) 

    let b = Math.floor(Math.random() * 255) 

    let c = Math.floor(Math.random() * 255) 

    

    const con = document.querySelector(".color")

    con.style.backgroundColor = `rgb(${a},${b},${c})`        

})

</script>
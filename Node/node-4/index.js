async function fetchUserData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users/3")
    const user= await response.json()
    console.log(user.name);
}
fetchUserData();
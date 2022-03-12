const rainButton = document.getElementById("rainButt");
const myPic = document.getElementById("newImg");

rainButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (confirm("Would you like to see a doggo?")) {
        try {
            fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(result => {
                console.log(result);
                myPic.src = result.message;
            })
        } catch (error) {
            alert(error + " was caught");
        }
    }
});
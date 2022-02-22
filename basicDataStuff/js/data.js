const rainButton = document.getElementById("rainButt");

rainButton.addEventListener("click", (e) => {
    if (confirm("Would you like to see a rainbow?")) {
        console.log("Fetching Rainbow Now!");
        fetch('rainbow.jpg')
            .then(response => {
                alert(response);
                return response.blob();
        })
        .then(response => {
            alert(response);
        })
    }
});
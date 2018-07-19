let packageID = window.location.search.substr(1);

document.querySelector(".description").innerHTML = Packages[packageID].description;
document.querySelector(".dependencies").innerHTML = Packages[packageID].dependencies;
document.querySelector(".documentation").innerHTML = Packages[packageID].documentation;
document.querySelector(".changelog").innerHTML = Packages[packageID].changelog;


for (let i of Packages[packageID].screenshots) {
    image = document.createElement("img");
    image.setAttribute("src", i);
    document.querySelector(".screenshots").appendChild(image);
}
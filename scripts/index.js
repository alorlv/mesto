const profileButton = document.querySelector(".profile__button");
const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__button-close");

const handleProfileButtonClick = () => {
    popup.classList.add("popup__opened");
}

const handlecloseButtonClick = () => {
    popup.classList.remove("popup__opened");
}

profileButton.addEventListener ("click", handleProfileButtonClick );
closeButton.addEventListener ("click", handlecloseButtonClick );
popup.addEventListener ("click", handlecloseButtonClick );
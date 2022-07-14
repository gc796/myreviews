// Para filtrar segun la categoria
const dropdownItem = document.getElementsByClassName('dropdown-item');
const card = document.getElementsByClassName('new-card');

for (let index = 0; index < dropdownItem.length; index++) {
    dropdownItem[index].addEventListener('click',()=>{

        const option = dropdownItem[index].innerHTML.toLowerCase();

        if (option != 'todo') {
            for (let index = 0; index < card.length; index++) {
                card[index].classList.contains(option) ? card[index].classList.remove('filter') : card[index].classList.add('filter');
            }
        } else {
            for (let index = 0; index < card.length; index++) {
                if(card[index]) card[index].classList.remove('filter');
            }
        };
    });
};

// Para abrir y cerrar el modal con el boton agregar
const modal = document.getElementsByClassName('new-modal');
const closeModal = document.getElementsByClassName('close-modal-review');
const addReview = document.getElementsByClassName('add-review');

addReview[0].addEventListener('click',()=> {
    modal[0].classList.contains('toggle-modal') ? modal[0].classList.remove('toggle-modal') : modal[0].classList.add('toggle-modal');
});

closeModal[0].addEventListener('click',()=> {
    modal[0].classList.contains('toggle-modal') ? modal[0].classList.remove('toggle-modal') : modal[0].classList.add('toggle-modal');
});

// Para abrir y cerrar el modal de cada card
const openModalCard = document.getElementsByClassName('open-modal-card');
const closeModalCard = document.getElementsByClassName('close-modal-card');

for (let index = 0; index < openModalCard.length; index++) {
    openModalCard[index].addEventListener('click',()=> {
        modal[index+1].classList.contains('toggle-modal-card') ? modal[index+1].classList.remove('toggle-modal-card') : modal[index+1].classList.add('toggle-modal-card');
    });
    
    closeModalCard[index].addEventListener('click',()=> {
        modal[index+1].classList.contains('toggle-modal-card') ? modal[index+1].classList.remove('toggle-modal-card') : modal[index+1].classList.add('toggle-modal-card');
    });
    
}

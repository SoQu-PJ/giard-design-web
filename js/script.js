import MacyWrapper from './macyWrapper.js';

// MASONRY IN SECTION REALIZACJE

// masonry

const masonry = new MacyWrapper({
    container: '.masonry',
    mobileFirst: true,
    columns: 3,
    
    breakAt: {
        760: {
            columns: 3,
            margin:{
                x:30,
                y:30
            }
        }
      }
});

// Modal
document.getElementById('openPopupButton').addEventListener('click', () => {
    const popupModal = new bootstrap.Modal(document.getElementById('popupModal'));
    popupModal.show();

    popupModal._element.addEventListener('shown.bs.modal', function () {
        const masonryModal = new MacyWrapper({
            container: '.masonry-modal',
            mobileFirst: true,

            columns: 3,
            margin:{
                x:10,
                y:10
            },

            breakAt: {
                760: {
                    columns: 3,
                    margin:{
                        x:30,
                        y:30
                    }
                }
              }
        });
    });

    // Second Modal
    const masonryModalImg = document.querySelectorAll(".masonry-modal .masonry-img");

    masonryModalImg.forEach(img => {
        img.addEventListener("click", e => {
            const imgSrc = img.getAttribute("src");

            const popupModal = new bootstrap.Modal(document.getElementById('secondaryModal'));
                popupModal.show();
            document.getElementById("secondary-modal-photo").setAttribute("src", imgSrc);
        })
    });
});



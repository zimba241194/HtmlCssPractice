'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const blocks= document.querySelectorAll('.PartsBlock'),
    blocksButton= document.querySelectorAll('.ArrowButton'),
    blocksParent= document.querySelector('.bodyPARTS');

    function hideBlock () {
        blocks.forEach(item => {
            item.style.display = 'none';
        });
        
        blocks.forEach(item => {
            item.classList.remove('PartsBlockActive');
        });

        blocks.forEach(item => {
            item.classList.remove('PartsBlockActive');
        });
    }

    function showBlock (i) {
        blocks[i].style.display = 'flex';
        blocks[i].classList.add('PartsBlockActive');
        blocksButton[i].classList.add('PartsBlockActive');
    }

    hideBlock();
    showBlock(0);

    blocksParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('ArrowButton')) {
            blocksButton.forEach((item, i) => {
                if (i === 0) {
                    hideBlock();
                    showBlock(1);
                }
            });
        }
    });
});
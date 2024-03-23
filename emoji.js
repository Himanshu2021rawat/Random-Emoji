const emoji = document.querySelector('.emoji');

const emojiarr = ['😊', '🤣', '😒', '😍', '😎', '😜', '😇', '😂', '😘', '🥳', '😻', '😋', '🤩', '😅', '😇', '🙃', '😹', '😸', '😻', '😽', '🤗', '😚', '😛', '😝', '🤑', '😵', '😌', '🤓', '😏', '😬', '😆', '😸', '😽', '🥰', '🤪', '😹', '🤔', '😼', '😻', '😹', '🤯'];


emoji.addEventListener('mouseover',function(){


    emoji.innerHTML = emojiarr[Math.floor(Math.random()*emojiarr.length)];

})


const sounds = new Array('applause', 'boo', 'tada', 'victory', 'wrong');



sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;
    
    btn.addEventListener('click', function () {
        stopAudio();
        document.getElementById(sound).play();
    })
    document.getElementById('buttons').appendChild(btn);
})


function stopAudio() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);

        audio.pause();
        audio.currentTime = 0;
    })
}
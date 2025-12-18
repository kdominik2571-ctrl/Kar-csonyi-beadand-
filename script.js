
const countdown = () => {
   
    const countDate = new Date("Dec 24, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    if (gap > 0) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        
        const dayEl = document.getElementById("days");
        if (dayEl) {
            dayEl.innerText = textDay < 10 ? '0' + textDay : textDay;
            document.getElementById("hours").innerText = textHour < 10 ? '0' + textHour : textHour;
            document.getElementById("minutes").innerText = textMinute < 10 ? '0' + textMinute : textMinute;
            document.getElementById("seconds").innerText = textSecond < 10 ? '0' + textSecond : textSecond;
        }
    } else {
        
        const countdownEl = document.getElementById("countdown");
        if (countdownEl) {
            countdownEl.innerHTML = "<div class='col-12'><h3>Boldog Karácsonyt!</h3></div>";
        }
    }
};


setInterval(countdown, 1000);


function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    

    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.opacity = Math.random();
    
    
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';

    document.body.appendChild(snowflake);

    
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}


setInterval(createSnowflake, 300);


document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousedown', function (e) {
    
        let ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);

       
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let y = e.clientY - e.target.getBoundingClientRect().top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

       
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');

    cards.forEach(card => {
        card.addEventListener('click', function (e) {
            
            let ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            
            const rect = this.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');
    const infoModal = new bootstrap.Modal(document.getElementById('infoModal'));
    const modalTitle = document.getElementById('modalTitle');
    const modalBodyText = document.getElementById('modalBodyText');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.card-title').innerText;
    
            if (title.includes("Gasztro")) {
                modalTitle.innerText = "Gasztro Élmények";
                modalBodyText.innerText = "Hamarosan: Tekintse meg az idei év ünnepi menüsorát!";
            } 
            else if (title.includes("Kézzel Készített")) {
                modalTitle.innerText = "Kézzel Készített Portékák";
                modalBodyText.innerText = "Ismerje meg 24 helyi kézművesünk történetét és kínálatát!";
            } 
            else if (title.includes("Korcsolya")) {
                modalTitle.innerText = "Korcsolyapálya";
                modalBodyText.innerText = "A pálya jelenleg NYITVA! \n Ingyenes korcsolyázási lehetőség minden nap 08:00 - 20:00 között.";
            }

            
            infoModal.show();
        });
    });
});
setInterval(() => {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let second = document.getElementById("second");
    let ampm = document.getElementById("ampm");
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";

    let hr_dots = document.querySelector('.hr_dots');
    let min_dots = document.querySelector('.min_dots');
    let sec_dots = document.querySelector('.sec_dots');


    let hh = document.getElementById("hh")
    let mm = document.getElementById("mm")
    let ss = document.getElementById("ss")
    
    // Convert 24 clock to 12 clock //
    if (h > 12) {
        h = h - 12;
    
    }
    
    // add zero before single digit number // 
    h = ( h < 10) ? "0" + h : h;
    m = ( m < 10) ? "0" + m : m;
    s = ( s < 10) ? "0" + s : s;
    
    hours.innerHTML = h +  ' <br><span> Hours </span>';
    minutes.innerHTML = m  +  ' <br><span> Minutes </span>';
    second.innerHTML = s  +  ' <br><span> Seconds </span>';
    ampm.innerHTML = am ;

    hh.style.strokeDashoffset = 440 -(440 * h)/ 12;
    // 12 hours clock 
    mm.style.strokeDashoffset = 440 -(440 * m)/ 60;
    // 60 minute 
    ss.style.strokeDashoffset = 440 - (440 *s)/ 60;

    hr_dots.style.transform = `rotate(${h * 30}deg)`
    min_dots.style.transform = `rotate(${m * 6}deg)`
    sec_dots.style.transform = `rotate(${s * 6}deg)`
    
})
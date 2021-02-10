// Nav-var

const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});


// Slider

const slider = document.querySelector(".slider");
M.Slider.init(slider, {
    indicators: false,
    height: 600,
    transition: 500,
    interval: 6000
})

// Autocomplete

const ac = document.querySelector(".autocomplete");
M.Autocomplete.init(ac, {
    data: {
        "Cuba": null,
        "Thailand": null,
        "Mexico": null,
        "Florida": null,
        "Aruba": null,
        "Bali": null,
    }
}) 

// Gallery Box

const mb = document.querySelectorAll(".materialboxed");
M.Materialbox.init(mb, {});

// Scrollspy

const ss = querySelectorAll(".scrollspy");
M.ScrollSpy.init(ss, {});
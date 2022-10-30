
const CheckTask = (page, callback) => {
    console.log("re-evaluate")
    switch (page) {
        case 2:
            if (document.getElementById("but_page")) {
                if (document.getElementById("but_page").nextElementSibling.innerHTML.split(' ').pop().toLowerCase() === "mozaik") {
                    callback()
                }
            }
            break;
        case 3:
            if (document.getElementById("but_page")) {
                if (document.getElementById("but_page").nextElementSibling.innerHTML.split(' ').pop().toLowerCase() === "bluprint") {
                    callback()
                }
            }
            break
        case 4:
            if (document.getElementById("but_page")) {
                if (document.getElementById("but_page").nextElementSibling.innerHTML.split(' ').pop().toLowerCase() === "style") {
                    callback()
                }
            }
            break
        case 5:
            if (document.getElementById("preview")) {
                if (document.getElementById("preview").style.display !== "none") {
                    callback()
                }
            }
            break
        case 6:
            if (document.getElementById("but_page")) {
                if (document.getElementById("but_page").nextElementSibling.innerHTML.split(' ').pop().toLowerCase() === "mozaik") {
                    document.getElementById("but_page").children[2].addEventListener("click", function () {
                        callback()
                    });
                }
            }
            break
        case 7:
            if (document.getElementById("preview")) {
                const params = new Proxy(new URLSearchParams(window.location.search), {
                    get: (searchParams, prop) => searchParams.get(prop),
                });
                if (params.type !== null && params.type.toLowerCase() === "recomend") {
                    callback()
                }
            }
            break
        case 8:
            if (document.getElementById("but_page")) {
                if (document.getElementById("but_page").firstElementChild.firstElementChild.classList[0] === "fas") {
                    callback()
                }
            }
            break
        case 9:
            if (document.getElementById("preview")) {
                const params = new Proxy(new URLSearchParams(window.location.search), {
                    get: (searchParams, prop) => searchParams.get(prop),
                });
                if (params.type !== null && params.type.toLowerCase() === "favorite") {
                    callback()
                }
            }
            break
        case 10:
            if (window.location.pathname === "/user_setting") {
                const button = document.getElementsByName("but-update")[0]
                if (button) {
                    button.addEventListener("click", function () {
                        callback()
                    });
                }
            }
            break
        case 11:
            if (document.getElementById("preview")) {
                if (document.getElementById("preview").style.display === "none") {
                    callback()
                }
            }
            break
        default:
            break;
    }

}

export default CheckTask;
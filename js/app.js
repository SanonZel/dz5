const modal = document.querySelector(".modal");
const modalTrigger = document.querySelectorAll("[data-modal]");

modalTrigger.forEach((item) => {
    item.addEventListener("click", openModal);
});

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

modal.addEventListener("click", (event) => {
    if (
        event.target === modal ||
        event.target.classList.contains("modal__close")
    ) {
        closeModal();
    }
});


 const form = document.querySelectorAll("form")

 form.forEach( (form) => {
    dataForm(form)
 })

 function dataForm (form) {
    form.addEventListener("submit",(event) => {
        event.preventDefault()
        const request = new XMLHttpRequest()
        request.open('POST', 'server.php')
        request.getResponseHeader("Content-type", aplication/json)
        
        const formData = new FormData (form)
        
        const obj = {}

        formData.forEach((item, id) => { obj [id] =item})

        const data = JSON.stringify(obj)

        request.send(data)
        request.addEventListener("load", () => {
            if (request.status === 200){
                console.log(request.response)
            }}
        )
    })
}
 
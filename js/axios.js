
const wonders = document.getElementById("wonders")

const fetch_user = async () =>{
    console.log('async await')

    const wonders_data = await axios.get('https://www.world-wonders-api.org/v0/wonders');
    let body = ``;
    wonders_data.data.forEach((wonder, index) => {
        let save_wonder = {
            "images":wonder.links.images,
            "name":wonder.name,
            "location":wonder.location,
            "summary":wonder.summary,
        }
        body += `
            <div class="wonder">
            <div class="img-wonder">
                <img src="${wonder.links.images[0]}" alt="">
                <div class="overlay">
                <button data-id='${JSON.stringify(save_wonder)}' class="view-details">View Details</button>
                </div>
            </div>
            
            <div class="info">
                <h3>${wonder.name}</h3>
                <p class="price">${wonder.location}</p>
                <p class="summary">${wonder.summary}</p>
            </div>
            </div>
        `;
    })
    wonders.innerHTML = body
    const view_details = document.querySelectorAll(".view-details");
    view_details.forEach((view_detail) => {
        view_detail.addEventListener("click", (event) => {
            const id = event.target.getAttribute('data-id');
            console.log(JSON.parse(id))
        });
    });

};
fetch_user()

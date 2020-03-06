const Config = {
    name: "Artem",
    scale: 1,
    Links: [
        [
            "Brivity",
            [
                ["CRM", "https://brivity.com/super"],
                ["CMA", "https://brivitycma.com/super"],
                ["KWKLY", "https://app.kwkly.com/Login.aspx"],
                ["Marketer", "https://www.brivitymarketer.com/"],
                ["IDX", "https://login.realvolution.com/"],
                ["BlueRoof", "http://blueroof360.com/"]
            ]
        ],
        [
            "Support",
            [
                ["Tickets", "https://app.hubspot.com/contacts/6041126/tickets/list/view/2780026/?"],
                ["Chats", "https://app.hubspot.com/live-messages/6041126/inbox/239016896#reply-editor"],
                ["Chargify", "https://app.chargify.com/sellers/15612-brivity"],
                ["Mandrill", "https://mandrillapp.com/login/?referrer=%2F"],
                ["HelpCenter", "https://info.brivity.com/knowledge/"]
            ]
        ],
        [
            "Other",
            [
                ["TimeClock", "https://www.payrollservers.us/pg/Ess/Home.aspx"],
                ["Mail", "https://mail.google.com"],
                ["Drive", "https://drive.google.com"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()

const Config = {
    name: "Artem",
    scale: 1,
    Links: [
        [
            "FAST",
            [
                ["Environments", "https://environments.gentax.com/links/"],
                ["FAST Teams", "https://teams.microsoft.com/_#/conversations/19:7bf54742-dcb0-4e0d-9561-f5255d574a84_7ff98e9e-86f0-4dad-96c8-1e9b22ac6f92@unq.gbl.spaces?ctx=chat"],
                ["ADP", "https://workforcenow.adp.com/workforcenow/login.html?TYPE=33554433&REALMOID=06-000dc772-cdfd-1f1b-aeeb-b0290b010092&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-NP5j2WG6IhC9aG03BI8gDbA%2bRe6Q5fJaTcb%2fl%2fYG%2fIhi%2bYBqEbG2jjyYyPKS4Sna&TARGET=-SM-https%3a%2f%2fworkforcenow%2eadp%2ecom%2ftheme%2findex%2ehtml#/Myself_ttd_MyselfTabXBPayCategoryPayStatements/MyselfTabXBPayCategoryPayStatements"],
                ["Marketer", "https://www.brivitymarketer.com/"]
            ]
        ],
        [
            "New Mexico",
            [
                ["Guacamole", "https://cra.trd.state.nm.us/#/"]
               
            ]
        ],
        [
            "Electro Stonks",
            [
                ["CMC", "https://coinmarketcap.com/"],
                ["GMail", "https://mail.google.com"],
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

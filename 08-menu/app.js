const menu = [{
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "dinner steak",
        category: "dinner",
        price: 16.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const sectionCenter = document.querySelector('.section-center');
const title = document.querySelector('.title');



// create a div element to serve as container for the buttons
const appendContainer = document.createElement('div');
const buttonContainer = title.insertAdjacentElement('afterend', appendContainer);
buttonContainer.classList.add('btn-container');

// created the window eventlistener
window.addEventListener("DOMContentLoaded", function() {
    showItem(menu);
    showBtn(menu);
    // click button event
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const innerContent = e.currentTarget.innerHTML;
            if (innerContent == "all") {
                console.log(showItem(menu));
            }
            let categoryItens = menu.map((item) => {
                if (item.category === innerContent) {
                    return `<article class="menu-item">
                        <img src="${item.img}" alt="menu item">
                        <div class="item-info">
                          <header>
                             <h4>${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                         </header>
                      <p>${item.desc}</p>
                          </div>
                         </article>`;
                } else {
                    return showItem(menu);
                }

            })
            categoryItens = categoryItens.join('');
            sectionCenter.innerHTML = categoryItens;
            console.log(categoryItens);
        })
    })

})

function showItem(dish) {
    let showMenu = dish.map((item) => {
        return `<article class="menu-item">
    <img src="${item.img}" alt="menu item">
    <div class="item-info">
        <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
        </header>
        <p>${item.desc}</p>
    </div>
</article>`;
    })
    showMenu = showMenu.join('');
    sectionCenter.innerHTML = showMenu;
}

function showBtn(menuItem) {
    let category = menuItem.reduce(function(values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all'])

    let categoryBtns = category.map((btn) => {
        return `<button type="button" value="${btn}" class="filter-btn">${btn}</button>`
    })
    categoryBtns = categoryBtns.join('');
    buttonContainer.innerHTML = categoryBtns;
}
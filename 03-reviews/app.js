// local reviews data
const reviews = [{
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

// set the counter
let count = 0;
// get the elements
const img = document.getElementById('person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

// before button and next button
const nextPrevBtns = document.querySelectorAll('.prev-btn');

// random button
const randomBtn = document.querySelector('.random-btn');

// event of the next and before button
nextPrevBtns.forEach(function(person) {
    person.addEventListener('click', function(e) {
        const classLi = e.currentTarget.classList;
        if (classLi.contains('left')) {
            count--;
            if (count < 0) {
                count = reviews.length - 1;
            }
        } else if (classLi.contains('right')) {
            count++;
            if (count > reviews.length - 1) {
                count = 0;
            }
        }
        img.src = reviews[count]['img'];
        author.textContent = reviews[count]['name'];
        job.textContent = reviews[count]['job'];
        info.textContent = reviews[count]['text'];


    })
})


// event of the rondam button
randomBtn.addEventListener('click', function() {
    // generate a random num
    let objIndex = Math.floor(Math.random() * reviews.length);
    img.src = reviews[objIndex]['img'];
    author.textContent = reviews[objIndex]['name'];
    job.textContent = reviews[objIndex]['job'];
    info.textContent = reviews[objIndex]['text'];

})
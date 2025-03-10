const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Elementi

const nameElement = document.querySelector('name');
const roleElement = document.querySelector('role');
const emailElement = document.querySelector('email');
const imageElement = document.querySelector('image');
const gridElement = document.querySelector('div.grid');

console.log(nameElement);
console.log(roleElement);
console.log(emailElement);
console.log(imageElement);
console.log(gridElement);

// Funzione per aggiungere le informazioni

/*  
<div class="card">
                <img src="" alt="" class="image">
                <div class="information">
                    <p class="name"></p>
                    <p class="role"></p>
                    <p class="email"></p>
                </div>
            </div>
        </div>
*/

function addInformation() {
  let items = '';
  for (let i = 0; i < teamMembers.length; i++) {
    items += `<div class="card">
                <img src="${teamMembers[i].img}" alt="${teamMembers[i].name}" class="image">
                <div class="information">
                    <p class="name">${teamMembers[i].name}</p>
                    <p class="role">${teamMembers[i].role}</p>
                    <p class="email">${teamMembers[i].email}</p>
                </div>
            </div>
        </div>`
  }
  console.log(items);

  return items;
}

gridElement.innerHTML = addInformation();


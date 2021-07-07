/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';

const cardSection = document.querySelector('.cards');

axios.get('https://api.github.com/users/victoriamount')
  .then(res => {
    cardSection.appendChild(cardBuilder(res.data));
  })
  .catch(err => {
    debugger;
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['https://api.github.com/users/bigknell', 'https://api.github.com/users/luishrd', 'https://api.github.com/users/justsml', 'https://api.github.com/users/dustinmyers', 'https://api.github.com/users/tetondan'];

followersArray.forEach(item => {
  axios.get(item)
  .then(res => {
    cardSection.appendChild(cardBuilder(res.data));
  })
  .catch(err => {
    debugger;
  })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


function cardBuilder(infoObject) {
  // set up elements 
  const card = document.createElement('div')
  const userImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileLink = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  // fill elements with classes and text
  card.classList.add('card')
  userImg.src = infoObject.avatar_url;
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  name.textContent = infoObject.name
  userName.classList.add('username')
  userName.textContent = infoObject.login
  location.textContent = infoObject.location
  profileLink.textContent = `${infoObject.html_url}`
  profileLink.href = infoObject.html_url
  profile.textContent = 'Profile: '  
  followers.textContent = `Followers: ${infoObject.followers}`
  following.textContent = `Following: ${infoObject.following}`
  bio.textContent = `Bio: ${infoObject.bio}`

  // set up parent-child hierarchy
  card.appendChild(userImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(profileLink)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  

  return card;
}



// console.log('can anyone hear me?')
// cardBuilder({
//   "login": "victoriamount",
//   "id": 66040249,
//   "node_id": "MDQ6VXNlcjY2MDQwMjQ5",
//   "avatar_url": "https://avatars1.githubusercontent.com/u/66040249?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/victoriamount",
//   "html_url": "https://github.com/victoriamount",
//   "followers_url": "https://api.github.com/users/victoriamount/followers",
//   "following_url": "https://api.github.com/users/victoriamount/following{/other_user}",
//   "gists_url": "https://api.github.com/users/victoriamount/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/victoriamount/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/victoriamount/subscriptions",
//   "organizations_url": "https://api.github.com/users/victoriamount/orgs",
//   "repos_url": "https://api.github.com/users/victoriamount/repos",
//   "events_url": "https://api.github.com/users/victoriamount/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/victoriamount/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Victoria",
//   "company": null,
//   "blog": "https://www.linkedin.com/in/victoria-l-mount/",
//   "location": "Nashville, TN",
//   "email": null,
//   "hireable": null,
//   "bio": "Nashville, TN\r\nWeb Development Student ",
//   "twitter_username": null,
//   "public_repos": 22,
//   "public_gists": 0,
//   "followers": 0,
//   "following": 0,
//   "created_at": "2020-05-27T22:17:16Z",
//   "updated_at": "2020-10-01T20:29:29Z"
// });

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

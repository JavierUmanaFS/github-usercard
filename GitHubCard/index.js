/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>         
*/
    // Uncomment this
    //  axios.get('https://api.github.com/users/javierumanafs')
    //  .then(response =>{
    //    console.log(response.data)
    //    response.data.map(item =>{
    //      mainCards.appendChild(gitCard(item))
    //    })
    //  })
    //  .catch(error =>{
    //    console.log('the data was not returned', error)
    //  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const mainCards = document.querySelector('.cards');

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];


// 'teaguehannam', 'dakoriah','ardissam0', 'kkslider2130', 'justinruss24'

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

function gitCard(obj){
  //Create new elements
  const card = document.createElement('div'),
        newImg = document.createElement('img'),
        cardInfo = document.createElement('cardInfo'),
        userName = document.createElement('h3'),
        userTag = document.createElement('p'),
        userLocation = document.createElement('p'),
        profile = document.createElement('p'),
        gitAddress = document.createElement('a'),
        followers = document.createElement('p'),
        following = document.createElement('p'),
        userBio = document.createElement('p');

      // Setting up structure of our elements
      profile.appendChild(gitAddress);
      cardInfo.append(userName, userTag, userLocation, profile, followers, following, userBio);
      card.append(newImg, cardInfo);

      // Add classes to elements
      card.classList.add('card');
      userName.classList.add('name');
      userTag.classList.add('username');
      
      // Set text content
      newImg.src = obj.avatar_url;
      userName.textContent = obj.name;
      userTag.textContent = obj.login;
      userLocation.textContent = `Location: ${obj.location}`;
      gitAddress.textContent = `${obj.html_url}`
      profile.innerHTML = `Profile: <a>${obj.html_url} </a>`;
      followers.textContent = `Followers: ${obj.followers}`;
      following.textContent = `Following: ${obj.following}`;
      userBio.textContent = `Bio: ${obj.bio}`;

  return card;
}





axios.get('https://api.github.com/users/javierumanafs')
.then(response =>{
  // console.log(response.data)
  let newUser = gitCard(response.data)
  mainCards.appendChild(newUser);
})
.catch(error =>{
  console.log('the data was not returned', error)
});

// const newCard = gitCard(response.data);
    // mainCards.appendChild(gitCard(response));
axios.get('https://api.github.com/users/javierumanafs/followers')
.then(response =>{

  response.data.forEach(user =>{
    axios.get(`https://api.github.com/users/${user.login}`)
    .then(response =>{
      mainCards.appendChild(gitCard(response.data))
    });
  })
})
.catch(error =>{
  console.log('the data was not returned', error)
});


// followersArray.forEach((item) =>{
//  axios.get(`https://api.github.com/users/${item}`)
// .then(response =>{
  
//   })
//   console.log('aaa',item)
// })



// followersArray.forEach((follower) => {
//   console.log(follower)
//   axios.get(`https://api.github.com/users/${follower}`)
//   .then(response =>{

//   });
 
// })


// console.log(followersArray)





/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

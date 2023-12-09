const profile = {
  name: "Pablo",
  tag: "user",
  location: "Los Angeles",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfj2e1Oaqa19A9y2IS20nihIRgDvFCpw-6w&usqp=CAU", // undefined
  stats: {
    followers: 5063,
    views: 234234,
    likes: 1309,
  },
  online: true,
  changeTag(newTag) {
    this.tag = newTag;
  },
};
profile.changeTag("pueblik");

function makeProfileMarkup(userProfile) {
  const {
    avatar = "https://cdn-icons-png.flaticon.com/512/5556/5556468.png", // for undefined
    name,
    tag,
    location,
    stats: { followers, views, likes },
  } = userProfile;
  return `<img src="${avatar}" width="150" heigth="auto">
          <p>${name}<span>@${tag}</span></p>
          <p>Location: ${location}</p>
          <ul>
          <li>Followers: ${followers}</li>
          <li>Views: ${views}</li>
          <li>Likes: ${likes}</li>
          </ul>`;
}

const markup = makeProfileMarkup(profile);
console.log(markup);

document.body.insertAdjacentHTML("afterbegin", markup);

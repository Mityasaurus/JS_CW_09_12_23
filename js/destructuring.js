//деструктуризація
// const profile = {
//   name: "Pablo",
//   tag: "user",
//   location: "Los-Angeles",
//   avatar: "https://wefghwefh.com/images/",
//   stats: {
//     followers: 5063,
//     views: 234234,
//     lokes: 1309,
//   },
//   online: true,
// };

// function showProfileInfo(userProfile) {
//   const { name, tag, location, avatar, ...restProps } = userProfile;
//   console.log(name, tag, location, avatar, restProps);
// }

// showProfileInfo(profile);

//rest збір

const profile = {
  name: "Pablo",
  tag: "user",
  location: "Los-Angeles",
  avatar: "https://wefghwefh.com/images/",
  stats: {
    followers: 5063,
    views: 234234,
    likes: 1309,
  },
  online: true,
};

const { name, tag, ...restProps } = profile;

console.log(restProps);

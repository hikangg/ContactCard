import Mock from "../mock";

const ListDB = {
  list: [
    {
      userId: 1,
      fullName: "Gina Snelly",
      profileImageUrl: "https://randomuser.me/api/portraits/women/55.jpg",
      trust: 75
    }
  ]
};

Mock.onGet("/api/user/all").reply(config => {
  const response = ListDB.list;
  return [200, response];
});

import usersData from "./service";

describe("usersData", () => {
  test("have length", async () => {
    let res = await usersData(`https://yalantis-react-school-api.yalantis.com/api/task0/users`);
    expect(res).toHaveLength(100);
  });
});

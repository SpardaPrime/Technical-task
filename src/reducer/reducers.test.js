import allusers from "./allusers";
import choseuser from './choseuser';

describe("reducers", () => {
  test("allusers", () => {
    const obj = {};
    const state = { data: null };
    expect(allusers(state, obj)).toEqual({ data: null });
  });
  test("choseuser", () => {
    const obj = {};
    const state = { data: 5 };
    expect(choseuser(state, obj)).toEqual({ data: 5 });
  });
});

import AppData from "./AppData";

test("app data create object", () => {
  const appDataObj = new AppData();
  const expectedObj = {
    test1: "test1",
    test2: "test2"
  };
  const returnObj = appDataObj.createObj();
  expect(returnObj).toEqual(expectedObj);
});

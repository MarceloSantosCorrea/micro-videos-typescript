import { Category } from "./category";

describe("Category Unit test", () => {
  test("constructor of category", () => {
    const created_at = new Date();
    const category = new Category({
      name: "name",
      description: "description",
      is_active: true,
      created_at,
    });
    expect(category.props).toStrictEqual({
      name: "name",
      description: "description",
      is_active: true,
      created_at,
    });
  });
});

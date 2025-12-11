// src/index.test.ts
import { add, sumThree } from "./index";

test("add adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
});

test("sumThree adds three numbers using add", () => {
    expect(sumThree(1, 2, 3)).toBe(6);
});

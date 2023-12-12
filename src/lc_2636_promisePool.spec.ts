import { promisePool } from "./lc_2636_promisePool";

async function sleep(time: number): Promise<any> {
  return new Promise((res) => setTimeout(res, time));
}

describe("promisePool", () => {
  it("call after 900 ms", async () => {
    const startTime = new Date().getTime();
    await promisePool([() => sleep(500), () => sleep(400)], 1);
    const endTime = new Date().getTime();

    expect(endTime - startTime).toBeGreaterThan(900);
  });
});

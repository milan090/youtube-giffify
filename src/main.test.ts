import { generateGif } from "./main";

describe("Generate GIF", () => {
  it("SHOULD RETURN valid response", async (done) => {
    console.time("GIF");
    const res = await generateGif(
      "https://www.youtube.com/watch?v=7JgdzmrqTXU",
      "./example.gif"
    );
    console.timeEnd("GIF");
    expect(res).toBeTruthy();
    done();
  });
});

// eslint-disable-next-line no-undef
registerPaint(
  "suipian",
  class {
    static get inputProperties() {
      return ["--color", "--m", "--n"];
    }
    paint(ctx, size, properties) {
      console.log("ctx:", ctx, "size:", size, properties.get("--color"));
      const m = properties.get("--m");
      const n = properties.get("--n");
      const w = size.width / m;
      const h = size.height / n;

      for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
          ctx.fillStyle = "rgba(0,0,0," + Math.random() * 1.2 + ")";
          ctx.fillRect(i * w, j * h, w, h);
        }
      }

      console.log(m, n);
    }
  }
);

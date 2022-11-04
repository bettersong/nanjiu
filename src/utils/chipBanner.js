export default class ChipBanner {
  constructor() {
    this.cvs = document.querySelector("#chip");
    this.ctx = this.cvs.getContext("2d");
    this.imgList = document.querySelectorAll(".bg");
    this.imgIndex = 0;
    this.isAnimating = false;

    this.imgW = 800; //图片原始宽/高
    this.imgH = 530;

    this.conW = 800; //画布宽/高
    this.conH = 530;

    this.dw = 16; //画布单元宽/高
    this.dh = 15;

    this.I = this.conH / this.dh; //单元行/列数
    this.J = this.conW / this.dw;

    this.DW = this.imgW / this.J; //原图单元宽/高
    this.DH = this.imgH / this.I;
  }

  init() {
    this.ctx.beginPath();

    for (let i = 0; i < this.I; i++) {
      for (let j = 0; j < this.J; j++) {
        this.chipDraw(this.imgList[this.imgIndex], i, j);
      }
    }

    this.ctx.closePath();
    this.ctx.stroke();
    this.start(0, 0);
  }

  start(i, j) {
    if (this.isAnimating) return;

    this.isAnimating = true;

    this.imgIndex++;

    if (this.imgIndex > this.imgList.length - 1) this.imgIndex = 0;

    let _this = this,
      dst = 0,
      timer = setInterval(() => {
        let resArr = _this.countAround(i, j, dst);
        console.log(resArr, "--");
        resArr.forEach((item) => {
          _this.chipClear(item.x, item.y);
          _this.chipDraw(_this.imgList[_this.imgIndex], item.x, item.y);
        });

        if (!resArr.length) {
          clearInterval(timer);
          _this.isAnimating = false;
        }
        dst++;
      }, 20);
  }

  chipClick(e) {
    let offsetX = e.offsetX,
      offsetY = e.offsetY,
      j = Math.floor(offsetX / this.dw),
      i = Math.floor(offsetY / this.dh);

    this.start(i, j);
  }

  drawText(text) {
    this.ctx.font = "60px serif";
    this.ctx.strokeStyle = "white";
    this.ctx.strokeText(text, 520, 480);
  }

  chipDraw(img, i, j) {
    this.drawText("前端南玖");
    //负责绘制，i: 单元行号；j: 单元列号
    this.ctx.drawImage(
      img,
      this.DW * j,
      this.DH * i,
      this.DW,
      this.DH,
      this.dw * j,
      this.dh * i,
      this.dw,
      this.dh
    );
  }

  chipClear(i, j) {
    this.ctx.clearRect(this.dw * j, this.dh * i, this.dw, this.dh);
  }

  countAround(i, j, dst) {
    let arr = [];
    for (let m = i - dst; m <= i + dst; m++) {
      for (let n = j - dst; n <= j + dst; n++) {
        if (
          Math.abs(m - i) + Math.abs(n - j) == dst &&
          m >= 0 &&
          n >= 0 &&
          m <= this.I - 1 &&
          n <= this.J - 1
        ) {
          arr.push({ x: m, y: n });
        }
      }
    }
    return arr;
  }
}

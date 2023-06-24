const pi = 3.1415;
const cube = x => x * x * x;
const square = x => x * x;
const root = x => Math.sqrt(x);
const sphere_volume = r => (4 / 3) * pi * cube(r);
const canvas = document.querySelector("canvas");
const cx = canvas.width / 2;
const cy = canvas.height / 2 + 50;;
const ctx = canvas.getContext("2d");
const pre = document.querySelector("pre");
const floor = x => Math.floor(10 * x) / 10;
const ceil = x => Math.ceil(10 * x) / 10;

const calculateH = p => {
  return p.sphere_radius - root(square(p.sphere_radius) - square(p.base_radius))
};

const calculateVS = p => {
  var cos_teta = root(1 - square(p.base_radius / p.sphere_radius))
  var cap_volume = (pi / 3) * cube(p.sphere_radius) * (2 + cos_teta) * square(1 - cos_teta);
  var full_sphere_volume = sphere_volume(p.sphere_radius);
  return (full_sphere_volume - cap_volume) / 1000;
};

const calculateVC = p => {
  return pi * square(p.cork_radius) * (p.neck_height - p.cork_height) / 1000;
};

const draw = p => {
  const h = calculateH(p);

  ctx.reset();

  // Draw circle
  ctx.beginPath();
  ctx.arc(cx, cy, p.sphere_radius, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.strokeRect(cx - p.cork_radius, cy - p.sphere_radius - p.neck_height, p.cork_radius * 2, p.neck_height);
  // Cuts
  ctx.fillStyle = "white";
  ctx.fillRect(cx - p.cork_radius, cy - p.sphere_radius - p.neck_height, p.cork_radius * 2, p.neck_height + 20);
  // Draw cork
  ctx.fillStyle = "black";
  ctx.fillRect(cx - p.cork_radius, cy - p.sphere_radius - p.neck_height, p.cork_radius * 2, p.cork_height);
  // Draw bottom
  ctx.strokeRect(cx - p.base_radius, cy + p.sphere_radius - h - 1, p.base_radius * 2, 1);
  ctx.fillStyle = "white";
  ctx.fillRect(cx - p.base_radius, cy + p.sphere_radius - h, p.base_radius * 2, 10000);

  const liquid_max_volume = p.liquid_wanted * (1 + p.dilatation / 100);
  const vs = calculateVS(p);
  const vc = calculateVC(p);
  const vt = vs + vc;
  const filling = 100 * liquid_max_volume / vt;

  document.querySelector("#total_volume").innerText = floor(vt);
  document.querySelector("#liquid_max_volume").innerText = ceil(liquid_max_volume);
  document.querySelector("#filling").innerText = ceil(filling);

  if (filling < 100) {
    if (vs > liquid_max_volume) {
      document.querySelector("#too_little").classList.remove("hide");
    } else {
      document.querySelector("#too_little").classList.add("hide");
      const liquid_in_neck_max = liquid_max_volume - vs;
      const available_h = p.neck_height - p.cork_height;
      const top_max = available_h * liquid_in_neck_max / vc;
      ctx.fillStyle = "red";
      ctx.fillRect(
        cx - p.cork_radius,
        cy - p.sphere_radius - top_max,
        p.cork_radius * 2,
        1);
    }
    document.querySelector("#filling").classList.remove("red");
  } else {
    document.querySelector("#filling").classList.add("red");
  }

}

function calculate() {
  const params = {
    base_radius: Number(document.querySelector("#base_radius").value),
    cork_height: Number(document.querySelector("#cork_height").value),
    cork_radius: Number(document.querySelector("#cork_radius").value),
    neck_height: Number(document.querySelector("#neck_height").value),
    sphere_radius: Number(document.querySelector("#sphere_radius").value),
    liquid_wanted: Number(document.querySelector("#liquid_wanted").value),
    dilatation: Number(document.querySelector("#dilatation").value),
  };
  draw(params);
}

calculate();

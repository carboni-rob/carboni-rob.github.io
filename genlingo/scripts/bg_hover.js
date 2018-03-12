document.getElementById("step_1").addEventListener("mouseover", function() {
  document.getElementById("infographic_desk").src = "img/how_it_works_1.png";
}, false);

document.getElementById("step_2").addEventListener("mouseover", function() {
  document.getElementById("infographic_desk").src = "img/how_it_works_2.png";
}, false);

document.getElementById("step_3").addEventListener("mouseover", function() {
  document.getElementById("infographic_desk").src = "img/how_it_works_3.png";
}, false);

document.getElementById("step_1").addEventListener("mouseover", function() {
  document.getElementById("step_1").style.color = "#01B4FF";
  document.getElementById("step_2").style.color = "#595959";
  document.getElementById("step_3").style.color = "#595959";
}, false);

document.getElementById("step_2").addEventListener("mouseover", function() {
  document.getElementById("step_2").style.color = "#01B4FF";
  document.getElementById("step_1").style.color = "#595959";
  document.getElementById("step_3").style.color = "#595959";
}, false);

document.getElementById("step_3").addEventListener("mouseover", function() {
  document.getElementById("step_3").style.color = "#01B4FF";
  document.getElementById("step_1").style.color = "#595959";
  document.getElementById("step_2").style.color = "#595959";
}, false);
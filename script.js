// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = ()=> {
	navbarNav.classList.toggle('active');
};

//klik di luar sidebar untuk menghilangkan
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
	if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}
})
	
document.addEventListener("DOMContentLoaded", function () {
	const calculateButton = document.getElementById("calculate");
	calculateButton.addEventListener("submit", function (event) {
	  event.preventDefault();
	  const resultDiv = document.getElementById("result");
	  const foodName = document.getElementById("food-name").value;
	  const calories = document.getElementById("calories").value;
	  const protein = Number(document.getElementById("protein").value);
	  const carbs = Number(document.getElementById("carbs").value);
	  const fat = Number(document.getElementById("fat").value);
	  const faf = Number(document.getElementById("faf").value);
	  const fas = Number(document.getElementById("fas").value);
	  const kh = Number(document.getElementById("kh").value);
	  const p = Number(document.getElementById("p").value);
	  const l = Number(document.getElementById("l").value);
	  const golongan = document.getElementById("golongan").value;
	  const glb = Number(document.getElementById("glb")?.value || 0);
  
	  // Validasi input
	  if (faf <= 0 || fas <= 0 || kh <= 0 || p <= 0 || l <= 0) {
		alert("Pastikan semua input valid dan lebih besar dari 0.");
		return;
	  }
  
	  // Clear previous results
	  resultDiv.innerHTML = "";
  
	  // Hitung BBI (Berat Badan Ideal)
	  const bbi = calories === "lelaki" ? (fat - 100) * 0.9 : (fat - 100) * 0.85;
  
	  // Hitung BMR
	  let bmr = 0;
	  if (golongan === "sehat") {
		bmr =
		  (calories === "lelaki"
			? 66 + 13.7 * carbs + 5 * fat - 6.8 * protein
			: 655 + 9.6 * carbs + 1.8 * fat - 4.7 * protein) *
		  faf *
		  fas;
	  } else if (golongan === "dm") {
		bmr = calories === "lelaki" ? 30 * bbi : 25 * bbi;
	  } else if (golongan === "ginjal") {
		bmr = protein < 60 ? 35 * bbi : 30 * bbi;
	  } else if (golongan === "lb") {
		bmr =
		  protein > 17
			? 25 * bbi + 40 * glb
			: 60 * bbi + 35 * glb;
	  }
  
	  // Hitung Nutrisi
	  const nprotein = (bmr * p) / 100 / 4;
	  const nfat = (bmr * l) / 100 / 9;
	  const ncarbs = (bmr * kh) / 100 / 4;
  
	  // Tampilkan Hasil
	  resultDiv.innerHTML = `
		<p>Nama klien = Tn./Ny. ${foodName}</p>
		<p>Energi = ${bmr.toFixed(1)} kkal</p>
		<p>Protein = ${nprotein.toFixed(1)} gram</p>
		<p>Lemak = ${nfat.toFixed(1)} gram</p>
		<p>Karbohidrat = ${ncarbs.toFixed(1)} gram</p>
	  `;
	});
  });
  
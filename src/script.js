const slides = [
  // Slide 1: Jadwal Keberangkatan Kapal
  `<div class="h-full w-full bg-white px-8 py-10 max-md:px-5">
  <header class="w-full">
    <div class="grid grid-cols-12">
      <div class="col-span-3">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d93bc274202e0f7f5aa8273bb0a4d59258631069?placeholderIfAbsent=true&apiKey=e7b6bda3872b4833acaacdbea3b766ee" alt="Port Logo" class="aspect-[2] w-[266px] object-contain" />
      </div>
      <div class="col-span-6 items-center justify-center text-center">
        <h1 class="mt-2 text-5xl leading-none font-extrabold text-black max-md:mt-50 max-md:text-6xl">INFORMASI KEBERANGKATAN KAPAL</h1>
        <h2 class="z-10 mt-6 self-center text-5xl leading-none font-bold max-md:text-4xl">PELABUHAN XXXXX</h2>
      </div>

      <div class="py-2 ml-1 col-span-3">
        <div class="mt-5 flex w-full flex-col items-end pr-8 text-right text-3xl leading-none text-black max-md:mt-10">
          <div class="font-bold">SELASA, 6 MEI 2025</div>
          <div class="flex gap-6">
            <div class="my-auto font-bold">10:30 WIB</div>
            <div class="flex gap-1 font-semibold">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/318f0ee64015bffac602a3dfc840a9f59100c14d?placeholderIfAbsent=true&apiKey=e7b6bda3872b4833acaacdbea3b766ee" alt="Weather" class="aspect-square w-[41px] object-contain" />
              <span class="my-auto">30 °C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section class="mt-7 flex flex-col max-md:mt-6">
    <header class="z-10 mt-10 flex w-full gap-60 self-center bg-sky-500 px-10 py-8 text-4xl font-bold text-white shadow-[0px_15px_15px_rgba(0,0,0,0.25)] max-md:max-w-full max-md:px-5">
      <div class="w-[250px] shrink grow text-center">NAMA KAPAL</div>
      <div class="w-[358px] shrink grow text-center">PELABUHAN TUJUAN</div>
      <div class="w-[386px] shrink grow text-center max-md:max-w-full">WAKTU BERANGKAT</div>
    </header>

    <main class="grid w-full grid-cols-3 gap-5 border-[6px] border-sky-500 bg-white px-9 pt-8 pb-18 text-5xl font-semibold text-sky-700 shadow-[0px_15px_15px_rgba(0,0,0,0.25)] max-md:max-w-full max-md:px-5 max-md:pb-10">
      <!-- Row 1 -->
      <div class="flex items-center gap-3">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9f2ea55a32b41ce782f4e9744a3fbde92f7e262?placeholderIfAbsent=true&apiKey=e7b6bda3872b4833acaacdbea3b766ee" alt="Ship" class="aspect-square w-[66px] object-contain" />
        <span class="border border-blue-300 px-4 py-2">KM CD</span>
      </div>
      <div class="flex items-center justify-center">
        <span class="border border-blue-300 px-10 py-1">MKS</span>
      </div>
      <div class="flex items-center justify-center">
        <span class="border border-blue-300 px-10 py-1">13:00</span>
      </div>
      <div class="col-span-3"><hr class="mt-2 h-0.5 w-full border border-sky-700" /></div>

      <!-- Row 2 -->
      <div class="mt-4 flex items-center gap-3">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9f2ea55a32b41ce782f4e9744a3fbde92f7e262?placeholderIfAbsent=true&apiKey=e7b6bda3872b4833acaacdbea3b766ee" alt="Ship" class="aspect-square w-[66px] object-contain" />
        <span class="border border-blue-300 px-4 py-2">KM CD</span>
      </div>
      <div class="mt-4 flex items-center justify-center">
        <span class="border border-blue-300 px-8 py-2">MKS</span>
      </div>
      <div class="mt-4 flex items-center justify-center">
        <span class="border border-blue-300 px-5 py-2">Mendatang</span>
      </div>
      <div class="col-span-3"><hr class="mt-2 h-0.5 w-full border border-sky-700" /></div>

      <!-- Spacer Lines (jika dibutuhkan untuk keperluan desain) -->
      <div class="col-span-3"><hr class="mt-16 h-0.5 w-full border border-sky-700" /></div>
      <div class="col-span-3"><hr class="mt-16 h-0.5 w-full border border-sky-700" /></div>
      <div class="col-span-3"><hr class="mt-16 h-0.5 w-full border border-sky-700" /></div>
    </main>
  </section>
</div>
`,

  // Slide 2: Wisata Terdekat
  `<!DOCTYPE html>
<html lang="en">
<head>
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
</head>

<div class="w-full h-full bg-white flex flex-col items-center overflow-auto">
  <!-- Hero Section -->
  <div class="relative w-full text-center text-white font-bold text-6xl leading-8 px-16 pt-28 pb-72 max-md:pt-24 max-md:pb-28 max-md:text-4xl max-md:leading-6">
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/534f20af45b2af445056cffba5914e2ea8599ea4?placeholderIfAbsent=true&apiKey=dd3e672cb82b4c0a86418d65534cfeeb"
      alt="Banyuwangi landscape"
      class="absolute inset-0 w-full h-full object-cover"
    />
  <div class="relative z-10 text-[60px] leading-[35px] font-bold">
    EXPLORE<br/><br/>BANYUWANGI
  </div>
</div>

  <!-- Grid Wisata -->
  <div class="z-10 w-full max-w-[1449px] px-10 -mt-60">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <!-- Destination Card 1 -->
      <div class="flex flex-col px-6 pt-8 pb-10 bg-white rounded-[999px] shadow-[25px_0px_20px_rgba(0,0,0,0.35)] text-center text-black">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb96017609b1870405c8f65f57ba25d33fee5a2c?placeholderIfAbsent=true&apiKey=e7b6bda3872b4833acaacdbea3b766ee"
          alt="De Djawatan Forest"
          class="w-full rounded-full aspect-square object-cover"
        />
        <h2 class="mt-5 text-[35px] leading-12 font-bold">De Djawatan Forest</h2>
        <div class="flex items-center justify-center mt-15 gap-2 font-medium text-lg">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/abe70389c63208ad050b3aa41075cfd93a60c2d4?placeholderIfAbsent=true&apiKey=e7b6bda3872b4833acaacdbea3b766ee"
            alt="Distance icon"
            class="w-32px h-31px"
          />
          <p class="text-[28px] leading-[30px] font-medium">41 km</p>
        </div>
        <p class="mt-4 text-[28px] leading-[30px] font-normal">
          Hutan trembesi yang indah seperti di film Lord of the Rings.
        </p>
      </div>

      <!-- Destination Card 2 -->
      <div class="flex flex-col px-6 pt-8 pb-10 bg-white rounded-[999px] shadow-[25px_0px_20px_rgba(0,0,0,0.35)] text-center text-black">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f45d39d80a748bb8b670ab9bff15b7d29f166c61?placeholderIfAbsent=true&apiKey=e7b6bda3872b4833acaacdbea3b766ee"
          alt="Taman Gandrung Terakota"
          class="w-full rounded-full aspect-square object-cover"
        />
        <h2 class="mt-5 text-[35px] leading-12 font-bold">Taman Gandrung Terakota</h2>
        <div class="flex items-center justify-center mt-5 gap-2 font-medium text-lg">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/abe70389c63208ad050b3aa41075cfd93a60c2d4?placeholderIfAbsent=true&apiKey=e7b6bda3872b4833acaacdbea3b766ee"
            alt="Distance icon"
            class="w-32px h-31px"
          />
          <p class="text-[28px] leading-[30px] font-medium">26,7 km</p>
        </div>
        <p class="mt-4 text-[28px] leading-[30px] font-normal">
          Taman patung penari Gandrung di kaki Gunung Ijen.
        </p>
      </div>

      <!-- Destination Card 3 -->
      <div class="flex flex-col px-6 pt-8 pb-10 bg-white rounded-[999px] shadow-[25px_0px_20px_rgba(0,0,0,0.35)] text-center text-black">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d93fb96ce246a06425c5138366039b88d08b55?placeholderIfAbsent=true&apiKey=e7b6bda3872b4833acaacdbea3b766ee"
          alt="Red Island Beach"
          class="w-full rounded-full aspect-square object-cover"
        />
        <h2 class="mt-5 text-[35px] leading-12 font-bold">Red Island Beach</h2>
        <div class="flex items-center justify-center mt-19 gap-2 font-medium text-lg">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/abe70389c63208ad050b3aa41075cfd93a60c2d4?placeholderIfAbsent=true&apiKey=e7b6bda3872b4833acaacdbea3b766ee"
            alt="Distance icon"
            class="w-32px h-31px"
          />
          <p class="text-[28px] leading-[30px] font-medium">79,7 km</p>
        </div>
        <p class="mt-4 text-[28px] leading-[30px] font-normal">
          Pantai pasir putih dengan pulau kecil dan sunset indah.
        </p>
      </div>

      <!-- Destination Card 4 -->
      <div class="flex flex-col px-6 pt-8 pb-10 bg-white rounded-[999px] shadow-[25px_0px_20px_rgba(0,0,0,0.35)] text-center text-black">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d04ff75dd437f74af83a9b9afa71f37fd11772fb?placeholderIfAbsent=true&apiKey=e7b6bda3872b4833acaacdbea3b766ee"
          alt="Ijen Crater"
          class="w-full rounded-full aspect-square object-cover"
        />
        <h2 class="mt-5 text-[35px] leading-12 font-bold">Ijen Crater</h2>
        <div class="flex items-center justify-center mt-30 gap-2 font-medium text-lg">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/abe70389c63208ad050b3aa41075cfd93a60c2d4?placeholderIfAbsent=true&apiKey=e7b6bda3872b4833acaacdbea3b766ee"
            alt="Distance icon"
            class="w-32px h-31px"
          />
          <p class="text-[28px] leading-[30px] font-medium">44,4 km</p>
        </div>
        <p class="mt-4 text-[28px] leading-[30px] font-normal">
        Gunung berapi aktif dengan danau asam dan blue fire.
        </p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-[#669592] w-full max-w-[1449px] px-4 py-4 mt-12 text-white text-center text-[30px] font-bold leading-none">
    It's the perfect time to discover Banyuwangi's hidden gems
  </footer>
</div>
`,

  // Slide 3: Rekomendasi Hotel
  `<div class="relative flex flex-col items-center px-20 pt-16 pb-6 min-h-[1080px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 overflow-hidden">
  <!-- Background Image -->
  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a82aa71dac0a7ed7dc49f38bca1fa7ce6c701?placeholderIfAbsent=true&apiKey=e7b6bda3872b4833acaacdbea3b766ee"
       class="object-cover absolute inset-0 w-full h-full"
       alt="Hotel background" />

  <div class="relative flex flex-col w-full max-w-[1467px] mx-auto px-4">
    <!-- HotelHeader -->
    <header class="flex flex-wrap gap-10 self-center ml-3.5 w-full font-extrabold text-white max-w-[1338px] max-md:max-w-full">
      <h1 class="grow my-auto text-5xl mt-2 leading-none ml-12 max-md:max-w-full max-md:text-4xl">
        REKOMENDASI HOTEL
      </h1>
      <div class="shrink-0 border-white border-solid border-[3px] h-[148px] w-[3px] -translate-y-10"></div>
      <p class="grow shrink self-start mt-0 text-3xl leading-10 w-[648px] max-md:max-w-full">
        Menginap Nyaman Dekat Pelabuhan? Ini Rekomendasinya!
      </p>
    </header>

         <!-- Hotel A Card -->
        <article class="pr-5 mt-12 bg-white bg-opacity-85 rounded-[30px] max-md:mt-10 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col place-items-center p-4">
            <!-- Image -->
            <div class="w-[38%] max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f2c218b2a8d387009b903c89ffe3e5a32548077?placeholderIfAbsent=true&apiKey=dd3e672cb82b4c0a86418d65534cfeeb"
                class="object-contain grow w-full aspect-[1.73] rounded-[30px] max-md:mt-1.5 max-md:max-w-full"
                alt="Hotel A"
              />
            </div>
            <!-- Content -->
            <div class="ml-5 w-[62%] max-md:ml-0 max-md:w-full">
              <div class="w-full text-black max-md:max-w-full">
                <div class="flex flex-col px-5 max-md:px-5 max-md:max-w-full">
                  <h2 class="self-start text-5xl font-extrabold leading-none max-md:text-4xl">
                    Hotel A
                  </h2>
                  <p class="mt-5 text-3xl font-medium leading-8 max-md:max-w-full">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam provident delectus ab repudiandae aliquam ducimus, quod facilis iure dolorum fugiat. Voluptate labore esse a molestias. Adipisci nesciunt nihil rerum voluptatem!
                  </p>
                </div>
                <div class="flex flex-wrap gap-5 justify-between mt-5 w-full text-4xl font-medium leading-none max-md:max-w-full">
                  <div class="flex">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/946ca48b78cac48a51ea922216103f524805d307?placeholderIfAbsent=true&apiKey=dd3e672cb82b4c0a86418d65534cfeeb"
                      class="object-contain shrink-0 aspect-square w-[43px]"
                      alt="Distance icon"
                    />
                    <div class="my-auto">2,3 km</div>
                  </div>
                  <div class="self-start mt-3">IDR 500.000+</div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Hotel B Card -->
        <article class="pr-1.5 pl-5 mt-6 bg-white bg-opacity-85 rounded-[30px] max-md:pl-5 max-md:mr-2.5 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col place-items-center p-4">
            <!-- Content -->
            <div class="w-[61%] max-md:ml-0 max-md:w-full">
              <div class="w-full text-black max-md:max-w-full">
                <div class="flex flex-col max-md:px-5 max-md:max-w-full">
                  <h2 class="self-start text-5xl font-extrabold leading-none max-md:mr-2.5 max-md:text-4xl">
                    Hotel B
                  </h2>
                  <p class="mt-3.5 mr-5 text-3xl font-medium leading-8 max-md:mr-2.5 max-md:max-w-full">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam provident delectus ab repudiandae aliquam ducimus, quod facilis iure dolorum fugiat. Voluptate labore esse a molestias. Adipisci nesciunt nihil rerum voluptatem!
                  </p>
                </div>
                <div class="flex flex-wrap gap-5 justify-between mt-3 w-full text-4xl font-medium leading-none max-md:max-w-full">
                  <div class="my-auto">IDR 500.000+</div>
                  <div class="flex gap-1">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0019871ea3b45981689636343edbd5b51158ee87?placeholderIfAbsent=true&apiKey=dd3e672cb82b4c0a86418d65534cfeeb"
                      class="object-contain shrink-0 aspect-square w-[43px]"
                      alt="Distance icon"
                    />
                    <div class="my-auto">2,3 km</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Image -->
            <div class="ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d26274e2cc5fa4ca9d3a7b4b6f4affd2005d61e9?placeholderIfAbsent=true&apiKey=dd3e672cb82b4c0a86418d65534cfeeb"
                class="object-contain grow w-full aspect-[1.73] rounded-[30px] max-md:mt-3 max-md:max-w-full"
                alt="Hotel B"
              />
            </div>
          </div>
        </article>

        <!-- Footer -->
        <footer class="bg-[#6A5D3B] w-full max-w-[1449px] px-4 py-4 mt-12 text-white text-center text-[30px] font-bold leading-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </footer>
      </div>
    </section>
  </body>
</html>
`
];


let currentSlide = 0;
const slideContainer = document.getElementById("slides");

function showSlide() {
  slideContainer.innerHTML = slides[currentSlide];
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

// Tampilkan slide pertama saat dimuat
showSlide();

// Ganti slide setiap 5 menit (300.000 ms)
setInterval(nextSlide, 8000);
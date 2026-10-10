const universities = [
  {
    name: "Seoul National University",
    city: "Seoul",
    track: "Type A",
    departments: ["Engineering", "Business", "Sciences", "Humanities"],
    url: "https://en.snu.ac.kr/",
    description: "A comprehensive research university with a wide range of academic fields."
  },
  {
    name: "Korea University",
    city: "Seoul",
    track: "Type A",
    departments: ["Business", "Engineering", "Law", "Sciences"],
    url: "https://www.korea.edu/",
    description: "Explore programs in business, engineering, law and the sciences."
  },
  {
    name: "Yonsei University",
    city: "Seoul",
    track: "Type A",
    departments: ["Medicine", "Business", "Engineering", "Humanities"],
    url: "https://www.yonsei.ac.kr/",
    description: "A major research institution offering many academic disciplines."
  },
  {
    name: "Hanyang University",
    city: "Seoul",
    track: "Type A",
    departments: ["Engineering", "Technology", "Business"],
    url: "https://www.hanyang.ac.kr/",
    description: "Explore technology, engineering and professional study options."
  },
  {
    name: "Kyung Hee University",
    city: "Seoul",
    track: "Type A",
    departments: ["Humanities", "Medicine", "Business", "Sciences"],
    url: "https://www.khu.ac.kr/",
    description: "A comprehensive university with diverse academic programs."
  },
  {
    name: "Sungkyunkwan University",
    city: "Seoul / Suwon",
    track: "Type A",
    departments: ["Engineering", "Business", "Sciences"],
    url: "https://www.skku.edu/",
    description: "Research and study opportunities across multiple disciplines."
  },
  {
    name: "Ewha Womans University",
    city: "Seoul",
    track: "Type A",
    departments: ["Social Sciences", "Engineering", "Business"],
    url: "https://www.ewha.ac.kr/",
    description: "A comprehensive women's university with varied academic fields."
  },
  {
    name: "Inha University",
    city: "Incheon",
    track: "Type A",
    departments: ["Engineering", "Logistics", "Business", "IT"],
    url: "https://eng.inha.ac.kr/",
    description: "Explore engineering, logistics, business and computing."
  },
  {
    name: "Incheon National University",
    city: "Incheon",
    track: "Type A",
    departments: ["Engineering", "Business", "Sciences"],
    url: "https://www.inu.ac.kr/",
    description: "A national university with a broad academic portfolio."
  },
  {
    name: "Pusan National University",
    city: "Busan",
    track: "Type B",
    departments: ["Engineering", "Sciences", "Business", "Humanities"],
    url: "https://www.pusan.ac.kr/eng/Main.do",
    description: "A major national university in Busan."
  },
  {
    name: "Pukyong National University",
    city: "Busan",
    track: "Type B",
    departments: ["Marine Science", "Engineering", "Fisheries"],
    url: "https://www.pknu.ac.kr/eng",
    description: "Explore marine sciences, fisheries and engineering."
  },
  {
    name: "Dong-A University",
    city: "Busan",
    track: "Type B",
    departments: ["Business", "Law", "Engineering", "Medicine"],
    url: "https://english.donga.ac.kr/",
    description: "A private university offering diverse academic programs."
  },
  {
    name: "KAIST",
    city: "Daejeon",
    track: "Verify",
    departments: ["Engineering", "Computer Science", "AI", "Sciences"],
    url: "https://www.kaist.ac.kr/en/",
    description: "A science and technology institution. Verify eligibility for your specific GKS program."
  },
  {
    name: "Chungnam National University",
    city: "Daejeon",
    track: "Type B",
    departments: ["Engineering", "Sciences", "Agriculture", "Medicine"],
    url: "https://plus.cnu.ac.kr/html/en/",
    description: "A national university offering a wide range of study fields."
  },
  {
    name: "Hanbat National University",
    city: "Daejeon",
    track: "Verify",
    departments: ["Engineering", "IT", "Business", "Technology"],
    url: "https://www.hanbat.ac.kr/eng/",
    description: "Explore engineering and technology. Confirm current GKS participation."
  },
  {
    name: "GIST",
    city: "Gwangju",
    track: "Verify",
    departments: ["Engineering", "AI", "Physics", "Sciences"],
    url: "https://www.gist.ac.kr/en/",
    description: "A research institution focused on science and technology. Check the current GKS list."
  },
  {
    name: "Chonnam National University",
    city: "Gwangju",
    track: "Type B",
    departments: ["Agriculture", "Engineering", "Sciences", "Humanities"],
    url: "https://www.jnu.ac.kr/",
    description: "A national university with a broad range of academic fields."
  },
  {
    name: "Kyungpook National University",
    city: "Daegu",
    track: "Type B",
    departments: ["Engineering", "Medicine", "Sciences", "Agriculture"],
    url: "https://en.knu.ac.kr/",
    description: "A major national university in Daegu."
  },
  {
    name: "Yeungnam University",
    city: "Gyeongsan",
    track: "Type B",
    departments: ["Engineering", "Business", "Sciences", "Humanities"],
    url: "https://www.yu.ac.kr/english/",
    description: "Explore programs across science, engineering and business."
  },
  {
    name: "Jeonbuk National University",
    city: "Jeonju",
    track: "Type B",
    departments: ["Engineering", "Agriculture", "Sciences", "Medicine"],
    url: "https://www.jbnu.ac.kr/eng/",
    description: "A national university with varied research and academic programs."
  },
  {
    name: "Kangwon National University",
    city: "Chuncheon",
    track: "Type B",
    departments: ["Agriculture", "Engineering", "Sciences", "Medicine"],
    url: "https://www.kangwon.ac.kr/english/",
    description: "Explore science, agriculture and other academic disciplines."
  },
  {
    name: "Jeju National University",
    city: "Jeju",
    track: "Type B",
    departments: ["Marine Science", "Tourism", "Engineering", "Sciences"],
    url: "https://www.jejunu.ac.kr/eng/",
    description: "A national university located on Jeju Island."
  },
  {
    name: "University of Ulsan",
    city: "Ulsan",
    track: "Type B",
    departments: ["Engineering", "Business", "Medicine", "Technology"],
    url: "https://www.ulsan.ac.kr/eng/",
    description: "Explore engineering, technology and professional study options."
  },
  {
    name: "POSTECH",
    city: "Pohang",
    track: "Verify",
    departments: ["Engineering", "Physics", "Chemistry", "AI"],
    url: "https://www.postech.ac.kr/eng/",
    description: "A research-focused science and technology institution. Check GKS eligibility for your year."
  },
  {
    name: "UNIST",
    city: "Ulsan",
    track: "Verify",
    departments: ["Engineering", "AI", "Energy", "Sciences"],
    url: "https://www.unist.ac.kr/",
    description: "A science and engineering institution. Verify the applicable scholarship route."
  }
];

const searchInput = document.getElementById("searchInput");
const cityFilter = document.getElementById("cityFilter");
const trackFilter = document.getElementById("trackFilter");
const universityGrid = document.getElementById("universityGrid");
const resultCount = document.getElementById("resultCount");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

// Build the city filter from the directory.
const cities = [...new Set(universities.map(u => u.city))].sort();

cities.forEach(city => {
  const option = document.createElement("option");
  option.value = city;
  option.textContent = city;
  cityFilter.appendChild(option);
});

function renderUniversities() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCity = cityFilter.value;
  const selectedTrack = trackFilter.value;

  const filtered = universities.filter(university => {
    const searchableText = [
      university.name,
      university.city,
      university.track,
      university.description,
      ...university.departments
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(query);
    const matchesCity =
      !selectedCity || university.city === selectedCity;
    const matchesTrack =
      !selectedTrack || university.track === selectedTrack;

    return matchesSearch && matchesCity && matchesTrack;
  });

  resultCount.textContent =
    `Showing ${filtered.length} of ${universities.length} directory entries`;

  if (filtered.length === 0) {
    universityGrid.innerHTML = `
      <div class="empty-state">
        <h3>No universities found</h3>
        <p>Try a different search or reset your filters.</p>
      </div>`;
    return;
  }

  universityGrid.innerHTML = filtered.map(university => {
    const trackClass =
      university.track === "Type B" ? "type-b" :
      university.track === "Verify" ? "verify" : "";

    return `
      <article class="uni-card">
        <span class="tag ${trackClass}">
          ${escapeHTML(university.track)}
        </span>

        <h3>${escapeHTML(university.name)}</h3>

        <div class="uni-location">
          📍 ${escapeHTML(university.city)}
        </div>

        <p class="uni-description">
          ${escapeHTML(university.description)}
        </p>

        <div class="subject-list">
          ${university.departments.map(department => `
            <span class="subject">${escapeHTML(department)}</span>
          `).join("")}
        </div>

        <a class="uni-link"
           href="${escapeHTML(university.url)}"
           target="_blank"
           rel="noopener noreferrer">
          Official University Website ↗
        </a>
      </article>`;
  }).join("");
}

searchInput.addEventListener("input", renderUniversities);
cityFilter.addEventListener("change", renderUniversities);
trackFilter.addEventListener("change", renderUniversities);

document.getElementById("resetButton").addEventListener("click", () => {
  searchInput.value = "";
  cityFilter.value = "";
  trackFilter.value = "";
  renderUniversities();
});

document.getElementById("year").textContent = new Date().getFullYear();

renderUniversities();
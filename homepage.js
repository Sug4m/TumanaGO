// navbar
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

// search
const input = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");

input.addEventListener("input", () => {
  clearBtn.style.display = input.value ? "block" : "none";
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  clearBtn.style.display = "none";
  input.focus();
});

// search interactive
const searchInput = document.getElementById('searchInput');

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();

    //Emergency Sections
    if (query === 'emergency' || query === 'Emergency' || query === 'hotlines') {
        window.location.href = 'emergency.html#emergency-section'; 
    } 
    else if (query === 'b.p.s.o' || query === 'bpso' || query === 'bps' || query === 'B.P.S.O') {
        window.location.href = 'emergency.html#bpso-section'; 
    } 
    else if (query === 'vawc') {
        window.location.href = 'emergency.html#vawc-section';
    }
    else if (query === 'bert') {
        window.location.href = 'emergency.html#bert-section';
    }
    else if (query === 'bacc') {
        window.location.href = 'emergency.html#bacc-section';
    }
    else if (query === 'Marikina City Police' || query === 'marikina city police' || query === 'mcp') {
        window.location.href = 'emergency.html#mcp-section';
    }
    else if (query === 'Marikina Rescue 161' || query === '161' || query === 'marikina rescue 161') {
        window.location.href = 'emergency.html#mr161-section';
    }
    else if (query === 'Philippine Red Cross' || query === 'prc' || query === 'Red Cross Marikina' || query === 'PRC Marikina') {
        window.location.href = 'emergency.html#prc-section';
    }

    //Map Section
    else if (query === 'map' || query === 'Map'){
      window.location.href = 'map.html#map-section'
    }

    //History Section
    else if (query === 'history' || query === 'History'){
      window.location.href = 'history.html#history-section'
    }

    //About-us Section
    else if (query === 'About us' || query === 'about us'){
      window.location.href = 'aboutus.html#aboutus-section'
    }

    //Document Section
    else if (query === 'Document' || query === 'document') {
        window.location.href = 'document.html#main_content';
    }
    else if (query === 'brgy clearance' || query === 'BRGY Clearance' || query === 'clearance') {
        window.location.href = 'document.html#brgy_clearance';
    } 
    else if (query === 'brgy id' || query === 'BRGY ID') {
        window.location.href = 'document.html#brgy_ID';
    } 
    else if (query === 'business clearance') {
        window.location.href = 'document.html#business_clearance';
    } 
    else if (query === 'cedula' || query === 'community tax certificate' || query === 'Cedula') {
        window.location.href = 'document.html#cedula';
    }
    else if (query === 'Certificate of Indigency' || query === 'indigency' || query === 'Indigency') {
        window.location.href = 'document.html#indigency';
    } 
    else if (query === 'certificate of residency' || query === 'Residency' || query === 'residency') {
        window.location.href = 'document.html#residency';
    }
    else if (query === 'seeker' || query === 'job seeker' || query === 'job') {
        window.location.href = 'document.html#job_seeker';
    }
}

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
})


// announement
const toggleBtn = document.getElementById("toggleAnnouncement");
const summary = document.getElementById("announcementSummary");
const details = document.getElementById("announcementDetails");

toggleBtn.addEventListener("click", function() {
  if (details.style.display === "none") {
    // Show details, hide summary
    summary.style.display = "none";
    details.style.display = "block";
    this.textContent = "Read Less";
  } else {
    // Show summary, hide details
    summary.style.display = "block";
    details.style.display = "none";
    this.textContent = "Read More";
  }
});



const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');

navItems.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    // همه تب‌ها رو غیرفعال کن
    navItems.forEach(i => i.classList.remove('active'));
    this.classList.add('active');

    // همه ویوها رو مخفی کن
    views.forEach(view => view.classList.add('hidden'));

    // ویوی موردنظر رو نمایش بده
    const targetId = this.getAttribute('data-target');
    const targetView = document.getElementById(targetId);
    if (targetView) {
      targetView.classList.remove('hidden');
    }
  });
});

  function toggleMenu() {
    const menu = document.getElementById("side-menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  }
// ########################################################################################
let testBootstrap = document.createElement('link');
testBootstrap.rel = "stylesheet";
testBootstrap.href = "/assets/css/bootstrap.min.css";
testBootstrap.onerror = () => {
  document.write('<link rel="stylesheet" href="/assets/css/bootstrap.min.css">');
};
document.head.appendChild(testBootstrap);
// #################################################################################################
let testTailwind = document.createElement('link');
testTailwind.rel = "stylesheet";
testTailwind.href = "/assets/css/tailwind.min.css";
testTailwind.onerror = () => {
  document.write('<link rel="stylesheet" href="/assets/css/tailwind.min.css">');
};
document.head.appendChild(testTailwind);
// ######################################################################################################
if (typeof jQuery === 'undefined') {
  document.write('<script src="/assets/js/jquery.min.js"><\/script>');
}
// #########################################################################################################
if (typeof bootstrap === 'undefined') {
  document.write('<script src="/assets/js/bootstrap.bundle.min.js"><\/script>');
}
// ############################################################################################################
if (typeof Chart === 'undefined') {
  document.write('<script src="/assets/js/chart.min.js"><\/script>');
}
// #############################################################################################################

function toggleMenu() {
  const menu = document.getElementById("side-menu2");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
// 📊 Pie Chart: درصد عملکرد دروس
const ctxPie = document.getElementById('subjectPieChart').getContext('2d');


const subjectPieChart = new Chart(ctxPie, {
type: 'pie',
data: {
labels: ['ریاضی', 'علوم', 'فارسی', 'هدیه‌ها', 'مطالعات'],
datasets: [{
  data: [30, 25, 20, 15, 10],
  backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4caf50', '#9c27b0'],
}]
},
options: {
responsive: true,
plugins: {
  legend: {
    position: 'bottom',
    labels: {
      color: 'white'  // ✅ رنگ سفید برای فونت legend
    }
  }
}
}
});

// 📈 Line Chart: روند پیشرفت در ریاضی
const ctxLine = document.getElementById('mathProgressChart').getContext('2d');
const mathProgressChart = new Chart(ctxLine, {
type: 'line',
data: {
labels: ['مهر', 'آبان', 'آذر', 'دی', 'بهمن'],
datasets: [{
  label: 'نمره ریاضی',
  data: [12, 14, 16, 15, 18],
  borderColor: '#f39c12', // ✅ نارنجی تیره‌تر به‌جای سبز
  backgroundColor: 'rgba(243, 156, 18, 0.3)',
  tension: 0.3,
  fill: true,
  pointRadius: 5
}]
},
options: {
responsive: true,
scales: {
  y: {
    beginAtZero: true,
    max: 20,
    ticks: {
      color: 'white'  // ✅ سفید کردن محور Y
    }
  },
  x: {
    ticks: {
      color: 'white'  // ✅ سفید کردن محور X
    }
  }
},
plugins: {
  legend: {
    labels: {
      color: 'white'  // ✅ سفید برای عنوان legend
    }
  }
}
}
});
// #############################################################################
function toggleMenu() {
  const menu = document.getElementById("side-menu2");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
// #################################################################################
function toggleMenu() {
  const menu = document.getElementById("side-menu2");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

$(document).ready(function () {
  $('#attendanceTable').DataTable({
    responsive: true,
    language: {
      search: "جستجو:",
      lengthMenu: "نمایش _MENU_ ردیف",
      info: "نمایش _START_ تا _END_ از _TOTAL_",
      paginate: {
        first: "ابتدا",
        last: "انتها",
        next: "بعدی",
        previous: "قبلی"
      },
      zeroRecords: "موردی یافت نشد"
    }
  });
});
// ###################################################################################
function toggleMenu() {
  const menu = document.getElementById("side-menu2");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function openModal() {
  document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
function openAsk() {
  document.getElementById('modalAsk').style.display = 'flex';
}
function closeAsk() {
  document.getElementById('modalAsk').style.display = 'none';
}
/* ################################################################# */
function toggleMenu() {
  const menu = document.getElementById("side-menu2");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
// #############################################################################
function toggleMenu() {
  const menu = document.getElementById("side-menu2");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

$(document).ready(function() {
  $('#datatablesSimple').DataTable({
    responsive: true,
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/fa.json"
    }
  });
});
// ########################################################################
function toggleMenu() {
  const menu = document.getElementById("side-menu2");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

$(document).ready(function() {
  $('#datatablesSimple').DataTable({
    responsive: true,
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/fa.json"
    }
  });
});
// ########################################################################
function toggleMenu() {
  const menu = document.getElementById("side-menu2");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

$(document).ready(function() {
  $('#datatablesSimple').DataTable({
    responsive: true,
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/fa.json"
    }
  });
});
// ######################################################################

function toggleMenu() {
  const menu = document.getElementById("side-menu2");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function showSection(section) {
  const contentBox = document.getElementById('profile-content');
  contentBox.innerHTML = '';

  if (section === 'contact') {
    contentBox.innerHTML = `
      <h3>اطلاعات تماس</h3>
      <ul>
        <li>📱 شماره موبایل: 09123456789</li>
        <li>📧 ایمیل: ali.rezaei@gmail.com</li>
        <li>🏠 آدرس: تهران، خیابان انقلاب، پلاک ۱۲۳</li>
        <li>👨‍👩‍👧‍👦 ولی: محمد رضایی (پدر)</li>
      </ul>
    `;
  } else if (section === 'classes') {
    contentBox.innerHTML = `
      <h3>کلاس‌های من</h3>
      <ul>
        <li>📘 ریاضی - آقای احمدی</li>
        <li>🔬 علوم - خانم موسوی</li>
        <li>📖 فارسی - آقای مرادی</li>
        <li>🌍 مطالعات - خانم رضایی</li>
        <li>🕌 هدیه‌ها - آقای کاظمی</li>
      </ul>
    `;
  } else if (section === 'attendance') {
    contentBox.innerHTML = `
      <h3>وضعیت حضور</h3>
      <ul>
        <li>✅ حضور: 45 روز</li>
        <li>❌ غیبت: 3 روز</li>
        <li>⏰ تأخیر: 2 روز</li>
        <li>📅 آخرین حضور: 1 تیر 1403</li>
      </ul>
    `;
  } else if (section === 'messages') {
    contentBox.innerHTML = `
      <h3>پیام‌های اخیر</h3>
      <ul>
        <li>📩 [مدیر] برگزاری آزمون ریاضی در تاریخ 5 تیر</li>
        <li>📩 [معلم فارسی] تمرین صفحه 45 فراموش نشود</li>
        <li>📩 [مدیر] تعطیلی پنجشنبه به دلیل گردهمایی</li>
      </ul>
    `;
  } else if (section === 'status') {
    contentBox.innerHTML = `
      <h3>وضعیت درسی</h3>
      <ul>
        <li>📊 معدل فعلی: <strong>17.8</strong></li>
        <li>🥇 بهترین درس: ریاضی (نمره: 19.5)</li>
        <li>📉 نیاز به بهبود: مطالعات (نمره: 14)</li>
        <li>🧠 پیشرفت کلی: مناسب</li>
      </ul>
    `;
  } else if (section === 'charts') {
    contentBox.innerHTML = `
      <div id="charts">
        <h3 class="chart-title">نمودار عملکرد دروس - ماه جاری</h3>
        <canvas id="subjectPieChart"></canvas>
        <h3 class="chart-title">روند پیشرفت درس ریاضی</h3>
        <canvas id="mathProgressChart"></canvas>
      </div>
    `;

    setTimeout(() => {
      const ctxPie = document.getElementById('subjectPieChart').getContext('2d');
      new Chart(ctxPie, {
        type: 'pie',
        data: {
          labels: ['ریاضی', 'علوم', 'فارسی', 'هدیه‌ها', 'مطالعات'],
          datasets: [{
            data: [30, 25, 20, 15, 10],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4caf50', '#9c27b0'],
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: 'white' }
            }
          }
        }
      });

      const ctxLine = document.getElementById('mathProgressChart').getContext('2d');
      new Chart(ctxLine, {
        type: 'line',
        data: {
          labels: ['مهر', 'آبان', 'آذر', 'دی', 'بهمن'],
          datasets: [{
            label: 'نمره ریاضی',
            data: [12, 14, 16, 15, 18],
            borderColor: '#f39c12',
            backgroundColor: 'rgba(243, 156, 18, 0.3)',
            tension: 0.3,
            fill: true,
            pointRadius: 5
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              max: 20,
              ticks: { color: 'white' }
            },
            x: {
              ticks: { color: 'white' }
            }
          },
          plugins: {
            legend: {
              labels: { color: 'white' }
            }
          }
        }
      });
    }, 100);
  }
}
/* ######################################################################## */
function toggleMenu() {
  const menu = document.getElementById("side-menu2");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
// ##############################################################################

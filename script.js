// استدعاء الأرقام المخزنة مسبقاً أو تصفيرها
let istighfarCount = localStorage.getItem('vip_istighfar') ? parseInt(localStorage.getItem('vip_istighfar')) : 0;
let praiseCount = localStorage.getItem('vip_praise') ? parseInt(localStorage.getItem('vip_praise')) : 0;

// عرض القيم على الشاشة فوراً عند الفتح
document.getElementById('istighfar-display').innerText = istighfarCount;
document.getElementById('praise-display').innerText = praiseCount;

// دالة الضغط وزيادة الأرقام
function incrementCounter(type) {
    if (type === 'istighfar') {
        istighfarCount++;
        document.getElementById('istighfar-display').innerText = istighfarCount;
        localStorage.setItem('vip_istighfar', istighfarCount);
    } else if (type === 'praise') {
        praiseCount++;
        document.getElementById('praise-display').innerText = praiseCount;
        localStorage.setItem('vip_praise', praiseCount);
    }
}

// دالة تصفير العداد المحدد
function resetCounter(type) {
    if (confirm("هل تود حقاً تصفير هذا العداد والبدء مجدداً؟")) {
        if (type === 'istighfar') {
            istighfarCount = 0;
            document.getElementById('istighfar-display').innerText = istighfarCount;
            localStorage.setItem('vip_istighfar', istighfarCount);
        } else if (type === 'praise') {
            praiseCount = 0;
            document.getElementById('praise-display').innerText = praiseCount;
            localStorage.setItem('vip_praise', praiseCount);
        }
    }
}
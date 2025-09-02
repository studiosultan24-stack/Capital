let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let a4 = document.getElementById('a4');
let errorMsg = document.getElementById('error-message');

// منع المستخدم من التعديل
a3.readOnly = true;
a4.readOnly = true;

// دالة لحساب النتيجة
function calculateResult() {
    errorMsg.style.display = "none"; // إخفاء الرسالة في البداية
    
    if (a1.value && a2.value) {
        let total = parseFloat(a1.value);
        let obtained = parseFloat(a2.value);

        // الشرط: لو a2 أكبر من a1
        if (obtained > total) {
            errorMsg.textContent = " من فضلك أدخل قيم صحيحة: لا يمكن أن تكون الدرجة أكبر من المجموع الكلي.⚠️";
            errorMsg.style.display = "block";
            a2.value = "";
            a3.value = "";
            a4.value = "";
            return;
        }

        let result = (obtained * 100) / total;
        a3.value = result.toFixed(2);

        // التقدير حسب النتيجة
        if (result >= 85) {
            a4.value = 'ممتاز';
        } else if (result >= 75) {
            a4.value = 'جيد جدا';
        } else if (result >= 70) {
            a4.value = 'جيد';
        } else if (result >= 55) {
            a4.value = 'مقبول';
        } else if (result >= 50) {
            a4.value =" ناجح بالعافية😂";
        } else {
            a4.value = 'ساقط';
        }
    } else {
        a3.value = '';
        a4.value = '';
    }
}

// تشغيل الحساب بمجرد الكتابة أو اللصق في a1 أو a2
a1.addEventListener('input', calculateResult);
a2.addEventListener('input', calculateResult);

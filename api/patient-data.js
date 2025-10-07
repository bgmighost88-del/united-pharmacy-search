// api/patient-data.js
// يجب أن تكون هذه البيانات هي المصفوفات التي استخرجتها من ملف index.html
// وتأكد من أن أسماء المتغيرات (IDS, NAMES, MOBILES) مطابقة لملفك الأصلي

const IDS = ['هنا', 'تضع', 'أرقام', 'هوية', 'المرضى'];
const NAMES = ['محمد', 'أحمد', 'خالد', 'فاطمة'];
const MOBILES = ['01011111111', '01122222222', '01233333333', '01544444444'];

export default (request, response) => {
    // 1. استلام رقم الهوية
    const patientId = request.query.id;

    if (!patientId) {
        return response.status(400).json({ status: 'error', message: 'رقم الهوية مفقود.' });
    }

    // 2. البحث عن رقم الهوية في مصفوفة IDS
    const index = IDS.indexOf(patientId);

    // 3. إرجاع النتيجة
    if (index !== -1) {
        const patientData = {
            name: NAMES[index],
            id: IDS[index],
            mobile: MOBILES[index]
        };
        // تم الإيجاد، وإرجاع بيانات المريض فقط
        response.status(200).json({ status: 'success', data: patientData });
    } else {
        // لم يتم الإيجاد
        response.status(200).json({ status: 'not_found', message: 'رقم الهوية غير موجود.' });
    }
};

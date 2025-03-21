// الحل العادي
function invert(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * -1;
  }
  return array;
}

// انشاء مصفوفه جديده
function invert(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * -1);
  }
  return result;
}

console.log(invert([1, 2, 3, 4, 5]));

// عن طريق map
const cinvert = (array) => array.map((num) => num * -1); //1

function invert(array) {
  return array.map((x) => (x === 0 ? x : -x));
} //2

// الطرح من 0
function convertToNegative(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0 - arr[i];
  }
  return arr;
}

// اختبار الدالة
console.log(convertToNegative([1, 2, 3, 4, 5])); // الإخراج: [-1, -2, -3, -4, -5]

// علامة الاشارة
function convertToNegative(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = -arr[i];
  }
  return arr;
}

// اختبار الدالة
console.log(convertToNegative([1, 2, 3, 4, 5])); // الإخراج: [-1, -2, -3, -4, -5]

// استخدام دالة Math.abs() مع تعديل الإشارة

function convertToNegative(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = -Math.abs(arr[i]);
  }
  return arr;
}

// اختبار الدالة
console.log(convertToNegative([1, 2, 3, 4, 5])); // الإخراج: [-1, -2, -3, -4, -5]

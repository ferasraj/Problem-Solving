let inventory = []; // لتخزين المنتجات

// دالة للبحث عن المنتج في المخزون
function findProductIndex(name) {
  name = name.toLowerCase(); // تحويل الاسم إلى lowercase
  return inventory.findIndex((product) => product.name === name);
}

// function findProductIndex(productName) {
//     let searchName = productName.toLowerCase();
//     for (let i = 0; i < inventory.length; i++) {
//       if (inventory[i].name === searchName) {
//         return i;
//       }
//     }
//     return -1;
// }

// دالة لإضافة منتج إلى المخزون
function addProduct(name, quantity) {
  let index = findProductIndex(name);
  if (index !== -1) {
    inventory[index].quantity += quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({ name: name.toLowerCase(), quantity: quantity });
    console.log(`${name} added to inventory`);
  }
}

// دالة لإزالة منتج من المخزون
function removeProduct(name, quantity) {
  let index = findProductIndex(name);
  if (index === -1) {
    console.log(`${name} not found`);
  } else {
    let product = inventory[index];
    if (product.quantity >= quantity) {
      product.quantity -= quantity;
      console.log(`Remaining ${name} pieces: ${product.quantity}`);
      if (product.quantity === 0) {
        inventory.splice(index, 1); // حذف المنتج إذا كانت الكمية صفر
      }
    } else {
      console.log(
        `Not enough ${name} available, remaining pieces: ${product.quantity}`
      );
    }
  }
}

// دالة لعرض جميع المنتجات وكمياتها
function displayInventory() {
  console.log("Inventory:");
  inventory.forEach((product) => {
    console.log(`${product.name}: ${product.quantity}`);
  });
}

// اختبار الدوال
addProduct("Apple", 50);
addProduct("Banana", 30);
addProduct("Apple", 20); // سيقوم بتحديث الكمية
removeProduct("Banana", 15); // سيقلل الكمية
removeProduct("Apple", 100); // كمية غير كافية
removeProduct("Orange", 10); // منتج غير موجود
displayInventory(); // عرض المخزون

// // مصفوفة التخزين
// let inventory = [];

// // دالة لإيجاد الفهرس (index) لمنتج حسب اسمه
// function findProductIndex(name) {
//   name = name.toLowerCase();
//   return inventory.findIndex(product => product.name === name);
// }

// // دالة لإضافة منتج أو تحديث كميته
// function addProduct(product) {
//   const name = product.name.toLowerCase();
//   const quantity = product.quantity;
//   const index = findProductIndex(name);

//   if (index !== -1) {
//     inventory[index].quantity += quantity;
//     console.log(`${name} quantity updated`);
//   } else {
//     inventory.push({ name, quantity });
//     console.log(`${name} added to inventory`);
//   }
// }

// // دالة لحذف كمية من منتج معين
// function removeProduct(name, quantity) {
//   name = name.toLowerCase();
//   const index = findProductIndex(name);

//   if (index === -1) {
//     console.log(`${name} not found`);
//     return;
//   }

//   const product = inventory[index];

//   if (product.quantity < quantity) {
//     console.log(`Not enough ${name} available, remaining pieces: ${product.quantity}`);
//     return;
//   }

//   product.quantity -= quantity;

//   if (product.quantity === 0) {
//     inventory.splice(index, 1); // حذف المنتج بالكامل
//   } else {
//     console.log(`Remaining ${name} pieces: ${product.quantity}`);
//   }
// }

'use strict';

// Стоимость хранится в копейках.
const variants = {
  '100': { sku: '01306', price: 32640, oldPrice: 34920 },
  '500': { sku: '01307', price: 143200, oldPrice: 164600 },
  '1000': { sku: '01308', price: 206400, oldPrice: 259200 },
  '5000': { sku: '01309', price: 632000, oldPrice: 871000 },
};

// Формат цен сохранён таким же, как в исходнике Teaboom.ru.
const formatPrice = (kopecks) => `${(kopecks / 100).toFixed(2)} ₽`;
const card = document.querySelector('.product-card');
const selectedWeight = card.querySelector('#selected-weight');
const sku = card.querySelector('#product-sku');
const price = card.querySelector('#current-price');
const oldPrice = card.querySelector('#old-price');

function updateVariant(weight) {
  const variant = variants[weight];
  if (!variant) return;

  selectedWeight.textContent = `${weight} г`;
  sku.textContent = variant.sku;
  price.textContent = formatPrice(variant.price);
  oldPrice.textContent = formatPrice(variant.oldPrice);
  oldPrice.hidden = variant.oldPrice <= variant.price;
}

card.querySelectorAll('input[name="weight"]').forEach((input) => {
  input.addEventListener('change', () => updateVariant(input.value));
});

updateVariant(card.querySelector('input[name="weight"]:checked').value);

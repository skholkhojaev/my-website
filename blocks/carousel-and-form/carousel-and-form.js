import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  // Create carousel
  const carouselDiv = document.createElement('div');
  carouselDiv.className = 'carousel';
  
  // Assume the first row contains carousel images
  const carouselRow = block.children[0];
  [...carouselRow.children].forEach((div) => {
    if (div.querySelector('picture')) {
      const img = div.querySelector('img');
      const picture = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
      carouselDiv.append(picture);
    }
  });

  // Create form
  const form = document.createElement('form');
  form.className = 'form';

  // Assume subsequent rows are for form fields
  [...block.children].slice(1).forEach((row) => {
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'form-field';

    const label = document.createElement('label');
    label.textContent = row.children[0].textContent;

    const input = document.createElement('input');
    input.type = row.children[1].textContent.toLowerCase();
    input.id = input.name = row.children[0].textContent.toLowerCase().replace(' ', '');
    input.required = true;

    fieldDiv.append(label, input);
    form.append(fieldDiv);
  });

  // Add submit button
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  form.append(submitButton);

  // Clear and populate the block
  block.textContent = '';
  block.append(carouselDiv, form);
}
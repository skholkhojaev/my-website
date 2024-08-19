import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Carousel
  const carousel = document.createElement('div');
  carousel.className = 'carousel';
  
  // Add your carousel images here
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  images.forEach((src) => {
    const picture = createOptimizedPicture(src, 'Carousel Image', false, [{ width: '750' }]);
    carousel.appendChild(picture);
  });

  // Form
  const form = document.createElement('form');
  form.className = 'form';

  const fields = [
    { name: 'firstname', label: 'First Name', type: 'text' },
    { name: 'lastname', label: 'Last Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'telephone', label: 'Telephone', type: 'tel' },
  ];

  fields.forEach((field) => {
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'form-field';

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field.name);

    const input = document.createElement('input');
    input.type = field.type;
    input.id = field.name;
    input.name = field.name;
    input.required = true;

    fieldDiv.appendChild(label);
    fieldDiv.appendChild(input);
    form.appendChild(fieldDiv);
  });

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  // Append carousel and form to the block
  block.textContent = '';
  block.appendChild(carousel);
  block.appendChild(form);
}

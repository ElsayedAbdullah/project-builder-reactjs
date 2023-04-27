export const addProductValidation = (values) => {
  let errors = {};

  // function to validate the image url
  function isValidWebUrl() {
    let regEx = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
    return regEx.test(values.image);
  }
  // validate Title
  if (!values.title.trim() || values.title.length < 5 || values.title.length > 50) {
    errors.title = 'Product Title must be between 5 and 50 characters';
  }

  // validate Description
  if (!values.description.trim() || values.description.length < 10 || values.description.length > 100) {
    errors.description = 'Product Description must be between 10 and 100 characters';
  }

  // validate Image Url
  if (!values.image.trim() || !isValidWebUrl()) {
    errors.image = 'Image Url is required';
  }

  // validate Price
  if (!values.price.trim()) {
    errors.price = 'Price is required';
  } else if (isNaN(values.price)) {
    errors.price = 'Price must be number';
  }

  return errors;
};

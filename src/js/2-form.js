let formData = {
  email: '',
  message: '',
};
export default (() => {
  const form = document.querySelector('.feedback-form');
  const { email, message } = form.elements;
  const localStorageKey = 'feedback-form-state';

  const storageData = localStorage.getItem(localStorageKey);

  if (storageData) {
    const formElementsData = JSON.parse(storageData);
    email.value = formElementsData.email;
    formData.email = formElementsData.email;
    message.value = formElementsData.message;
    formData.message = formElementsData.message;
  } else {
    email.value = '';
    formData.email = '';
    message.value = '';
    formData.message = '';
  }

  function setStorageValues(e) {
    const { target } = e;
    if (target.name in formData) {
      formData[target.name] = target.value.trim();
      localStorage.setItem(localStorageKey, JSON.stringify(formData));
    }
  }

  function formSubmit(e) {
    e.preventDefault();

    if (!formData.email.trim() || !formData.message.trim()) {
      alert('Fill please all fields');
      return;
    }

    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData.email = '';
    formData.message = '';
    form.reset();
  }

  form?.addEventListener('submit', formSubmit);
  form?.addEventListener('input', setStorageValues);
})();

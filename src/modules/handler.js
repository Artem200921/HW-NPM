export const formData = {
  name: [],
  email: [],

};

export function saveFormData(name, email) {
  if (name && email) {
    formData.name.push(name);
    formData.email.push(email);
  }
}

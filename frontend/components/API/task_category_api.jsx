export const getTaskCategories = () => (
    $.ajax({
      method: 'GET',
      url: '/api/taskmaincategories'
    })
  );
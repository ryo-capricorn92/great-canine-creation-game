export const requireAuth = () => fetch('/api/isLoggedIn', { credentials: 'include' })
  .then(response => response.json())
  .then((data) => {
    if (!data.loggedIn) {
      throw new Error('Not authorized');
    }
    return data;
  });

export default {};

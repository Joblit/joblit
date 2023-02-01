async function checkLoggedIn() {
  try {
    const response = await fetch('/check-session');
    const loggedIn = await response.json();
    //    return (loggedIn === session cookie info)
  } catch (e) {
    console.error(e);
  }
}

export { checkLoggedIn };

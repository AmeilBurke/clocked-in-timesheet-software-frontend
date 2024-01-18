export default function getBearerTokenFromLocalStorage() {
  return localStorage.getItem("bearerToken");
}

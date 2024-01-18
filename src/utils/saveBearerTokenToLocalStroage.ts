export default function saveBearerTokenToLocalStorage(bearerToken: string) {
  localStorage.setItem("bearerToken", `Bearer ${bearerToken}`);
}

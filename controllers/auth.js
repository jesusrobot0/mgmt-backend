export function createUser(req, res) {
  res.json({ endpoint: "POST - registro" });
}

export function loginUser(req, res) {
  res.json({ endpoint: "POST - login" });
}

export function revalidateToken(req, res) {
  res.json({ endpoint: "GET - renew jwt" });
}

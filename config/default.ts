
export default {
  port: 3000,
  dbUri:"mongodb://localhost:27017/rest-api-node-ts",
  mongodbUri:"mongodb+srv://user_products:user_products@cluster0.8sw3w.mongodb.net/API-USERS-PRODUCTS?retryWrites=true&w=majority",
  saltWorkFactor:10,
  accessTokenTtl:"15m",
  refreshTokenTtl:"1y",
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIICWwIBAAKBgQCfDNOhuDG7hN/+Rf8L7SAvHt12QUcblUtOeG4bCz62kMkxwkrO
  Li8xY8ICFOwGEXkpSG49ejTC7AdcPOCbK8uIfdeyga3vPYSCcRYfcIuxKpwWIdaK
  mczDibBdQqf+rG4qXElNG4g9+mj5Rr0AoM+T4rAg88I0vCaXN4uS6bhjzwIDAQAB
  AoGAeqUBbGsErny/3OtMyH2Jm8xJKa8cjgCJmXD0NpZtPYpYGq6f0G18prEuITzQ
  470FmPfpSi66ELTA2Dd5Wy5iOx7WbOTmwRgIZc02309lVEN4d8I9b8JDn4aA9AJP
  NbOMK9qIu602ZjhaIMW7uvkKn+VLNgc5DteS7xJgL0BajQECQQDMNP6nZ4/aPFHc
  6mYuAaY3D0um6rcNuJt8FXiEOrNjZXk3ITrWEz/1hqhwuMijA8wfP2+D4g5jY/w6
  NjceYvvxAkEAx2PUGBkyXrxOdU6iQAst4V7b7tapcVCSLcepW3zbGLfOVIH3VQx/
  /asx/yrqxBmLTLmfT0wzZItLffcg3gwbvwJAPaeGd266LQ7nPIb84MkYsSkKE1Rs
  flUNhNJKt8mtXcZGadG7nOTk+7Fza80urqE34PtbJPt8kp+eiMjTrXX/UQJACJkL
  akab323rTC+p220f+1nlzfS/tb0tsH+tk95cbEJwyUAZdDdnxX5+V2x4VyBq21Id
  xoOYq7s99B6V8j0/bQJAQL433Z/S0M3ZBj3nRsr59eCIY1cKLrc/KPQPC+LyNonU
  igb0PQ3jrQ3W+tt3Z/tvjM8W5FktHR+g4UWlRUXjFA==
  -----END RSA PRIVATE KEY-----`,
  publicKey:`-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCfDNOhuDG7hN/+Rf8L7SAvHt12
  QUcblUtOeG4bCz62kMkxwkrOLi8xY8ICFOwGEXkpSG49ejTC7AdcPOCbK8uIfdey
  ga3vPYSCcRYfcIuxKpwWIdaKmczDibBdQqf+rG4qXElNG4g9+mj5Rr0AoM+T4rAg
  88I0vCaXN4uS6bhjzwIDAQAB
  -----END PUBLIC KEY-----`,
  jwtSecret:"secret"
}
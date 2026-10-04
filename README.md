# Nirmiti Player Dashboard v1.0

Empty dashboard shell for the multiplayer game.

Includes:
- Overview
- Highest-points leaderboard
- Personal playtime/statistics
- Player search
- Friends and friend requests
- Profile editing
- Change-password UI

It intentionally contains no fake player data.

## Backend integration
Recommended API:
GET /api/me
GET /api/leaderboard?period=all
GET /api/me/stats
GET /api/me/games
GET /api/players?q=...
GET /api/friends
POST /api/friends/request
POST /api/account/password

Password changes must be handled server-side/auth-provider-side; never store plaintext passwords in the browser.

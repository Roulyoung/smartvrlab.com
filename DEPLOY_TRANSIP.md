# Deploy naar TransIP vanaf GitHub

Deze repository gebruikt `.github/workflows/deploy-transip.yml`.

Deploy gedrag:
- Push naar `main` -> deploy naar productie
- Push naar `staging` -> deploy naar staging map

## 1) GitHub Secrets instellen
Ga naar: `GitHub repo -> Settings -> Secrets and variables -> Actions -> New repository secret`

Maak deze secrets aan:
- `TRANSIP_SFTP_HOST` = `smarvc.ssh.transip.me`
- `TRANSIP_SFTP_PORT` = `22`
- `TRANSIP_SFTP_USERNAME` = `smartvrlabnl`
- `TRANSIP_SFTP_PASSWORD` = je TransIP wachtwoord
- `TRANSIP_SFTP_REMOTE_DIR_PROD` = `www/smartvrlab.com`
- `TRANSIP_SFTP_REMOTE_DIR_STAGING` = `www/smartvrlab.com/staging`

Als de laatste 2 secrets niet gezet zijn, gebruikt de workflow automatisch deze paden als fallback.

## 2) Publiceren
- Productie: push naar `main`
- Staging: push naar `staging`

De inhoud van `new_site/` wordt geupload via SFTP.

## 3) Eerste check
- Open je site (en staging URL/map)
- Controleer GitHub tab `Actions`
- Als pad niet klopt, pas alleen `TRANSIP_SFTP_REMOTE_DIR_PROD` en/of `TRANSIP_SFTP_REMOTE_DIR_STAGING` aan

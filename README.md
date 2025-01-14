# Your Project's Title...
Your project's description...

## Environments
- Preview: https://main--{repo}--{owner}.hlx.page/
- Live: https://main--{repo}--{owner}.hlx.live/

## Installation

```sh
npm i
```

### Detailed
1. Fork this repo.
1. Install the [AEM Code Sync](https://github.com/apps/aem-code-sync) on your forked repo.
> **Note**: Make sure to ensure that a `main` branch exists in your forked repository.  
1. Clone your forked repo down to your computer.
1. Install the [AEM CLI](https://github.com/adobe/helix-cli) using your terminal: `sudo npm install -g @adobe/aem-cli`
1. In a terminal, run `aem up` your repo's folder on your computer. It will open a browser.
1. Open your repo's folder in your favorite code editor and start coding.

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)

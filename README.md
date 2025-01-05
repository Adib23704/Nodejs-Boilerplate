# Node.js Boilerplate

A modern Node.js boilerplate with ESLint, Prettier, and GitHub Actions integration for automated code quality management. This template helps you kickstart Node.js projects with best practices for code formatting, linting, and CI/CD.

## Features

- Node.js v20+ support
- ESLint configuration for consistent code quality
- Prettier integration for automatic code formatting
- GitHub Actions workflow for continuous integration
- VSCode workspace settings and recommended extensions
- Environment variable support with dotenv
- Development mode with automatic server restarts

## Project Structure

```
├── .env                     # Environment variables
├── .gitattributes           # Git attributes configuration
├── .github/
│   └── workflows/
│       └── lint.yml         # GitHub Actions workflow
├── .gitignore               # Git ignore configuration
├── .prettierrc.json         # Prettier configuration
├── .vscode/
│   └── Workspace.code-workspace  # VSCode workspace settings
├── app.js                   # Main application entry point
├── eslint.config.js         # ESLint configuration
└── package.json             # Project dependencies and scripts
```

## Prerequisites

Before you begin, ensure you have installed:

- Node.js (v20 or higher)
- npm (v7 or higher)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Adib23704/Nodejs-Boilerplate.git
   cd Nodejs-Boilerplate
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   ```sh
   cp .env.example .env
   ```
   Edit the `.env` file with your configuration values.

## Usage

### Development

Start the development server with hot reload:
```sh
npm run dev
```

### Production

Start the production server:
```sh
npm start
```

## Code Quality Tools

### Linting

Run ESLint to check code quality:
```sh
npm run lint
```

Automatically fix linting issues:
```sh
npm run lint:fix
```

### Formatting

Format code using Prettier:
```sh
npm run format
```

Check code formatting:
```sh
npm run format:check
```

## Continuous Integration

This project includes GitHub Actions workflows that automatically run on push and pull requests to the `master` branch:

- Linting check
- Format verification
- Dependency security scan

Configure additional checks in `.github/workflows/lint.yml`.

## VSCode Integration

This project includes VSCode workspace settings and recommended extensions. To use them:

1. Open the project in VSCode
2. Install recommended extensions when prompted
3. Use the workspace settings from `Workspace.code-workspace`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

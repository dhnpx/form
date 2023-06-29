# form

A Python platform managing authenticated Discord form submissions within the server through automated links.

Certainly! Here's a more concise version of the "Development" section for your project's README, covering the topics of adding new dependencies, adding new scripts, and installing project dependencies:

## Development

### Adding dependencies and scripts

To add new dependencies or scripts to the project, follow these steps:

1. Open the `pyproject.toml` file in the project directory.
2. To add a new dependency, locate the `[tool.poetry.dependencies]` section, and add the package using the format `package_name = "^version"`.
3. To add a new script, locate the `[tool.poetry.scripts]` section, and define a new key-value pair with the script name as the key and the entry point function or command as the value.
4. Save the `pyproject.toml` file.

### Installing project dependencies

To install project dependencies or apply changes made to the `pyproject.toml` file, use the following command:

```sh
python -m poetry install
```

This command will install the defined dependencies and make any necessary adjustments to the project.

Remember to run this command whenever you add new dependencies, modify existing dependencies, or add new scripts to your project.

Certainly! Here's an updated version of the "Development" section for your project's README, including the command to run the project:

## Development

### Adding Dependencies and Scripts

To add new dependencies or scripts to the project, follow these steps:

1. Open the `pyproject.toml` file in the project directory.
2. To add a new dependency, locate the `[tool.poetry.dependencies]` section, and add the package using the format `package_name = "^version"`.
3. To add a new script, locate the `[tool.poetry.scripts]` section, and define a new key-value pair with the script name as the key and the entry point function or command as the value.
4. Save the `pyproject.toml` file.

### Installing Project Dependencies

To install project dependencies or apply changes made to the `pyproject.toml` file, use the following command:

```
python -m poetry install
```

This command will install the defined dependencies and make any necessary adjustments to the project.

### Running the Project

To run the project or execute any scripts within the project, use the following command:

```sh
python -m poetry run python main.py
```

### Linting

- If you don't black installed, write `pip install black`.
- If there exists formatting and linting errors please type, `python -m black .` to view those errors.

---

Maintained with ❤️ by [**@acmcsufoss**](https://oss.acmcsuf.com/)
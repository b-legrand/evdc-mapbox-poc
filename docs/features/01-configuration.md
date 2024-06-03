The application stores all its configuration outside of the code. As per 12 factor app guidelines.

The frontend configuration is changed when deployed with jq.

A json schema is present to ensure compatibility and full type safety of the configuration.

see https://json-schema.org/

## Configuration file

The file is located at path `${baseUrl}/assets/config.json`


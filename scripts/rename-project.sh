#!/bin/zsh

# Function to transform project names
function transform_name() {
  local name="$1"
  local style="$2"

  # Convert to lowercase
  name=$(echo "$name" | tr '[:upper:]' '[:lower:]')

  if [[ "$style" == "dash" ]]; then
    # Replace spaces and underscores with dashes
    echo "${name//[ _]/-}"
  elif [[ "$style" == "underscore" ]]; then
    # Replace spaces and dashes with underscores
    echo "${name//[ -]/_}"
  else
    # If style is not recognized, return the original name
    echo "$name"
  fi
}

# Check if jq is installed
if ! command -v jq &> /dev/null; then
  echo "jq could not be found. Please install jq to use this script."
  exit 1
fi

# Get current project name from package.json
CURRENT_NAME=$(jq -r .name package.json)

# Get the new project name from input argument or prompt
NEW_NAME="$1"

if [[ -z "$NEW_NAME" ]]; then
  echo -n "Enter the new project name: "
  read -r NEW_NAME
fi

# Validate new name
if [[ -z "$NEW_NAME" ]]; then
  echo "Error: New project name cannot be empty."
  exit 1
elif [[ "$CURRENT_NAME" == "$NEW_NAME" ]]; then
  echo "No changes made. The new project name is the same as the current project name."
  exit 0
fi

# Transform names
CURRENT_NAME_UNDERSCORES=$(transform_name "$CURRENT_NAME" "underscore")
NEW_NAME_LOWER_DASHES=$(transform_name "$NEW_NAME" "dash")
NEW_NAME_UNDERSCORES=$(transform_name "$NEW_NAME" "underscore")

# Update package.json
if [[ -f "package.json" ]]; then
  # Using variable substitution for replacement
  CONTENT=$(<"package.json")
  NEW_CONTENT="${CONTENT//\"name\": \"$CURRENT_NAME\"/\"name\": \"$NEW_NAME_LOWER_DASHES\"}"
  echo "$NEW_CONTENT" > "package.json"
  echo "Updated 'package.json' - replaced project name."
else
  echo "Warning: 'package.json' does not exist, skipping."
fi

# Function to replace all occurrences of project name in a file
function replace_project_name_in_file() {
  local file="$1"
  local current_name="$2"
  local new_name="$3"

  CONTENT=$(<"$file")
  NEW_CONTENT="${CONTENT//$current_name/$new_name}"
  echo "$NEW_CONTENT" > "$file"
  echo "Updated '$file' - replaced '$current_name' with '$new_name'."
}

# Define docker-compose files and env files to update
docker_files=(
  "docker/database/docker-compose.yml"
  "docker/development/docker-compose.yml"
  "docker/production/docker-compose.yml"
  "docker/staging/docker-compose.yml"
)
env_files=(".env.development.sample")

# Update docker-compose files
for FILE in "${docker_files[@]}"; do
  if [[ -f "$FILE" ]]; then
    replace_project_name_in_file "$FILE" "$CURRENT_NAME_UNDERSCORES" "$NEW_NAME_UNDERSCORES"
  else
    echo "Warning: '$FILE' does not exist, skipping."
  fi
done

# Update env files
for FILE in "${env_files[@]}"; do
  if [[ -f "$FILE" ]]; then
    replace_project_name_in_file "$FILE" "$CURRENT_NAME_UNDERSCORES" "$NEW_NAME_UNDERSCORES"
  else
    echo "Warning: '$FILE' does not exist, skipping."
  fi
done

echo "Project name updated from '$CURRENT_NAME' to '$NEW_NAME'."

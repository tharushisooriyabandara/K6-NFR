# ----------------------------------------
# Framework Overview
#
# We are designing a Test Automation Framework for Moodle.
# The first step is to define the environment setup.
# ----------------------------------------

# ----------------------------------------
# Environment Setup
# ----------------------------------------

# 1. env.sh – Local Environment Configuration (Shell File)
#
# - This file contains sensitive and runtime-configurable data.
# - It will not be committed to Git. Each team member will have their own local copy.
# - It includes:
#   - Sensitive data such as usernames, passwords, API tokens, and secret keys
#   - Runtime values such as the number of virtual users for tools like k6
#     Example: Instead of hardcoding `k6 run --vus 10`, use `k6 run --vus $VIRTUAL_USERS` from env.sh


export MOODLE_ADMIN = "admin"
export MOODLE_ADMIN_PASSWORD = "Admin123!@#"
export VU = 5
export DURATION = "10s"
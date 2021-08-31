from flask.cli import AppGroup
from .users import seed_users, undo_users
from .categories import seed_categories, undo_categories
from .resources import seed_resources, undo_resources
from .datatypes import seed_dataTypes, undo_dataTypes
from .technologies import seed_technologies, undo_technologies


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_categories()
    seed_resources()
    seed_dataTypes()
    seed_technologies()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_categories()
    undo_resources()
    undo_dataTypes()
    undo_technologies()
    # Add other undo functions here

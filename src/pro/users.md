# Users and Permission

The Pro version of Geo Engine includes a user management system.
Users can either be _anonymous_ or _registered_.
On the first startup, an admin user will be created.

Geo Engine has a Role Based Access Control (RBAC) system.
Users can have different roles and permissions on resources are granted to these roles.
By default, they have a unique role for themselves and either the role `anonymous` or `registered`.
The admin user has the role `admin`.

Geo Engine allows defining permissions for resources like Datasets, Workflows, Layers and Projects.
When a resource is created, the creator gets the `Owner` permission.
This means they can do everything with the resource, including deleting it and permitting others to use it.
For read-only access, the `Read` permission is available.
The management of the permissions is done via the Permissions API.
Admin users, i.e. users with the role `admin` assigned to them, can create new roles and assign them to users.
The management of roles is also done via the Permissions API.
Please refer to the API documentation (TODO: link) for more information.
Alternatively, you can also use our Python library to manage permissions.
Please refer to the [Python library documentation](https://python.docs.geoengine.io/) for more information.

## Example

Let's say Alice creates a project P.
She automatically gets the `Owner` permission assigned on the project to her user role.
Then, she adds a `Read` permission for User Bob.
Before the permission is added, the system checks for the `Owner` permission on project P.
As Alice is the owner, this operation succeeds.
When Bob tries to access the project P the system checks for the `Read` permission which again succeeds.

Alice now wants to grant Charly and and Dave the `Read` permission as well.
Both Charly and Dave have the role `Friends of Alice`.
She decides to give the permission to the role instead of both users individually.
Both Charly and Dave can now access project P, but Mallory, who does not have the role gets a `PermissionDenied` error.
When later on Erin gets the role R assigned, she automatically gains access to project P as well.

The complete permission scenario looks like this

- Resources
  - project P
- Users
  - Alice
  - Bob
  - Charly
  - Dave
  - Erin
  - Mallory
- Permissions (Role, Resource, Permission)
  - Alice, project P, Owner
  - Bob, project P, Read
  - Friends of Alice, project P, Read
- Roles
  - User roles (omitted)
  - Friends of Alice
    - Charly
    - Dave
- Read access allowed
  - Alice
  - Bob
  - Charly
  - Dave
  - Erin
- Read access denied
  - Mallory

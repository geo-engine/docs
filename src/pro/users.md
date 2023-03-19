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

--- 
title: cluster_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_credentials
  - redshift
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>cluster_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.cluster_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cluster_credentials"
    values={[
        { label: 'get_cluster_credentials', value: 'get_cluster_credentials' }
    ]}
>
<TabItem value="get_cluster_credentials">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="DbPassword" /></td>
    <td><code>string</code></td>
    <td>A temporary password that authorizes the user name returned by DbUser to log on to the database DbName.</td>
</tr>
<tr>
    <td><CopyableCode code="DbUser" /></td>
    <td><code>string</code></td>
    <td>A database user name that is authorized to log on to the database DbName using the password DbPassword. If the specified DbUser exists in the database, the new user name has the same database permissions as the the user named in DbUser. By default, the user is added to PUBLIC. If the DbGroups parameter is specifed, DbUser is added to the listed groups for any sessions created using these credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="Expiration" /></td>
    <td><code>string</code></td>
    <td>The date and time the password in DbPassword expires.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_cluster_credentials"><CopyableCode code="get_cluster_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DbUser"><code>DbUser</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DbName"><code>DbName</code></a>, <a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-DurationSeconds"><code>DurationSeconds</code></a>, <a href="#parameter-AutoCreate"><code>AutoCreate</code></a>, <a href="#parameter-DbGroups"><code>DbGroups</code></a>, <a href="#parameter-CustomDomainName"><code>CustomDomainName</code></a></td>
    <td>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with IAM: if AutoCreate is False or IAMA: if AutoCreate is True. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see Using IAM Authentication to Generate Database User Credentials in the Amazon Redshift Cluster Management Guide. The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see Resource Policies for GetClusterCredentials in the Amazon Redshift Cluster Management Guide. If the DbGroups parameter is specified, the IAM policy must allow the redshift:JoinGroup action with access to the listed dbgroups. In addition, if the AutoCreate parameter is set to True, then the policy must include the redshift:CreateClusterUser permission. If the DbName parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-DbUser">
    <td><CopyableCode code="DbUser" /></td>
    <td><code>string</code></td>
    <td>The name of a database user. If a user name matching DbUser exists in the database, the temporary user credentials have the same permissions as the existing user. If DbUser doesn't exist in the database and Autocreate is True, a new user is created using the value for DbUser with PUBLIC permissions. If a database user matching the value for DbUser doesn't exist and Autocreate is False, then the command succeeds but the connection attempt will fail because the user doesn't exist in the database. For more information, see CREATE USER in the Amazon Redshift Database Developer Guide. Constraints: Must be 1 to 64 alphanumeric characters or hyphens. The user name can't be PUBLIC. Must contain uppercase or lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen. First character must be a letter. Must not contain a colon ( : ) or slash ( / ). Cannot be a reserved word. A list of reserved words can be found in Reserved Words in the Amazon Redshift Database Developer Guide.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AutoCreate">
    <td><CopyableCode code="AutoCreate" /></td>
    <td><code>boolean</code></td>
    <td>Create a database user with the name specified for the user named in DbUser if one does not exist.</td>
</tr>
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the cluster that contains the database for which you are requesting credentials. This parameter is case sensitive.</td>
</tr>
<tr id="parameter-CustomDomainName">
    <td><CopyableCode code="CustomDomainName" /></td>
    <td><code>string</code></td>
    <td>The custom domain name for the cluster credentials.</td>
</tr>
<tr id="parameter-DbGroups">
    <td><CopyableCode code="DbGroups" /></td>
    <td><code>array</code></td>
    <td>A list of the names of existing database groups that the user named in DbUser will join for the current session, in addition to any group memberships for an existing user. If not specified, a new user is added only to PUBLIC. Database group name constraints Must be 1 to 64 alphanumeric characters or hyphens Must contain only lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen. First character must be a letter. Must not contain a colon ( : ) or slash ( / ). Cannot be a reserved word. A list of reserved words can be found in Reserved Words in the Amazon Redshift Database Developer Guide.</td>
</tr>
<tr id="parameter-DbName">
    <td><CopyableCode code="DbName" /></td>
    <td><code>string</code></td>
    <td>The name of a database that DbUser is authorized to log on to. If DbName is not specified, DbUser can log on to any existing database. Constraints: Must be 1 to 64 alphanumeric characters or hyphens Must contain uppercase or lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen. First character must be a letter. Must not contain a colon ( : ) or slash ( / ). Cannot be a reserved word. A list of reserved words can be found in Reserved Words in the Amazon Redshift Database Developer Guide.</td>
</tr>
<tr id="parameter-DurationSeconds">
    <td><CopyableCode code="DurationSeconds" /></td>
    <td><code>integer</code></td>
    <td>The number of seconds until the returned temporary password expires. Constraint: minimum 900, maximum 3600. Default: 900</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cluster_credentials"
    values={[
        { label: 'get_cluster_credentials', value: 'get_cluster_credentials' }
    ]}
>
<TabItem value="get_cluster_credentials">

Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with IAM: if AutoCreate is False or IAMA: if AutoCreate is True. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see Using IAM Authentication to Generate Database User Credentials in the Amazon Redshift Cluster Management Guide. The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see Resource Policies for GetClusterCredentials in the Amazon Redshift Cluster Management Guide. If the DbGroups parameter is specified, the IAM policy must allow the redshift:JoinGroup action with access to the listed dbgroups. In addition, if the AutoCreate parameter is set to True, then the policy must include the redshift:CreateClusterUser permission. If the DbName parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.

```sql
SELECT
DbPassword,
DbUser,
Expiration
FROM aws.redshift.cluster_credentials
WHERE DbUser = '{{ DbUser }}' -- required
AND region = '{{ region }}' -- required
AND DbName = '{{ DbName }}'
AND ClusterIdentifier = '{{ ClusterIdentifier }}'
AND DurationSeconds = '{{ DurationSeconds }}'
AND AutoCreate = '{{ AutoCreate }}'
AND DbGroups = '{{ DbGroups }}'
AND CustomDomainName = '{{ CustomDomainName }}'
;
```
</TabItem>
</Tabs>

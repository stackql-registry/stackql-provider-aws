--- 
title: credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - credentials
  - redshift_serverless
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

Creates, updates, deletes, gets or lists a <code>credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_serverless.credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_credentials"
    values={[
        { label: 'get_credentials', value: 'get_credentials' }
    ]}
>
<TabItem value="get_credentials">

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
    <td><CopyableCode code="db_password" /></td>
    <td><code>string</code></td>
    <td>A temporary password that authorizes the user name returned by DbUser to log on to the database DbName.</td>
</tr>
<tr>
    <td><CopyableCode code="db_user" /></td>
    <td><code>string</code></td>
    <td>A database user name that is authorized to log on to the database DbName using the password DbPassword. If the specified DbUser exists in the database, the new user name has the same database privileges as the the user named in DbUser. By default, the user is added to PUBLIC.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the password in DbPassword expires.</td>
</tr>
<tr>
    <td><CopyableCode code="next_refresh_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the DbUser and DbPassword authorization refreshes.</td>
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
    <td><a href="#get_credentials"><CopyableCode code="get_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources. If the DbName parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_credentials"
    values={[
        { label: 'get_credentials', value: 'get_credentials' }
    ]}
>
<TabItem value="get_credentials">

Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources. If the DbName parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.

```sql
SELECT
db_password,
db_user,
expiration,
next_refresh_time
FROM aws.redshift_serverless.credentials
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

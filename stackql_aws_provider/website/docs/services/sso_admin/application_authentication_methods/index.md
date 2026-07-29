--- 
title: application_authentication_methods
hide_title: false
hide_table_of_contents: false
keywords:
  - application_authentication_methods
  - sso_admin
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

Creates, updates, deletes, gets or lists an <code>application_authentication_methods</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_authentication_methods" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.application_authentication_methods" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application_authentication_method"
    values={[
        { label: 'get_application_authentication_method', value: 'get_application_authentication_method' },
        { label: 'list_application_authentication_methods', value: 'list_application_authentication_methods' }
    ]}
>
<TabItem value="get_application_authentication_method">

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
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>A structure that describes details for IAM authentication.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_application_authentication_methods">

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
    <td><CopyableCode code="authentication_method" /></td>
    <td><code>object</code></td>
    <td>A structure that describes an authentication method. The contents of this structure is determined by the AuthenticationMethodType.</td>
</tr>
<tr>
    <td><CopyableCode code="authentication_method_type" /></td>
    <td><code>string</code></td>
    <td>The type of authentication that is used by this method. (IAM)</td>
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
    <td><a href="#get_application_authentication_method"><CopyableCode code="get_application_authentication_method" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about an authentication method used by an application.</td>
</tr>
<tr>
    <td><a href="#list_application_authentication_methods"><CopyableCode code="list_application_authentication_methods" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all of the authentication methods supported by the specified application.</td>
</tr>
<tr>
    <td><a href="#put_application_authentication_method"><CopyableCode code="put_application_authentication_method" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationArn"><code>ApplicationArn</code></a>, <a href="#parameter-AuthenticationMethodType"><code>AuthenticationMethodType</code></a>, <a href="#parameter-AuthenticationMethod"><code>AuthenticationMethod</code></a></td>
    <td></td>
    <td>Adds or updates an authentication method for an application.</td>
</tr>
<tr>
    <td><a href="#delete_application_authentication_method"><CopyableCode code="delete_application_authentication_method" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an authentication method from an application.</td>
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
    defaultValue="get_application_authentication_method"
    values={[
        { label: 'get_application_authentication_method', value: 'get_application_authentication_method' },
        { label: 'list_application_authentication_methods', value: 'list_application_authentication_methods' }
    ]}
>
<TabItem value="get_application_authentication_method">

Retrieves details about an authentication method used by an application.

```sql
SELECT
iam
FROM aws.sso_admin.application_authentication_methods
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_application_authentication_methods">

Lists all of the authentication methods supported by the specified application.

```sql
SELECT
authentication_method,
authentication_method_type
FROM aws.sso_admin.application_authentication_methods
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_application_authentication_method"
    values={[
        { label: 'put_application_authentication_method', value: 'put_application_authentication_method' }
    ]}
>
<TabItem value="put_application_authentication_method">

Adds or updates an authentication method for an application.

```sql
REPLACE aws.sso_admin.application_authentication_methods
SET 
ApplicationArn = '{{ ApplicationArn }}',
AuthenticationMethodType = '{{ AuthenticationMethodType }}',
AuthenticationMethod = '{{ AuthenticationMethod }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationArn = '{{ ApplicationArn }}' --required
AND AuthenticationMethodType = '{{ AuthenticationMethodType }}' --required
AND AuthenticationMethod = '{{ AuthenticationMethod }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application_authentication_method"
    values={[
        { label: 'delete_application_authentication_method', value: 'delete_application_authentication_method' }
    ]}
>
<TabItem value="delete_application_authentication_method">

Deletes an authentication method from an application.

```sql
DELETE FROM aws.sso_admin.application_authentication_methods
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

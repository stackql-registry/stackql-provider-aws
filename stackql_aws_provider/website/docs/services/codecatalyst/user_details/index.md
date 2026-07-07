--- 
title: user_details
hide_title: false
hide_table_of_contents: false
keywords:
  - user_details
  - codecatalyst
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

Creates, updates, deletes, gets or lists a <code>user_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecatalyst.user_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_details"
    values={[
        { label: 'get_user_details', value: 'get_user_details' }
    ]}
>
<TabItem value="get_user_details">

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
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The friendly name displayed for the user in Amazon CodeCatalyst.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryEmail" /></td>
    <td><code>object</code></td>
    <td>The email address provided by the user when they signed up.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The system-generated unique ID of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="userName" /></td>
    <td><code>string</code></td>
    <td>The name of the user as displayed in Amazon CodeCatalyst.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#get_user_details"><CopyableCode code="get_user_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-userName"><code>userName</code></a></td>
    <td>Returns information about a user.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The system-generated unique ID of the user.</td>
</tr>
<tr id="parameter-userName">
    <td><CopyableCode code="userName" /></td>
    <td><code>string</code></td>
    <td>The name of the user as displayed in Amazon CodeCatalyst.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user_details"
    values={[
        { label: 'get_user_details', value: 'get_user_details' }
    ]}
>
<TabItem value="get_user_details">

Returns information about a user.

```sql
SELECT
displayName,
primaryEmail,
userId,
userName,
version
FROM aws.codecatalyst.user_details
WHERE region = '{{ region }}' -- required
AND id = '{{ id }}'
AND userName = '{{ userName }}'
;
```
</TabItem>
</Tabs>

--- 
title: user_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - user_endpoints
  - pinpoint
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

Creates, updates, deletes, gets or lists a <code>user_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.user_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_endpoints"
    values={[
        { label: 'get_user_endpoints', value: 'get_user_endpoints' }
    ]}
>
<TabItem value="get_user_endpoints">

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
    <td><CopyableCode code="item" /></td>
    <td><code>array</code></td>
    <td>An array of responses, one for each endpoint that's associated with the user ID.</td>
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
    <td><a href="#get_user_endpoints"><CopyableCode code="get_user_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-user-id"><code>user-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about all the endpoints that are associated with a specific user ID.</td>
</tr>
<tr>
    <td><a href="#delete_user_endpoints"><CopyableCode code="delete_user_endpoints" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-user-id"><code>user-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes all the endpoints that are associated with a specific user ID.</td>
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
<tr id="parameter-application-id">
    <td><CopyableCode code="application-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-user-id">
    <td><CopyableCode code="user-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the user.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user_endpoints"
    values={[
        { label: 'get_user_endpoints', value: 'get_user_endpoints' }
    ]}
>
<TabItem value="get_user_endpoints">

Retrieves information about all the endpoints that are associated with a specific user ID.

```sql
SELECT
item
FROM aws.pinpoint.user_endpoints
WHERE `application-id` = '{{ application-id }}' -- required
AND `user-id` = '{{ user-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_endpoints"
    values={[
        { label: 'delete_user_endpoints', value: 'delete_user_endpoints' }
    ]}
>
<TabItem value="delete_user_endpoints">

Deletes all the endpoints that are associated with a specific user ID.

```sql
DELETE FROM aws.pinpoint.user_endpoints
WHERE `application-id` = '{{ application-id }}' --required
AND `user-id` = '{{ user-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

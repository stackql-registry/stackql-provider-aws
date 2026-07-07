--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - personalize_events
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize_events.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#put_users"><CopyableCode code="put_users" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-datasetArn"><code>datasetArn</code></a>, <a href="#parameter-users"><code>users</code></a></td>
    <td></td>
    <td>Adds one or more users to a Users dataset. For more information see Importing users individually.</td>
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

## `REPLACE` examples

<Tabs
    defaultValue="put_users"
    values={[
        { label: 'put_users', value: 'put_users' }
    ]}
>
<TabItem value="put_users">

Adds one or more users to a Users dataset. For more information see Importing users individually.

```sql
REPLACE aws.personalize_events.users
SET 
datasetArn = '{{ datasetArn }}',
users = '{{ users }}'
WHERE 
region = '{{ region }}' --required
AND datasetArn = '{{ datasetArn }}' --required
AND users = '{{ users }}' --required;
```
</TabItem>
</Tabs>

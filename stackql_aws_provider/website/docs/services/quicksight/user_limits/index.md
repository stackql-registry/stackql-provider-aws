--- 
title: user_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - user_limits
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>user_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.user_limits" /></td></tr>
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
    <td><a href="#batch_describe_user_limits"><CopyableCode code="batch_describe_user_limits" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the effective resource limits for one or more Amazon Quick Sight users, including the limits that apply to each user based on their profile assignments.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the users.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="batch_describe_user_limits"
    values={[
        { label: 'batch_describe_user_limits', value: 'batch_describe_user_limits' }
    ]}
>
<TabItem value="batch_describe_user_limits">

Describes the effective resource limits for one or more Amazon Quick Sight users, including the limits that apply to each user based on their profile assignments.

```sql
EXEC aws.quicksight.user_limits.batch_describe_user_limits 
@account_id='{{ account_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"users": "{{ users }}", 
"resourceTypes": "{{ resourceTypes }}"
}'
;
```
</TabItem>
</Tabs>

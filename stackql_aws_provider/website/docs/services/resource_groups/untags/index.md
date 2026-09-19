--- 
title: untags
hide_title: false
hide_table_of_contents: false
keywords:
  - untags
  - resource_groups
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

Creates, updates, deletes, gets or lists an <code>untags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="untags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_groups.untags" /></td></tr>
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
    <td><a href="#untag"><CopyableCode code="untag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes tags from a specified resource group. Minimum permissions To run this command, you must have the following permissions: resource-groups:Untag</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of the resource group from which to remove tags. The command removed both the specified keys and any values associated with those keys.</td>
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
    defaultValue="untag"
    values={[
        { label: 'untag', value: 'untag' }
    ]}
>
<TabItem value="untag">

Deletes tags from a specified resource group. Minimum permissions To run this command, you must have the following permissions: resource-groups:Untag

```sql
EXEC aws.resource_groups.untags.untag 
@arn='{{ arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Keys": "{{ Keys }}"
}'
;
```
</TabItem>
</Tabs>

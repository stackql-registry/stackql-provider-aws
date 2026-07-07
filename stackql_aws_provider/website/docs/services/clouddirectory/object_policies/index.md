--- 
title: object_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - object_policies
  - clouddirectory
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

Creates, updates, deletes, gets or lists an <code>object_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="object_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.object_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_object_policies"
    values={[
        { label: 'list_object_policies', value: 'list_object_policies' }
    ]}
>
<TabItem value="list_object_policies">

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
    <td><CopyableCode code="attached_policy_id" /></td>
    <td><code>string</code></td>
    <td>A list of policy ObjectIdentifiers, that are attached to the object.</td>
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
    <td><a href="#list_object_policies"><CopyableCode code="list_object_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-consistency-level"><code>x-amz-consistency-level</code></a></td>
    <td>Returns policies attached to an object in pagination fashion.</td>
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
<tr id="parameter-x-amz-data-partition">
    <td><CopyableCode code="x-amz-data-partition" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is associated with the Directory where objects reside. For more information, see arns.</td>
</tr>
<tr id="parameter-x-amz-consistency-level">
    <td><CopyableCode code="x-amz-consistency-level" /></td>
    <td><code>string</code></td>
    <td>Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_object_policies"
    values={[
        { label: 'list_object_policies', value: 'list_object_policies' }
    ]}
>
<TabItem value="list_object_policies">

Returns policies attached to an object in pagination fashion.

```sql
SELECT
attached_policy_id
FROM aws.clouddirectory.object_policies
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-consistency-level` = '{{ x-amz-consistency-level }}'
;
```
</TabItem>
</Tabs>

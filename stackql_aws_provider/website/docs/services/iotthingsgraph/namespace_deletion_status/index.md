--- 
title: namespace_deletion_status
hide_title: false
hide_table_of_contents: false
keywords:
  - namespace_deletion_status
  - iotthingsgraph
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

Creates, updates, deletes, gets or lists a <code>namespace_deletion_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="namespace_deletion_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotthingsgraph.namespace_deletion_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_namespace_deletion_status"
    values={[
        { label: 'get_namespace_deletion_status', value: 'get_namespace_deletion_status' }
    ]}
>
<TabItem value="get_namespace_deletion_status">

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
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>An error code returned by the namespace deletion task. (VALIDATION_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>An error code returned by the namespace deletion task.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the namespace that is being deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the namespace that is being deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the deletion request. (IN_PROGRESS, SUCCEEDED, FAILED)</td>
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
    <td><a href="#get_namespace_deletion_status"><CopyableCode code="get_namespace_deletion_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the status of a namespace deletion task.</td>
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
    defaultValue="get_namespace_deletion_status"
    values={[
        { label: 'get_namespace_deletion_status', value: 'get_namespace_deletion_status' }
    ]}
>
<TabItem value="get_namespace_deletion_status">

Gets the status of a namespace deletion task.

```sql
SELECT
error_code,
error_message,
namespace_arn,
namespace_name,
status
FROM aws.iotthingsgraph.namespace_deletion_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

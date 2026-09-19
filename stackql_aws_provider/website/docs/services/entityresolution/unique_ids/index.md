--- 
title: unique_ids
hide_title: false
hide_table_of_contents: false
keywords:
  - unique_ids
  - entityresolution
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

Creates, updates, deletes, gets or lists an <code>unique_ids</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="unique_ids" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.entityresolution.unique_ids" /></td></tr>
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
    <td><a href="#batch_delete_unique_id"><CopyableCode code="batch_delete_unique_id" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workflow_name"><code>workflow_name</code></a>, <a href="#parameter-uniqueIds"><code>uniqueIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-inputSource"><code>inputSource</code></a></td>
    <td>Deletes multiple unique IDs in a matching workflow.</td>
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
<tr id="parameter-uniqueIds">
    <td><CopyableCode code="uniqueIds" /></td>
    <td><code>array</code></td>
    <td>The unique IDs to delete.</td>
</tr>
<tr id="parameter-workflow_name">
    <td><CopyableCode code="workflow_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow.</td>
</tr>
<tr id="parameter-inputSource">
    <td><CopyableCode code="inputSource" /></td>
    <td><code>string</code></td>
    <td>The input source for the batch delete unique ID operation.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_unique_id"
    values={[
        { label: 'batch_delete_unique_id', value: 'batch_delete_unique_id' }
    ]}
>
<TabItem value="batch_delete_unique_id">

Deletes multiple unique IDs in a matching workflow.

```sql
EXEC aws.entityresolution.unique_ids.batch_delete_unique_id 
@workflow_name='{{ workflow_name }}' --required, 
@uniqueIds='{{ uniqueIds }}' --required, 
@region='{{ region }}' --required, 
@inputSource='{{ inputSource }}'
;
```
</TabItem>
</Tabs>

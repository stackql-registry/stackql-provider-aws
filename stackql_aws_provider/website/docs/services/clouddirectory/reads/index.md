--- 
title: reads
hide_title: false
hide_table_of_contents: false
keywords:
  - reads
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

Creates, updates, deletes, gets or lists a <code>reads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.reads" /></td></tr>
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
    <td><a href="#batch_read"><CopyableCode code="batch_read" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Operations"><code>Operations</code></a></td>
    <td><a href="#parameter-x-amz-consistency-level"><code>x-amz-consistency-level</code></a></td>
    <td>Performs all the read operations in a batch.</td>
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
    <td>The Amazon Resource Name (ARN) that is associated with the Directory. For more information, see arns.</td>
</tr>
<tr id="parameter-x-amz-consistency-level">
    <td><CopyableCode code="x-amz-consistency-level" /></td>
    <td><code>string</code></td>
    <td>Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="batch_read"
    values={[
        { label: 'batch_read', value: 'batch_read' }
    ]}
>
<TabItem value="batch_read">

Performs all the read operations in a batch.

```sql
EXEC aws.clouddirectory.reads.batch_read 
@x-amz-data-partition='{{ x-amz-data-partition }}' --required, 
@region='{{ region }}' --required, 
@x-amz-consistency-level='{{ x-amz-consistency-level }}' 
@@json=
'{
"Operations": "{{ Operations }}"
}'
;
```
</TabItem>
</Tabs>

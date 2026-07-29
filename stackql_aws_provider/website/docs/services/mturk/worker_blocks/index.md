--- 
title: worker_blocks
hide_title: false
hide_table_of_contents: false
keywords:
  - worker_blocks
  - mturk
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

Creates, updates, deletes, gets or lists a <code>worker_blocks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="worker_blocks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mturk.worker_blocks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_worker_blocks"
    values={[
        { label: 'list_worker_blocks', value: 'list_worker_blocks' }
    ]}
>
<TabItem value="list_worker_blocks">

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
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>A message explaining the reason the Worker was blocked.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Worker who accepted the HIT. (pattern: &lt;code&gt;^A&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#list_worker_blocks"><CopyableCode code="list_worker_blocks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The ListWorkersBlocks operation retrieves a list of Workers who are blocked from working on your HITs.</td>
</tr>
<tr>
    <td><a href="#create_worker_block"><CopyableCode code="create_worker_block" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkerId"><code>WorkerId</code></a></td>
    <td></td>
    <td>The CreateWorkerBlock operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.</td>
</tr>
<tr>
    <td><a href="#delete_worker_block"><CopyableCode code="delete_worker_block" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The DeleteWorkerBlock operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.</td>
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
    defaultValue="list_worker_blocks"
    values={[
        { label: 'list_worker_blocks', value: 'list_worker_blocks' }
    ]}
>
<TabItem value="list_worker_blocks">

The ListWorkersBlocks operation retrieves a list of Workers who are blocked from working on your HITs.

```sql
SELECT
reason,
worker_id
FROM aws.mturk.worker_blocks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_worker_block"
    values={[
        { label: 'create_worker_block', value: 'create_worker_block' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_worker_block">

The CreateWorkerBlock operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.

```sql
INSERT INTO aws.mturk.worker_blocks (
WorkerId,
Reason,
region
)
SELECT 
'{{ WorkerId }}' /* required */,
'{{ Reason }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: worker_blocks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the worker_blocks resource.
    - name: WorkerId
      value: "{{ WorkerId }}"
      description: |
        The ID of the Worker to block.
    - name: Reason
      value: "{{ Reason }}"
      description: |
        A message explaining the reason for blocking the Worker. This parameter enables you to keep track of your Workers. The Worker does not see this message.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_worker_block"
    values={[
        { label: 'delete_worker_block', value: 'delete_worker_block' }
    ]}
>
<TabItem value="delete_worker_block">

The DeleteWorkerBlock operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.

```sql
DELETE FROM aws.mturk.worker_blocks
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

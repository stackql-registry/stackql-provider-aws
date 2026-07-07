--- 
title: memory_records
hide_title: false
hide_table_of_contents: false
keywords:
  - memory_records
  - bedrock_agentcore
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

Creates, updates, deletes, gets or lists a <code>memory_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="memory_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.memory_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_memory_record"
    values={[
        { label: 'get_memory_record', value: 'get_memory_record' },
        { label: 'list_memory_records', value: 'list_memory_records' }
    ]}
>
<TabItem value="get_memory_record">

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
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The content of the memory record.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the memory record was created.</td>
</tr>
<tr>
    <td><CopyableCode code="memoryRecordId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the memory record. (pattern: &lt;code&gt;mem-&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="memoryStrategyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the memory strategy associated with this record. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>A map of metadata key-value pairs associated with a memory record.</td>
</tr>
<tr>
    <td><CopyableCode code="namespaces" /></td>
    <td><code>array</code></td>
    <td>The namespaces associated with this memory record. Namespaces help organize and categorize memory records.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_memory_records">

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
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The content of the memory record.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the memory record was created.</td>
</tr>
<tr>
    <td><CopyableCode code="memoryRecordId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the memory record. (pattern: &lt;code&gt;mem-&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="memoryStrategyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the memory strategy associated with this record. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>A map of metadata key-value pairs associated with a memory record.</td>
</tr>
<tr>
    <td><CopyableCode code="namespaces" /></td>
    <td><code>array</code></td>
    <td>The namespaces associated with this memory record.</td>
</tr>
<tr>
    <td><CopyableCode code="score" /></td>
    <td><code>number (double)</code></td>
    <td>The relevance score of the memory record when returned as part of a search result. Higher values indicate greater relevance to the search query.</td>
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
    <td><a href="#get_memory_record"><CopyableCode code="get_memory_record" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-memory_record_id"><code>memory_record_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a specific memory record from an AgentCore Memory resource. To use this operation, you must have the bedrock-agentcore:GetMemoryRecord permission.</td>
</tr>
<tr>
    <td><a href="#list_memory_records"><CopyableCode code="list_memory_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists memory records in an AgentCore Memory resource based on specified criteria. We recommend using pagination to ensure that the operation returns quickly and successfully. To use this operation, you must have the bedrock-agentcore:ListMemoryRecords permission.</td>
</tr>
<tr>
    <td><a href="#delete_memory_record"><CopyableCode code="delete_memory_record" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-memory_record_id"><code>memory_record_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a memory record from an AgentCore Memory resource. When you delete a memory record, it is permanently removed. To use this operation, you must have the bedrock-agentcore:DeleteMemoryRecord permission.</td>
</tr>
<tr>
    <td><a href="#batch_create_memory_records"><CopyableCode code="batch_create_memory_records" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-records"><code>records</code></a></td>
    <td></td>
    <td>Creates multiple memory records in a single batch operation for the specified memory with custom content.</td>
</tr>
<tr>
    <td><a href="#batch_delete_memory_records"><CopyableCode code="batch_delete_memory_records" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-records"><code>records</code></a></td>
    <td></td>
    <td>Deletes multiple memory records in a single batch operation from the specified memory.</td>
</tr>
<tr>
    <td><a href="#batch_update_memory_records"><CopyableCode code="batch_update_memory_records" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-records"><code>records</code></a></td>
    <td></td>
    <td>Updates multiple memory records with custom content in a single batch operation within the specified memory.</td>
</tr>
<tr>
    <td><a href="#retrieve_memory_records"><CopyableCode code="retrieve_memory_records" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-searchCriteria"><code>searchCriteria</code></a></td>
    <td></td>
    <td>Searches for and retrieves memory records from an AgentCore Memory resource based on specified search criteria. We recommend using pagination to ensure that the operation returns quickly and successfully. To use this operation, you must have the bedrock-agentcore:RetrieveMemoryRecords permission.</td>
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
<tr id="parameter-memory_id">
    <td><CopyableCode code="memory_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the AgentCore Memory resource from which to retrieve memory records.</td>
</tr>
<tr id="parameter-memory_record_id">
    <td><CopyableCode code="memory_record_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the memory record to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_memory_record"
    values={[
        { label: 'get_memory_record', value: 'get_memory_record' },
        { label: 'list_memory_records', value: 'list_memory_records' }
    ]}
>
<TabItem value="get_memory_record">

Retrieves a specific memory record from an AgentCore Memory resource. To use this operation, you must have the bedrock-agentcore:GetMemoryRecord permission.

```sql
SELECT
content,
createdAt,
memoryRecordId,
memoryStrategyId,
metadata,
namespaces
FROM aws.bedrock_agentcore.memory_records
WHERE memory_id = '{{ memory_id }}' -- required
AND memory_record_id = '{{ memory_record_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_memory_records">

Lists memory records in an AgentCore Memory resource based on specified criteria. We recommend using pagination to ensure that the operation returns quickly and successfully. To use this operation, you must have the bedrock-agentcore:ListMemoryRecords permission.

```sql
SELECT
content,
createdAt,
memoryRecordId,
memoryStrategyId,
metadata,
namespaces,
score
FROM aws.bedrock_agentcore.memory_records
WHERE memory_id = '{{ memory_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_memory_record"
    values={[
        { label: 'delete_memory_record', value: 'delete_memory_record' }
    ]}
>
<TabItem value="delete_memory_record">

Deletes a memory record from an AgentCore Memory resource. When you delete a memory record, it is permanently removed. To use this operation, you must have the bedrock-agentcore:DeleteMemoryRecord permission.

```sql
DELETE FROM aws.bedrock_agentcore.memory_records
WHERE memory_id = '{{ memory_id }}' --required
AND memory_record_id = '{{ memory_record_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_create_memory_records"
    values={[
        { label: 'batch_create_memory_records', value: 'batch_create_memory_records' },
        { label: 'batch_delete_memory_records', value: 'batch_delete_memory_records' },
        { label: 'batch_update_memory_records', value: 'batch_update_memory_records' },
        { label: 'retrieve_memory_records', value: 'retrieve_memory_records' }
    ]}
>
<TabItem value="batch_create_memory_records">

Creates multiple memory records in a single batch operation for the specified memory with custom content.

```sql
EXEC aws.bedrock_agentcore.memory_records.batch_create_memory_records 
@memory_id='{{ memory_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"records": "{{ records }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_memory_records">

Deletes multiple memory records in a single batch operation from the specified memory.

```sql
EXEC aws.bedrock_agentcore.memory_records.batch_delete_memory_records 
@memory_id='{{ memory_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"records": "{{ records }}"
}'
;
```
</TabItem>
<TabItem value="batch_update_memory_records">

Updates multiple memory records with custom content in a single batch operation within the specified memory.

```sql
EXEC aws.bedrock_agentcore.memory_records.batch_update_memory_records 
@memory_id='{{ memory_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"records": "{{ records }}"
}'
;
```
</TabItem>
<TabItem value="retrieve_memory_records">

Searches for and retrieves memory records from an AgentCore Memory resource based on specified search criteria. We recommend using pagination to ensure that the operation returns quickly and successfully. To use this operation, you must have the bedrock-agentcore:RetrieveMemoryRecords permission.

```sql
EXEC aws.bedrock_agentcore.memory_records.retrieve_memory_records 
@memory_id='{{ memory_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"namespace": "{{ namespace }}", 
"namespacePath": "{{ namespacePath }}", 
"searchCriteria": "{{ searchCriteria }}", 
"nextToken": "{{ nextToken }}", 
"maxResults": {{ maxResults }}
}'
;
```
</TabItem>
</Tabs>

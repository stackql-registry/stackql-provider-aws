--- 
title: retrieve_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - retrieve_streams
  - bedrock_agent_runtime
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

Creates, updates, deletes, gets or lists a <code>retrieve_streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="retrieve_streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent_runtime.retrieve_streams" /></td></tr>
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
    <td><a href="#agentic_retrieve_stream"><CopyableCode code="agentic_retrieve_stream" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agenticRetrieveConfiguration"><code>agenticRetrieveConfiguration</code></a>, <a href="#parameter-messages"><code>messages</code></a>, <a href="#parameter-retrievers"><code>retrievers</code></a></td>
    <td></td>
    <td>Retrieves information from one or more knowledge bases using an agentic approach. Agentic retrieval uses a foundation model to intelligently decompose complex queries into sub-queries and iteratively retrieve relevant information from your knowledge bases. This approach improves retrieval accuracy for complex, multi-step questions that a single retrieval pass might not fully address. The operation returns results through a stream that includes retrieval results, trace events for visibility into the process, and a generated response synthesized from the results by default, which can be turned off.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="agentic_retrieve_stream"
    values={[
        { label: 'agentic_retrieve_stream', value: 'agentic_retrieve_stream' }
    ]}
>
<TabItem value="agentic_retrieve_stream">

Retrieves information from one or more knowledge bases using an agentic approach. Agentic retrieval uses a foundation model to intelligently decompose complex queries into sub-queries and iteratively retrieve relevant information from your knowledge bases. This approach improves retrieval accuracy for complex, multi-step questions that a single retrieval pass might not fully address. The operation returns results through a stream that includes retrieval results, trace events for visibility into the process, and a generated response synthesized from the results by default, which can be turned off.

```sql
EXEC aws.bedrock_agent_runtime.retrieve_streams.agentic_retrieve_stream 
@region='{{ region }}' --required 
@@json=
'{
"agenticRetrieveConfiguration": "{{ agenticRetrieveConfiguration }}", 
"generateResponse": {{ generateResponse }}, 
"memoryConfiguration": "{{ memoryConfiguration }}", 
"messages": "{{ messages }}", 
"nextToken": "{{ nextToken }}", 
"policyConfiguration": "{{ policyConfiguration }}", 
"retrievers": "{{ retrievers }}", 
"userContext": "{{ userContext }}"
}'
;
```
</TabItem>
</Tabs>

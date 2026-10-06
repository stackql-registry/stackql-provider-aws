--- 
title: retrieves
hide_title: false
hide_table_of_contents: false
keywords:
  - retrieves
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

Creates, updates, deletes, gets or lists a <code>retrieves</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="retrieves" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent_runtime.retrieves" /></td></tr>
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
    <td><a href="#retrieve"><CopyableCode code="retrieve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-retrievalQuery"><code>retrievalQuery</code></a></td>
    <td></td>
    <td>Queries a knowledge base and retrieves information from it.</td>
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
<tr id="parameter-knowledge_base_id">
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the knowledge base to query.</td>
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
    defaultValue="retrieve"
    values={[
        { label: 'retrieve', value: 'retrieve' }
    ]}
>
<TabItem value="retrieve">

Queries a knowledge base and retrieves information from it.

```sql
EXEC aws.bedrock_agent_runtime.retrieves.retrieve 
@knowledge_base_id='{{ knowledge_base_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"guardrailConfiguration": "{{ guardrailConfiguration }}", 
"nextToken": "{{ nextToken }}", 
"retrievalConfiguration": "{{ retrievalConfiguration }}", 
"retrievalQuery": "{{ retrievalQuery }}", 
"userContext": "{{ userContext }}"
}'
;
```
</TabItem>
</Tabs>

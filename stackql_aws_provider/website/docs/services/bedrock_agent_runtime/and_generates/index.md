--- 
title: and_generates
hide_title: false
hide_table_of_contents: false
keywords:
  - and_generates
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

Creates, updates, deletes, gets or lists an <code>and_generates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="and_generates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent_runtime.and_generates" /></td></tr>
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
    <td><a href="#retrieve_and_generate"><CopyableCode code="retrieve_and_generate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-input"><code>input</code></a></td>
    <td></td>
    <td>Queries a knowledge base and generates responses based on the retrieved results and using the specified foundation model or inference profile. The response only cites sources that are relevant to the query. This API cannot be used with managed knowledge bases. Use AgenticRetrieveStream or Retrieve with managed knowledge bases.</td>
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
    defaultValue="retrieve_and_generate"
    values={[
        { label: 'retrieve_and_generate', value: 'retrieve_and_generate' }
    ]}
>
<TabItem value="retrieve_and_generate">

Queries a knowledge base and generates responses based on the retrieved results and using the specified foundation model or inference profile. The response only cites sources that are relevant to the query. This API cannot be used with managed knowledge bases. Use AgenticRetrieveStream or Retrieve with managed knowledge bases.

```sql
EXEC aws.bedrock_agent_runtime.and_generates.retrieve_and_generate 
@region='{{ region }}' --required 
@@json=
'{
"input": "{{ input }}", 
"retrieveAndGenerateConfiguration": "{{ retrieveAndGenerateConfiguration }}", 
"sessionConfiguration": "{{ sessionConfiguration }}", 
"sessionId": "{{ sessionId }}", 
"userContext": "{{ userContext }}"
}'
;
```
</TabItem>
</Tabs>

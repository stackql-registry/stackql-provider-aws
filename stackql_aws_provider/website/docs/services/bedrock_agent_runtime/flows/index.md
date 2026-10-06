--- 
title: flows
hide_title: false
hide_table_of_contents: false
keywords:
  - flows
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

Creates, updates, deletes, gets or lists a <code>flows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent_runtime.flows" /></td></tr>
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
    <td><a href="#invoke_flow"><CopyableCode code="invoke_flow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-flow_alias_identifier"><code>flow_alias_identifier</code></a>, <a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inputs"><code>inputs</code></a></td>
    <td></td>
    <td>Invokes an alias of a flow to run the inputs that you specify and return the output of each node as a stream. If there's an error, the error is returned. For more information, see Test a flow in Amazon Bedrock in the Amazon Bedrock User Guide. The CLI doesn't support streaming operations in Amazon Bedrock, including InvokeFlow.</td>
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
<tr id="parameter-flow_alias_identifier">
    <td><CopyableCode code="flow_alias_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow alias.</td>
</tr>
<tr id="parameter-flow_identifier">
    <td><CopyableCode code="flow_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow.</td>
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
    defaultValue="invoke_flow"
    values={[
        { label: 'invoke_flow', value: 'invoke_flow' }
    ]}
>
<TabItem value="invoke_flow">

Invokes an alias of a flow to run the inputs that you specify and return the output of each node as a stream. If there's an error, the error is returned. For more information, see Test a flow in Amazon Bedrock in the Amazon Bedrock User Guide. The CLI doesn't support streaming operations in Amazon Bedrock, including InvokeFlow.

```sql
EXEC aws.bedrock_agent_runtime.flows.invoke_flow 
@flow_alias_identifier='{{ flow_alias_identifier }}' --required, 
@flow_identifier='{{ flow_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"enableTrace": {{ enableTrace }}, 
"executionId": "{{ executionId }}", 
"inputs": "{{ inputs }}", 
"modelPerformanceConfiguration": "{{ modelPerformanceConfiguration }}"
}'
;
```
</TabItem>
</Tabs>

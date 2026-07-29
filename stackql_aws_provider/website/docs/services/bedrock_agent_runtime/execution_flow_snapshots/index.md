--- 
title: execution_flow_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - execution_flow_snapshots
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

Creates, updates, deletes, gets or lists an <code>execution_flow_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="execution_flow_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent_runtime.execution_flow_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_execution_flow_snapshot"
    values={[
        { label: 'get_execution_flow_snapshot', value: 'get_execution_flow_snapshot' }
    ]}
>
<TabItem value="get_execution_flow_snapshot">

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
    <td><CopyableCode code="customer_encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the customer managed KMS key that's used to encrypt the flow snapshot. (pattern: &lt;code&gt;^arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>string</code></td>
    <td>The flow definition used for the flow execution, including the nodes, connections, and configuration at the time when the execution started. The definition returns as a string that follows the structure of a FlowDefinition object.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM service role that's used by the flow execution. (pattern: &lt;code&gt;^arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/(service-role/)?.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flow_alias_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow alias used for the flow execution. (pattern: &lt;code&gt;^(arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:flow/&#91;0-9a-zA-Z&#93;&#123;10&#125;/alias/&#91;0-9a-zA-Z&#93;&#123;10&#125;)|(\bTSTALIASID\b|&#91;0-9a-zA-Z&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flow_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow. (pattern: &lt;code&gt;^(arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:flow/&#91;0-9a-zA-Z&#93;&#123;10&#125;)|(&#91;0-9a-zA-Z&#93;&#123;10&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flow_version" /></td>
    <td><code>string</code></td>
    <td>The version of the flow used for the flow execution. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;&#123;0,4&#125;&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)$&lt;/code&gt;)</td>
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
    <td><a href="#get_execution_flow_snapshot"><CopyableCode code="get_execution_flow_snapshot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-execution_identifier"><code>execution_identifier</code></a>, <a href="#parameter-flow_alias_identifier"><code>flow_alias_identifier</code></a>, <a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the flow definition snapshot used for a flow execution. The snapshot represents the flow metadata and definition as it existed at the time the execution was started. Note that even if the flow is edited after an execution starts, the snapshot connected to the execution remains unchanged. Flow executions is in preview release for Amazon Bedrock and is subject to change.</td>
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
<tr id="parameter-execution_identifier">
    <td><CopyableCode code="execution_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow execution.</td>
</tr>
<tr id="parameter-flow_alias_identifier">
    <td><CopyableCode code="flow_alias_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow alias used for the flow execution.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_execution_flow_snapshot"
    values={[
        { label: 'get_execution_flow_snapshot', value: 'get_execution_flow_snapshot' }
    ]}
>
<TabItem value="get_execution_flow_snapshot">

Retrieves the flow definition snapshot used for a flow execution. The snapshot represents the flow metadata and definition as it existed at the time the execution was started. Note that even if the flow is edited after an execution starts, the snapshot connected to the execution remains unchanged. Flow executions is in preview release for Amazon Bedrock and is subject to change.

```sql
SELECT
customer_encryption_key_arn,
definition,
execution_role_arn,
flow_alias_identifier,
flow_identifier,
flow_version
FROM aws.bedrock_agent_runtime.execution_flow_snapshots
WHERE execution_identifier = '{{ execution_identifier }}' -- required
AND flow_alias_identifier = '{{ flow_alias_identifier }}' -- required
AND flow_identifier = '{{ flow_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

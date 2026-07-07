--- 
title: flow_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_executions
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

Creates, updates, deletes, gets or lists a <code>flow_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flow_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent_runtime.flow_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_flow_execution"
    values={[
        { label: 'get_flow_execution', value: 'get_flow_execution' },
        { label: 'list_flow_executions', value: 'list_flow_executions' }
    ]}
>
<TabItem value="get_flow_execution">

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
    <td><CopyableCode code="endedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the flow execution ended. This field is only populated when the execution has completed, failed, timed out, or been aborted.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A list of errors that occurred during the flow execution. Each error includes an error code, message, and the node where the error occurred, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="executionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the flow execution. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-&#93;&#123;1,36&#125;$|^(arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:flow/&#91;0-9a-zA-Z&#93;&#123;10&#125;/alias/&#91;0-9a-zA-Z&#93;&#123;10&#125;/execution/&#91;a-zA-Z0-9-&#93;&#123;1,36&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flowAliasIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow alias used for the execution. (pattern: &lt;code&gt;^(arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:flow/&#91;0-9a-zA-Z&#93;&#123;10&#125;/alias/&#91;0-9a-zA-Z&#93;&#123;10&#125;)|(\bTSTALIASID\b|&#91;0-9a-zA-Z&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flowIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow. (pattern: &lt;code&gt;^(arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:flow/&#91;0-9a-zA-Z&#93;&#123;10&#125;)|(&#91;0-9a-zA-Z&#93;&#123;10&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flowVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the flow used for the execution. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;&#123;0,4&#125;&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the flow execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the flow execution. Flow executions time out after 24 hours. (Running, Succeeded, Failed, TimedOut, Aborted)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_flow_executions">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the flow execution was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the flow execution ended. This field is only populated when the execution has completed, failed, timed out, or been aborted.</td>
</tr>
<tr>
    <td><CopyableCode code="executionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the flow execution. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-&#93;&#123;1,36&#125;$|^(arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:flow/&#91;0-9a-zA-Z&#93;&#123;10&#125;/alias/&#91;0-9a-zA-Z&#93;&#123;10&#125;/execution/&#91;a-zA-Z0-9-&#93;&#123;1,36&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flowAliasIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow alias used for the execution. (pattern: &lt;code&gt;^(arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:flow/&#91;0-9a-zA-Z&#93;&#123;10&#125;/alias/&#91;0-9a-zA-Z&#93;&#123;10&#125;)|(\bTSTALIASID\b|&#91;0-9a-zA-Z&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flowIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow. (pattern: &lt;code&gt;^(arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:flow/&#91;0-9a-zA-Z&#93;&#123;10&#125;)|(&#91;0-9a-zA-Z&#93;&#123;10&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flowVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the flow used for the execution. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;&#123;0,4&#125;&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the flow execution. Flow executions time out after 24 hours. (Running, Succeeded, Failed, TimedOut, Aborted)</td>
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
    <td><a href="#get_flow_execution"><CopyableCode code="get_flow_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-execution_identifier"><code>execution_identifier</code></a>, <a href="#parameter-flow_alias_identifier"><code>flow_alias_identifier</code></a>, <a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a specific flow execution, including its status, start and end times, and any errors that occurred during execution.</td>
</tr>
<tr>
    <td><a href="#list_flow_executions"><CopyableCode code="list_flow_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-flowAliasIdentifier"><code>flowAliasIdentifier</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all executions of a flow. Results can be paginated and include summary information about each execution, such as status, start and end times, and the execution's Amazon Resource Name (ARN). Flow executions is in preview release for Amazon Bedrock and is subject to change.</td>
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
    <td>The unique identifier of the flow execution to retrieve.</td>
</tr>
<tr id="parameter-flow_alias_identifier">
    <td><CopyableCode code="flow_alias_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow alias used for the execution.</td>
</tr>
<tr id="parameter-flow_identifier">
    <td><CopyableCode code="flow_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow to list executions for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-flowAliasIdentifier">
    <td><CopyableCode code="flowAliasIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow alias to list executions for.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of flow executions to return in a single response. If more executions exist than the specified maxResults value, a token is included in the response so that the remaining results can be retrieved.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next set of results. This value is returned in the response if more results are available.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_flow_execution"
    values={[
        { label: 'get_flow_execution', value: 'get_flow_execution' },
        { label: 'list_flow_executions', value: 'list_flow_executions' }
    ]}
>
<TabItem value="get_flow_execution">

Retrieves details about a specific flow execution, including its status, start and end times, and any errors that occurred during execution.

```sql
SELECT
endedAt,
errors,
executionArn,
flowAliasIdentifier,
flowIdentifier,
flowVersion,
startedAt,
status
FROM aws.bedrock_agent_runtime.flow_executions
WHERE execution_identifier = '{{ execution_identifier }}' -- required
AND flow_alias_identifier = '{{ flow_alias_identifier }}' -- required
AND flow_identifier = '{{ flow_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_flow_executions">

Lists all executions of a flow. Results can be paginated and include summary information about each execution, such as status, start and end times, and the execution's Amazon Resource Name (ARN). Flow executions is in preview release for Amazon Bedrock and is subject to change.

```sql
SELECT
createdAt,
endedAt,
executionArn,
flowAliasIdentifier,
flowIdentifier,
flowVersion,
status
FROM aws.bedrock_agent_runtime.flow_executions
WHERE flow_identifier = '{{ flow_identifier }}' -- required
AND region = '{{ region }}' -- required
AND flowAliasIdentifier = '{{ flowAliasIdentifier }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>

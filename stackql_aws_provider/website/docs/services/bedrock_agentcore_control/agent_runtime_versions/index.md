--- 
title: agent_runtime_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_runtime_versions
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists an <code>agent_runtime_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_runtime_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.agent_runtime_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_agent_runtime_versions"
    values={[
        { label: 'list_agent_runtime_versions', value: 'list_agent_runtime_versions' }
    ]}
>
<TabItem value="list_agent_runtime_versions">

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
    <td><CopyableCode code="agentRuntimeArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the agent runtime. (pattern: &lt;code&gt;arn:(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:agent/&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;:(&#91;0-9&#93;&#123;0,4&#125;&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentRuntimeId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent runtime. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentRuntimeName" /></td>
    <td><code>string</code></td>
    <td>The name of the agent runtime. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentRuntimeVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the agent runtime. (pattern: &lt;code&gt;(&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the agent runtime.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the agent runtime was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the agent runtime. (CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, READY, DELETING)</td>
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
    <td><a href="#list_agent_runtime_versions"><CopyableCode code="list_agent_runtime_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_runtime_id"><code>agent_runtime_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all versions of a specific Amazon Secure Agent.</td>
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
<tr id="parameter-agent_runtime_id">
    <td><CopyableCode code="agent_runtime_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the AgentCore Runtime to list versions for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_agent_runtime_versions"
    values={[
        { label: 'list_agent_runtime_versions', value: 'list_agent_runtime_versions' }
    ]}
>
<TabItem value="list_agent_runtime_versions">

Lists all versions of a specific Amazon Secure Agent.

```sql
SELECT
agentRuntimeArn,
agentRuntimeId,
agentRuntimeName,
agentRuntimeVersion,
description,
lastUpdatedAt,
status
FROM aws.bedrock_agentcore_control.agent_runtime_versions
WHERE agent_runtime_id = '{{ agent_runtime_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>

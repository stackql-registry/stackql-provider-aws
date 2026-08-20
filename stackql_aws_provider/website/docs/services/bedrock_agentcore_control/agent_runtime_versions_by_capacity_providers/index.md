--- 
title: agent_runtime_versions_by_capacity_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_runtime_versions_by_capacity_providers
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

Creates, updates, deletes, gets or lists an <code>agent_runtime_versions_by_capacity_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_runtime_versions_by_capacity_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.agent_runtime_versions_by_capacity_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_agent_runtime_versions_by_capacity_provider"
    values={[
        { label: 'list_agent_runtime_versions_by_capacity_provider', value: 'list_agent_runtime_versions_by_capacity_provider' }
    ]}
>
<TabItem value="list_agent_runtime_versions_by_capacity_provider">

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
    <td><CopyableCode code="agent_runtime_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the agent runtime. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:runtime/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_runtime_version" /></td>
    <td><code>string</code></td>
    <td>The version of the agent runtime. (pattern: &lt;code&gt;(&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the agent runtime version. (CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, READY, DELETING)</td>
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
    <td><a href="#list_agent_runtime_versions_by_capacity_provider"><CopyableCode code="list_agent_runtime_versions_by_capacity_provider" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-capacity_provider_id"><code>capacity_provider_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the agent runtime versions that are associated with a capacity provider. Use this operation to identify the runtimes you must disassociate before you can delete the capacity provider. Results are paginated; use the nextToken parameter to retrieve additional results.</td>
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
<tr id="parameter-capacity_provider_id">
    <td><CopyableCode code="capacity_provider_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the capacity provider.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_agent_runtime_versions_by_capacity_provider"
    values={[
        { label: 'list_agent_runtime_versions_by_capacity_provider', value: 'list_agent_runtime_versions_by_capacity_provider' }
    ]}
>
<TabItem value="list_agent_runtime_versions_by_capacity_provider">

Lists the agent runtime versions that are associated with a capacity provider. Use this operation to identify the runtimes you must disassociate before you can delete the capacity provider. Results are paginated; use the nextToken parameter to retrieve additional results.

```sql
SELECT
agent_runtime_arn,
agent_runtime_version,
status
FROM aws.bedrock_agentcore_control.agent_runtime_versions_by_capacity_providers
WHERE capacity_provider_id = '{{ capacity_provider_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>

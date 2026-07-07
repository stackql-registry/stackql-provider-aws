--- 
title: agents
hide_title: false
hide_table_of_contents: false
keywords:
  - agents
  - discovery
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

Creates, updates, deletes, gets or lists an <code>agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.discovery.agents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_agents"
    values={[
        { label: 'describe_agents', value: 'describe_agents' }
    ]}
>
<TabItem value="describe_agents">

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
    <td><CopyableCode code="agentId" /></td>
    <td><code>string</code></td>
    <td>The agent or collector ID. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agentNetworkInfoList" /></td>
    <td><code>array</code></td>
    <td>Network details about the host where the agent or collector resides.</td>
</tr>
<tr>
    <td><CopyableCode code="agentType" /></td>
    <td><code>string</code></td>
    <td>Type of agent. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collectionStatus" /></td>
    <td><code>string</code></td>
    <td>Status of the collection process for an agent. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connectorId" /></td>
    <td><code>string</code></td>
    <td>The ID of the connector. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>string</code></td>
    <td>The health of the agent. (HEALTHY, UNHEALTHY, RUNNING, UNKNOWN, BLACKLISTED, SHUTDOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="hostName" /></td>
    <td><code>string</code></td>
    <td>The name of the host where the agent or collector resides. The host can be a server or virtual machine. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastHealthPingTime" /></td>
    <td><code>string</code></td>
    <td>Time since agent health was reported. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registeredTime" /></td>
    <td><code>string</code></td>
    <td>Agent's first registration timestamp in UTC. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The agent or collector version. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_agents"><CopyableCode code="describe_agents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists agents or collectors as specified by ID or other filters. All agents/collectors associated with your user can be listed if you call DescribeAgents as is without passing any parameters.</td>
</tr>
<tr>
    <td><a href="#batch_delete_agents"><CopyableCode code="batch_delete_agents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-deleteAgents"><code>deleteAgents</code></a></td>
    <td></td>
    <td>Deletes one or more agents or collectors as specified by ID. Deleting an agent or collector does not delete the previously discovered data. To delete the data collected, use StartBatchDeleteConfigurationTask.</td>
</tr>
<tr>
    <td><a href="#start_data_collection_by_agent_ids"><CopyableCode code="start_data_collection_by_agent_ids" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentIds"><code>agentIds</code></a></td>
    <td></td>
    <td>Instructs the specified agents to start collecting data.</td>
</tr>
<tr>
    <td><a href="#stop_data_collection_by_agent_ids"><CopyableCode code="stop_data_collection_by_agent_ids" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentIds"><code>agentIds</code></a></td>
    <td></td>
    <td>Instructs the specified agents to stop collecting data.</td>
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
    defaultValue="describe_agents"
    values={[
        { label: 'describe_agents', value: 'describe_agents' }
    ]}
>
<TabItem value="describe_agents">

Lists agents or collectors as specified by ID or other filters. All agents/collectors associated with your user can be listed if you call DescribeAgents as is without passing any parameters.

```sql
SELECT
agentId,
agentNetworkInfoList,
agentType,
collectionStatus,
connectorId,
health,
hostName,
lastHealthPingTime,
registeredTime,
version
FROM aws.discovery.agents
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_agents"
    values={[
        { label: 'batch_delete_agents', value: 'batch_delete_agents' },
        { label: 'start_data_collection_by_agent_ids', value: 'start_data_collection_by_agent_ids' },
        { label: 'stop_data_collection_by_agent_ids', value: 'stop_data_collection_by_agent_ids' }
    ]}
>
<TabItem value="batch_delete_agents">

Deletes one or more agents or collectors as specified by ID. Deleting an agent or collector does not delete the previously discovered data. To delete the data collected, use StartBatchDeleteConfigurationTask.

```sql
EXEC aws.discovery.agents.batch_delete_agents 
@region='{{ region }}' --required 
@@json=
'{
"deleteAgents": "{{ deleteAgents }}"
}'
;
```
</TabItem>
<TabItem value="start_data_collection_by_agent_ids">

Instructs the specified agents to start collecting data.

```sql
EXEC aws.discovery.agents.start_data_collection_by_agent_ids 
@region='{{ region }}' --required 
@@json=
'{
"agentIds": "{{ agentIds }}"
}'
;
```
</TabItem>
<TabItem value="stop_data_collection_by_agent_ids">

Instructs the specified agents to stop collecting data.

```sql
EXEC aws.discovery.agents.stop_data_collection_by_agent_ids 
@region='{{ region }}' --required 
@@json=
'{
"agentIds": "{{ agentIds }}"
}'
;
```
</TabItem>
</Tabs>

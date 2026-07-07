--- 
title: assessment_run_agents
hide_title: false
hide_table_of_contents: false
keywords:
  - assessment_run_agents
  - inspector
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

Creates, updates, deletes, gets or lists an <code>assessment_run_agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assessment_run_agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector.assessment_run_agents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_assessment_run_agents"
    values={[
        { label: 'list_assessment_run_agents', value: 'list_assessment_run_agents' }
    ]}
>
<TabItem value="list_assessment_run_agents">

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
    <td><CopyableCode code="agentHealth" /></td>
    <td><code>string</code></td>
    <td>The current health state of the agent. (HEALTHY, UNHEALTHY, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="agentHealthCode" /></td>
    <td><code>string</code></td>
    <td>The detailed health state of the agent. (IDLE, RUNNING, SHUTDOWN, UNHEALTHY, THROTTLED, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="agentHealthDetails" /></td>
    <td><code>string</code></td>
    <td>The description for the agent health code.</td>
</tr>
<tr>
    <td><CopyableCode code="agentId" /></td>
    <td><code>string</code></td>
    <td>The AWS account of the EC2 instance where the agent is installed.</td>
</tr>
<tr>
    <td><CopyableCode code="assessmentRunArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the assessment run that is associated with the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="autoScalingGroup" /></td>
    <td><code>string</code></td>
    <td>The Auto Scaling group of the EC2 instance that is specified by the agent ID.</td>
</tr>
<tr>
    <td><CopyableCode code="telemetryMetadata" /></td>
    <td><code>array</code></td>
    <td>The Amazon Inspector application data metrics that are collected by the agent.</td>
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
    <td><a href="#list_assessment_run_agents"><CopyableCode code="list_assessment_run_agents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the agents of the assessment runs that are specified by the ARNs of the assessment runs.</td>
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
    defaultValue="list_assessment_run_agents"
    values={[
        { label: 'list_assessment_run_agents', value: 'list_assessment_run_agents' }
    ]}
>
<TabItem value="list_assessment_run_agents">

Lists the agents of the assessment runs that are specified by the ARNs of the assessment runs.

```sql
SELECT
agentHealth,
agentHealthCode,
agentHealthDetails,
agentId,
assessmentRunArn,
autoScalingGroup,
telemetryMetadata
FROM aws.inspector.assessment_run_agents
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

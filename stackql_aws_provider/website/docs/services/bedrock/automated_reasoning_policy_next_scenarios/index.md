--- 
title: automated_reasoning_policy_next_scenarios
hide_title: false
hide_table_of_contents: false
keywords:
  - automated_reasoning_policy_next_scenarios
  - bedrock
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

Creates, updates, deletes, gets or lists an <code>automated_reasoning_policy_next_scenarios</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automated_reasoning_policy_next_scenarios" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.automated_reasoning_policy_next_scenarios" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automated_reasoning_policy_next_scenario"
    values={[
        { label: 'get_automated_reasoning_policy_next_scenario', value: 'get_automated_reasoning_policy_next_scenario' }
    ]}
>
<TabItem value="get_automated_reasoning_policy_next_scenario">

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
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Automated Reasoning policy. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:automated-reasoning-policy/&#91;a-z0-9&#93;&#123;12&#125;(:(&#91;1-9&#93;&#91;0-9&#93;&#123;0,11&#125;))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scenario" /></td>
    <td><code>object</code></td>
    <td>Represents a test scenario used to validate an Automated Reasoning policy, including the test conditions and expected outcomes.</td>
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
    <td><a href="#get_automated_reasoning_policy_next_scenario"><CopyableCode code="get_automated_reasoning_policy_next_scenario" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-build_workflow_id"><code>build_workflow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the next test scenario for validating an Automated Reasoning policy. This is used during the interactive policy refinement process to test policy behavior.</td>
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
<tr id="parameter-build_workflow_id">
    <td><CopyableCode code="build_workflow_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the build workflow associated with the test scenarios.</td>
</tr>
<tr id="parameter-policy_arn">
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Automated Reasoning policy for which you want to get the next test scenario.</td>
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
    defaultValue="get_automated_reasoning_policy_next_scenario"
    values={[
        { label: 'get_automated_reasoning_policy_next_scenario', value: 'get_automated_reasoning_policy_next_scenario' }
    ]}
>
<TabItem value="get_automated_reasoning_policy_next_scenario">

Retrieves the next test scenario for validating an Automated Reasoning policy. This is used during the interactive policy refinement process to test policy behavior.

```sql
SELECT
policy_arn,
scenario
FROM aws.bedrock.automated_reasoning_policy_next_scenarios
WHERE policy_arn = '{{ policy_arn }}' -- required
AND build_workflow_id = '{{ build_workflow_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

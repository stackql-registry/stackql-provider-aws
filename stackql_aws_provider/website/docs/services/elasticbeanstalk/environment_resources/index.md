--- 
title: environment_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_resources
  - elasticbeanstalk
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

Creates, updates, deletes, gets or lists an <code>environment_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.environment_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_environment_resources"
    values={[
        { label: 'describe_environment_resources', value: 'describe_environment_resources' }
    ]}
>
<TabItem value="describe_environment_resources">

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
    <td><CopyableCode code="AutoScalingGroups" /></td>
    <td><code>string</code></td>
    <td>The AutoScalingGroups used by this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="EnvironmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="Instances" /></td>
    <td><code>string</code></td>
    <td>The Amazon EC2 instances used by this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="LaunchConfigurations" /></td>
    <td><code>string</code></td>
    <td>The Auto Scaling launch configurations in use by this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="LaunchTemplates" /></td>
    <td><code>string</code></td>
    <td>The Amazon EC2 launch templates in use by this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="LoadBalancers" /></td>
    <td><code>string</code></td>
    <td>The LoadBalancers in use by this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="Queues" /></td>
    <td><code>string</code></td>
    <td>The queues used by this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="Triggers" /></td>
    <td><code>string</code></td>
    <td>The AutoScaling triggers in use by this environment.</td>
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
    <td><a href="#describe_environment_resources"><CopyableCode code="describe_environment_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnvironmentId"><code>EnvironmentId</code></a>, <a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a></td>
    <td>Returns AWS resources for this environment.</td>
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
<tr id="parameter-EnvironmentId">
    <td><CopyableCode code="EnvironmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment to retrieve AWS resource usage data. Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error.</td>
</tr>
<tr id="parameter-EnvironmentName">
    <td><CopyableCode code="EnvironmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the environment to retrieve AWS resource usage data. Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_environment_resources"
    values={[
        { label: 'describe_environment_resources', value: 'describe_environment_resources' }
    ]}
>
<TabItem value="describe_environment_resources">

Returns AWS resources for this environment.

```sql
SELECT
AutoScalingGroups,
EnvironmentName,
Instances,
LaunchConfigurations,
LaunchTemplates,
LoadBalancers,
Queues,
Triggers
FROM aws.elasticbeanstalk.environment_resources
WHERE region = '{{ region }}' -- required
AND EnvironmentId = '{{ EnvironmentId }}'
AND EnvironmentName = '{{ EnvironmentName }}'
;
```
</TabItem>
</Tabs>

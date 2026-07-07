--- 
title: termination_policy_types
hide_title: false
hide_table_of_contents: false
keywords:
  - termination_policy_types
  - autoscaling
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

Creates, updates, deletes, gets or lists a <code>termination_policy_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="termination_policy_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.termination_policy_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_termination_policy_types"
    values={[
        { label: 'describe_termination_policy_types', value: 'describe_termination_policy_types' }
    ]}
>
<TabItem value="describe_termination_policy_types">

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
    <td><CopyableCode code="termination_policy_type" /></td>
    <td><code>string</code></td>
    <td>The termination policies supported by Amazon EC2 Auto Scaling: OldestInstance, OldestLaunchConfiguration, NewestInstance, ClosestToNextInstanceHour, Default, OldestLaunchTemplate, and AllocationStrategy.</td>
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
    <td><a href="#describe_termination_policy_types"><CopyableCode code="describe_termination_policy_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the termination policies supported by Amazon EC2 Auto Scaling. For more information, see Configure termination policies for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.</td>
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
    defaultValue="describe_termination_policy_types"
    values={[
        { label: 'describe_termination_policy_types', value: 'describe_termination_policy_types' }
    ]}
>
<TabItem value="describe_termination_policy_types">

Describes the termination policies supported by Amazon EC2 Auto Scaling. For more information, see Configure termination policies for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.

```sql
SELECT
termination_policy_type
FROM aws.autoscaling.termination_policy_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

--- 
title: discoveries
hide_title: false
hide_table_of_contents: false
keywords:
  - discoveries
  - application_signals
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

Creates, updates, deletes, gets or lists a <code>discoveries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="discoveries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_signals.discoveries" /></td></tr>
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
    <td><a href="#start_discovery"><CopyableCode code="start_discovery" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables this Amazon Web Services account to be able to use CloudWatch Application Signals by creating the AWSServiceRoleForCloudWatchApplicationSignals service-linked role. This service- linked role has the following permissions: xray:GetServiceGraph logs:StartQuery logs:GetQueryResults cloudwatch:GetMetricData cloudwatch:ListMetrics tag:GetResources autoscaling:DescribeAutoScalingGroups A service-linked CloudTrail event channel is created to process CloudTrail events and return change event information. This includes last deployment time, userName, eventName, and other event metadata. After completing this step, you still need to instrument your Java and Python applications to send data to Application Signals. For more information, see Enabling Application Signals.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="start_discovery"
    values={[
        { label: 'start_discovery', value: 'start_discovery' }
    ]}
>
<TabItem value="start_discovery">

Enables this Amazon Web Services account to be able to use CloudWatch Application Signals by creating the AWSServiceRoleForCloudWatchApplicationSignals service-linked role. This service- linked role has the following permissions: xray:GetServiceGraph logs:StartQuery logs:GetQueryResults cloudwatch:GetMetricData cloudwatch:ListMetrics tag:GetResources autoscaling:DescribeAutoScalingGroups A service-linked CloudTrail event channel is created to process CloudTrail events and return change event information. This includes last deployment time, userName, eventName, and other event metadata. After completing this step, you still need to instrument your Java and Python applications to send data to Application Signals. For more information, see Enabling Application Signals.

```sql
EXEC aws.application_signals.discoveries.start_discovery 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>

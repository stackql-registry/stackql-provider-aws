--- 
title: scaling_activities
hide_title: false
hide_table_of_contents: false
keywords:
  - scaling_activities
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

Creates, updates, deletes, gets or lists a <code>scaling_activities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scaling_activities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.scaling_activities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scaling_activities"
    values={[
        { label: 'describe_scaling_activities', value: 'describe_scaling_activities' }
    ]}
>
<TabItem value="describe_scaling_activities">

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
    <td><CopyableCode code="ActivityId" /></td>
    <td><code>string</code></td>
    <td>The ID of the activity.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoScalingGroupARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoScalingGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoScalingGroupState" /></td>
    <td><code>string</code></td>
    <td>The state of the Auto Scaling group, which is either InService or Deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="Cause" /></td>
    <td><code>string</code></td>
    <td>The reason the activity began.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A friendly, more verbose description of the activity.</td>
</tr>
<tr>
    <td><CopyableCode code="Details" /></td>
    <td><code>string</code></td>
    <td>The details about the activity.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string</code></td>
    <td>The end time of the activity.</td>
</tr>
<tr>
    <td><CopyableCode code="Progress" /></td>
    <td><code>integer</code></td>
    <td>A value between 0 and 100 that indicates the progress of the activity.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string</code></td>
    <td>The start time of the activity.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusCode" /></td>
    <td><code>string</code></td>
    <td>The current status of the activity.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A friendly, more verbose description of the activity status.</td>
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
    <td><a href="#describe_scaling_activities"><CopyableCode code="describe_scaling_activities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ActivityIds"><code>ActivityIds</code></a>, <a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-IncludeDeletedGroups"><code>IncludeDeletedGroups</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filters"><code>Filters</code></a></td>
    <td>Gets information about the scaling activities in the account and Region. When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see Verify a scaling activity for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. If the scaling event succeeds, the value of the StatusCode element in the response is Successful. If an attempt to launch instances failed, the StatusCode value is Failed or Cancelled and the StatusMessage element in the response indicates the cause of the failure. For help interpreting the StatusMessage, see Troubleshooting Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.</td>
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
<tr id="parameter-ActivityIds">
    <td><CopyableCode code="ActivityIds" /></td>
    <td><code>array</code></td>
    <td>The activity IDs of the desired scaling activities. If unknown activity IDs are requested, they are ignored with no error. Only activities started within the last six weeks can be returned regardless of the activity IDs specified. If other filters are specified with the request, only results matching all filter criteria can be returned. Array Members: Maximum number of 50 IDs.</td>
</tr>
<tr id="parameter-AutoScalingGroupName">
    <td><CopyableCode code="AutoScalingGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the Auto Scaling group. Omitting this property performs an account-wide operation, which can result in slower or timed-out requests.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>One or more filters to limit the results based on specific criteria. The following filters are supported: StartTimeLowerBound - The earliest scaling activities to return based on the activity start time. Scaling activities with a start time earlier than this value are not included in the results. Only activities started within the last six weeks can be returned regardless of the value specified. StartTimeUpperBound - The latest scaling activities to return based on the activity start time. Scaling activities with a start time later than this value are not included in the results. Only activities started within the last six weeks can be returned regardless of the value specified. Status - The StatusCode value of the scaling activity. This filter can only be used in combination with the AutoScalingGroupName parameter. For valid StatusCode values, see Activity in the Amazon EC2 Auto Scaling API Reference. StartTimeLowerBound and StartTimeUpperBound accept ISO 8601 formatted timestamps. Timestamps without a timezone offset are assumed to be UTC. 2000-01-18T08:15:00Z 2000-01-18T16:15:00+08:00</td>
</tr>
<tr id="parameter-IncludeDeletedGroups">
    <td><CopyableCode code="IncludeDeletedGroups" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to include scaling activity from deleted Auto Scaling groups.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return with this call. The default value is 100 and the maximum value is 100.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_scaling_activities"
    values={[
        { label: 'describe_scaling_activities', value: 'describe_scaling_activities' }
    ]}
>
<TabItem value="describe_scaling_activities">

Gets information about the scaling activities in the account and Region. When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see Verify a scaling activity for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. If the scaling event succeeds, the value of the StatusCode element in the response is Successful. If an attempt to launch instances failed, the StatusCode value is Failed or Cancelled and the StatusMessage element in the response indicates the cause of the failure. For help interpreting the StatusMessage, see Troubleshooting Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.

```sql
SELECT
ActivityId,
AutoScalingGroupARN,
AutoScalingGroupName,
AutoScalingGroupState,
Cause,
Description,
Details,
EndTime,
Progress,
StartTime,
StatusCode,
StatusMessage
FROM aws.autoscaling.scaling_activities
WHERE region = '{{ region }}' -- required
AND ActivityIds = '{{ ActivityIds }}'
AND AutoScalingGroupName = '{{ AutoScalingGroupName }}'
AND IncludeDeletedGroups = '{{ IncludeDeletedGroups }}'
AND MaxRecords = '{{ MaxRecords }}'
AND NextToken = '{{ NextToken }}'
AND Filters = '{{ Filters }}'
;
```
</TabItem>
</Tabs>

--- 
title: instances_healths
hide_title: false
hide_table_of_contents: false
keywords:
  - instances_healths
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

Creates, updates, deletes, gets or lists an <code>instances_healths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances_healths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.instances_healths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instances_health"
    values={[
        { label: 'describe_instances_health', value: 'describe_instances_health' }
    ]}
>
<TabItem value="describe_instances_health">

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
    <td><CopyableCode code="ApplicationMetrics" /></td>
    <td><code>string</code></td>
    <td>Request metrics from your application.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The availability zone in which the instance runs.</td>
</tr>
<tr>
    <td><CopyableCode code="Causes" /></td>
    <td><code>string</code></td>
    <td>Represents the causes, which provide more information about the current health status.</td>
</tr>
<tr>
    <td><CopyableCode code="Color" /></td>
    <td><code>string</code></td>
    <td>Represents the color indicator that gives you information about the health of the EC2 instance. For more information, see Health Colors and Statuses.</td>
</tr>
<tr>
    <td><CopyableCode code="Deployment" /></td>
    <td><code>string</code></td>
    <td>Information about the most recent deployment to an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthStatus" /></td>
    <td><code>string</code></td>
    <td>Returns the health status of the specified instance. For more information, see Health Colors and Statuses.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon EC2 instance.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The instance's type.</td>
</tr>
<tr>
    <td><CopyableCode code="LaunchedAt" /></td>
    <td><code>string</code></td>
    <td>The time at which the EC2 instance was launched.</td>
</tr>
<tr>
    <td><CopyableCode code="System" /></td>
    <td><code>string</code></td>
    <td>Operating system metrics from the instance.</td>
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
    <td><a href="#describe_instances_health"><CopyableCode code="describe_instances_health" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a>, <a href="#parameter-EnvironmentId"><code>EnvironmentId</code></a>, <a href="#parameter-AttributeNames"><code>AttributeNames</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires enhanced health reporting.</td>
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
<tr id="parameter-AttributeNames">
    <td><CopyableCode code="AttributeNames" /></td>
    <td><code>array</code></td>
    <td>Specifies the response elements you wish to receive. To retrieve all attributes, set to All. If no attribute names are specified, returns a list of instances.</td>
</tr>
<tr id="parameter-EnvironmentId">
    <td><CopyableCode code="EnvironmentId" /></td>
    <td><code>string</code></td>
    <td>Specify the AWS Elastic Beanstalk environment by ID.</td>
</tr>
<tr id="parameter-EnvironmentName">
    <td><CopyableCode code="EnvironmentName" /></td>
    <td><code>string</code></td>
    <td>Specify the AWS Elastic Beanstalk environment by name.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token returned by a previous call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instances_health"
    values={[
        { label: 'describe_instances_health', value: 'describe_instances_health' }
    ]}
>
<TabItem value="describe_instances_health">

Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires enhanced health reporting.

```sql
SELECT
ApplicationMetrics,
AvailabilityZone,
Causes,
Color,
Deployment,
HealthStatus,
InstanceId,
InstanceType,
LaunchedAt,
System
FROM aws.elasticbeanstalk.instances_healths
WHERE region = '{{ region }}' -- required
AND EnvironmentName = '{{ EnvironmentName }}'
AND EnvironmentId = '{{ EnvironmentId }}'
AND AttributeNames = '{{ AttributeNames }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>

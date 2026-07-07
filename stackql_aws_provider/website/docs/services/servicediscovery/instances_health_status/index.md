--- 
title: instances_health_status
hide_title: false
hide_table_of_contents: false
keywords:
  - instances_health_status
  - servicediscovery
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

Creates, updates, deletes, gets or lists an <code>instances_health_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances_health_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicediscovery.instances_health_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instances_health_status"
    values={[
        { label: 'get_instances_health_status', value: 'get_instances_health_status' }
    ]}
>
<TabItem value="get_instances_health_status">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If more than MaxResults instances match the specified criteria, you can submit another GetInstancesHealthStatus request to get the next group of results. Specify the value of NextToken from the previous response in the next request.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>object</code></td>
    <td>A complex type that contains the IDs and the health status of the instances that you specified in the GetInstancesHealthStatus request.</td>
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
    <td><a href="#get_instances_health_status"><CopyableCode code="get_instances_health_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the current health status (Healthy, Unhealthy, or Unknown) of one or more instances that are associated with a specified service. There's a brief delay between when you register an instance and when the health status for the instance is available.</td>
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
    defaultValue="get_instances_health_status"
    values={[
        { label: 'get_instances_health_status', value: 'get_instances_health_status' }
    ]}
>
<TabItem value="get_instances_health_status">

Gets the current health status (Healthy, Unhealthy, or Unknown) of one or more instances that are associated with a specified service. There's a brief delay between when you register an instance and when the health status for the instance is available.

```sql
SELECT
NextToken,
Status
FROM aws.servicediscovery.instances_health_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

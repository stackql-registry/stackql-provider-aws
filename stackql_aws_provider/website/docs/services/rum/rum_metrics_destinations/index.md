--- 
title: rum_metrics_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_metrics_destinations
  - rum
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

Creates, updates, deletes, gets or lists a <code>rum_metrics_destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_metrics_destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rum.rum_metrics_destinations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_rum_metrics_destinations"
    values={[
        { label: 'list_rum_metrics_destinations', value: 'list_rum_metrics_destinations' }
    ]}
>
<TabItem value="list_rum_metrics_destinations">

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
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the destination is CloudWatch or Evidently. (CloudWatch, Evidently)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_arn" /></td>
    <td><code>string</code></td>
    <td>If the destination is Evidently, this specifies the ARN of the Evidently experiment that receives the metrics. (pattern: &lt;code&gt;.*arn:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>This field appears only when the destination is Evidently. It specifies the ARN of the IAM role that is used to write to the Evidently experiment that receives the metrics. (pattern: &lt;code&gt;.*arn:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:.*&lt;/code&gt;)</td>
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
    <td><a href="#list_rum_metrics_destinations"><CopyableCode code="list_rum_metrics_destinations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_monitor_name"><code>app_monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of destinations that you have created to receive RUM extended metrics, for the specified app monitor. For more information about extended metrics, see AddRumMetrics.</td>
</tr>
<tr>
    <td><a href="#put_rum_metrics_destination"><CopyableCode code="put_rum_metrics_destination" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-app_monitor_name"><code>app_monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates or updates a destination to receive extended metrics from CloudWatch RUM. You can send extended metrics to CloudWatch or to a CloudWatch Evidently experiment. For more information about extended metrics, see BatchCreateRumMetricDefinitions.</td>
</tr>
<tr>
    <td><a href="#delete_rum_metrics_destination"><CopyableCode code="delete_rum_metrics_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_monitor_name"><code>app_monitor_name</code></a>, <a href="#parameter-destination"><code>destination</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-destinationArn"><code>destinationArn</code></a></td>
    <td>Deletes a destination for CloudWatch RUM extended metrics, so that the specified app monitor stops sending extended metrics to that destination.</td>
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
<tr id="parameter-app_monitor_name">
    <td><CopyableCode code="app_monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the app monitor that is sending metrics to the destination that you want to delete.</td>
</tr>
<tr id="parameter-destination">
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>The type of destination to delete. Valid values are CloudWatch and Evidently.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-destinationArn">
    <td><CopyableCode code="destinationArn" /></td>
    <td><code>string</code></td>
    <td>This parameter is required if Destination is Evidently. If Destination is CloudWatch, do not use this parameter. This parameter specifies the ARN of the Evidently experiment that corresponds to the destination to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in one operation. The default is 50. The maximum that you can specify is 100. To retrieve the remaining results, make another call with the returned NextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Use the token returned by the previous operation to request the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_rum_metrics_destinations"
    values={[
        { label: 'list_rum_metrics_destinations', value: 'list_rum_metrics_destinations' }
    ]}
>
<TabItem value="list_rum_metrics_destinations">

Returns a list of destinations that you have created to receive RUM extended metrics, for the specified app monitor. For more information about extended metrics, see AddRumMetrics.

```sql
SELECT
destination,
destination_arn,
iam_role_arn
FROM aws.rum.rum_metrics_destinations
WHERE app_monitor_name = '{{ app_monitor_name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_rum_metrics_destination"
    values={[
        { label: 'put_rum_metrics_destination', value: 'put_rum_metrics_destination' }
    ]}
>
<TabItem value="put_rum_metrics_destination">

Creates or updates a destination to receive extended metrics from CloudWatch RUM. You can send extended metrics to CloudWatch or to a CloudWatch Evidently experiment. For more information about extended metrics, see BatchCreateRumMetricDefinitions.

```sql
REPLACE aws.rum.rum_metrics_destinations
SET 
Destination = '{{ Destination }}',
DestinationArn = '{{ DestinationArn }}',
IamRoleArn = '{{ IamRoleArn }}'
WHERE 
app_monitor_name = '{{ app_monitor_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rum_metrics_destination"
    values={[
        { label: 'delete_rum_metrics_destination', value: 'delete_rum_metrics_destination' }
    ]}
>
<TabItem value="delete_rum_metrics_destination">

Deletes a destination for CloudWatch RUM extended metrics, so that the specified app monitor stops sending extended metrics to that destination.

```sql
DELETE FROM aws.rum.rum_metrics_destinations
WHERE app_monitor_name = '{{ app_monitor_name }}' --required
AND destination = '{{ destination }}' --required
AND region = '{{ region }}' --required
AND destinationArn = '{{ destinationArn }}'
;
```
</TabItem>
</Tabs>

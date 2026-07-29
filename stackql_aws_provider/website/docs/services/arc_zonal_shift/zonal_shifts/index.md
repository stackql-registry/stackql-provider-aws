--- 
title: zonal_shifts
hide_title: false
hide_table_of_contents: false
keywords:
  - zonal_shifts
  - arc_zonal_shift
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

Creates, updates, deletes, gets or lists a <code>zonal_shifts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="zonal_shifts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.arc_zonal_shift.zonal_shifts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_zonal_shifts"
    values={[
        { label: 'list_zonal_shifts', value: 'list_zonal_shifts' }
    ]}
>
<TabItem value="list_zonal_shifts">

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
    <td><CopyableCode code="away_from" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone (for example, use1-az1) that traffic is moved away from for a resource when you start a zonal shift. Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. That is, a new comment overwrites any existing comment string.</td>
</tr>
<tr>
    <td><CopyableCode code="expiry_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiry time (expiration time) for a customer-initiated zonal shift. A zonal shift is temporary and must be set to expire when you start the zonal shift. You can initially set a zonal shift to expire in a maximum of three days (72 hours). However, you can update a zonal shift to set a new expiration at any time. When you start a zonal shift, you specify how long you want it to be active, which ARC converts to an expiry time (expiration time). You can cancel a zonal shift when you're ready to restore traffic to the Availability Zone, or just wait for it to expire. Or you can update the zonal shift to specify another length of time to expire in.</td>
</tr>
<tr>
    <td><CopyableCode code="practice_run_outcome" /></td>
    <td><code>string</code></td>
    <td>The outcome, or end state, of a practice run. The following values can be returned: PENDING: Outcome value when the practice run is in progress. SUCCEEDED: Outcome value when the outcome alarm specified for the practice run configuration does not go into an ALARM state during the practice run, and the practice run was not interrupted before it completed. INTERRUPTED: Outcome value when the practice run did not run for the expected 30 minutes or there was another problem with the practice run that created an inconclusive outcome. FAILED: Outcome value when the outcome alarm specified for the practice run configuration goes into an ALARM state during the practice run, and the practice run was not interrupted before it completed. CAPACITY_CHECK_FAILED: The check for balanced capacity across Availability Zones for your load balancing and Auto Scaling group resources failed. For more information about practice run outcomes, see Considerations when you configure zonal autoshift in the Amazon Application Recovery Controller Developer Guide. (FAILED, INTERRUPTED, PENDING, SUCCEEDED, CAPACITY_CHECK_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the resource to include in a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource. Amazon Application Recovery Controller currently supports enabling the following resources for zonal shift and zonal autoshift: Amazon EC2 Auto Scaling groups Amazon Elastic Kubernetes Service Application Load Balancers Network Load Balancers</td>
</tr>
<tr>
    <td><CopyableCode code="shift_type" /></td>
    <td><code>string</code></td>
    <td>Defines the zonal shift type. (ZONAL_SHIFT, PRACTICE_RUN, FIS_EXPERIMENT, ZONAL_AUTOSHIFT)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time (UTC) when the zonal shift starts.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A status for a zonal shift. The Status for a zonal shift can have one of the following values: ACTIVE: The zonal shift has been started and is active. EXPIRED: The zonal shift has expired (the expiry time was exceeded). CANCELED: The zonal shift was canceled. (ACTIVE, EXPIRED, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="zonal_shift_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of a zonal shift. (pattern: &lt;code&gt;&#91;A-Za-z0-9-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_zonal_shifts"><CopyableCode code="list_zonal_shifts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-resourceIdentifier"><code>resourceIdentifier</code></a></td>
    <td>Lists all active and completed zonal shifts in Amazon Application Recovery Controller in your Amazon Web Services account in this Amazon Web Services Region. ListZonalShifts returns customer-initiated zonal shifts, as well as practice run zonal shifts that ARC started on your behalf for zonal autoshift. For more information about listing autoshifts, see "&gt;ListAutoshifts.</td>
</tr>
<tr>
    <td><a href="#update_zonal_shift"><CopyableCode code="update_zonal_shift" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-zonal_shift_id"><code>zonal_shift_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an active zonal shift in Amazon Application Recovery Controller in your Amazon Web Services account. You can update a zonal shift to set a new expiration, or edit or replace the comment for the zonal shift.</td>
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
<tr id="parameter-zonal_shift_id">
    <td><CopyableCode code="zonal_shift_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of a zonal shift.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of objects that you want to return with this call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specifies that you want to receive the next page of results. Valid only if you received a nextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's nextToken response to request the next page of results.</td>
</tr>
<tr id="parameter-resourceIdentifier">
    <td><CopyableCode code="resourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the resource that you want to list zonal shifts for. The identifier is the Amazon Resource Name (ARN) for the resource.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A status for a zonal shift. The Status for a zonal shift can have one of the following values: ACTIVE: The zonal shift has been started and is active. EXPIRED: The zonal shift has expired (the expiry time was exceeded). CANCELED: The zonal shift was canceled.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_zonal_shifts"
    values={[
        { label: 'list_zonal_shifts', value: 'list_zonal_shifts' }
    ]}
>
<TabItem value="list_zonal_shifts">

Lists all active and completed zonal shifts in Amazon Application Recovery Controller in your Amazon Web Services account in this Amazon Web Services Region. ListZonalShifts returns customer-initiated zonal shifts, as well as practice run zonal shifts that ARC started on your behalf for zonal autoshift. For more information about listing autoshifts, see "&gt;ListAutoshifts.

```sql
SELECT
away_from,
comment,
expiry_time,
practice_run_outcome,
resource_identifier,
shift_type,
start_time,
status,
zonal_shift_id
FROM aws.arc_zonal_shift.zonal_shifts
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND status = '{{ status }}'
AND maxResults = '{{ maxResults }}'
AND resourceIdentifier = '{{ resourceIdentifier }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_zonal_shift"
    values={[
        { label: 'update_zonal_shift', value: 'update_zonal_shift' }
    ]}
>
<TabItem value="update_zonal_shift">

Update an active zonal shift in Amazon Application Recovery Controller in your Amazon Web Services account. You can update a zonal shift to set a new expiration, or edit or replace the comment for the zonal shift.

```sql
UPDATE aws.arc_zonal_shift.zonal_shifts
SET 
comment = '{{ comment }}',
expiresIn = '{{ expiresIn }}'
WHERE 
zonal_shift_id = '{{ zonal_shift_id }}' --required
AND region = '{{ region }}' --required
RETURNING
away_from,
comment,
expiry_time,
resource_identifier,
start_time,
status,
zonal_shift_id;
```
</TabItem>
</Tabs>

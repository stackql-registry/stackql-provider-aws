--- 
title: telemetry_evaluation_status
hide_title: false
hide_table_of_contents: false
keywords:
  - telemetry_evaluation_status
  - observabilityadmin
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

Creates, updates, deletes, gets or lists a <code>telemetry_evaluation_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="telemetry_evaluation_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.observabilityadmin.telemetry_evaluation_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_telemetry_evaluation_status"
    values={[
        { label: 'get_telemetry_evaluation_status', value: 'get_telemetry_evaluation_status' }
    ]}
>
<TabItem value="get_telemetry_evaluation_status">

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
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>Describes the reason for the failure status. The field will only be populated if Status is FAILED_START or FAILED_STOP.</td>
</tr>
<tr>
    <td><CopyableCode code="HomeRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region that is designated as the home region for multi-region telemetry evaluation. The home region is the single management point for all multi-region operations on this account. This field is only present when multi-region telemetry evaluation is active.</td>
</tr>
<tr>
    <td><CopyableCode code="RegionStatuses" /></td>
    <td><code>array</code></td>
    <td>A list of per-region telemetry evaluation statuses. Each entry indicates the evaluation status for a specific spoke region included in the multi-region configuration. This field is only present when multi-region telemetry evaluation is active.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The onboarding status of the telemetry config feature. (NOT_STARTED, STARTING, FAILED_START, RUNNING, STOPPING, FAILED_STOP, STOPPED)</td>
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
    <td><a href="#get_telemetry_evaluation_status"><CopyableCode code="get_telemetry_evaluation_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current onboarding status of the telemetry config feature, including the status of the feature and reason the feature failed to start or stop.</td>
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
    defaultValue="get_telemetry_evaluation_status"
    values={[
        { label: 'get_telemetry_evaluation_status', value: 'get_telemetry_evaluation_status' }
    ]}
>
<TabItem value="get_telemetry_evaluation_status">

Returns the current onboarding status of the telemetry config feature, including the status of the feature and reason the feature failed to start or stop.

```sql
SELECT
FailureReason,
HomeRegion,
RegionStatuses,
Status
FROM aws.observabilityadmin.telemetry_evaluation_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

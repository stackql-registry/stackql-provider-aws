--- 
title: capacity_manager_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_manager_attributes
  - ec2
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

Creates, updates, deletes, gets or lists a <code>capacity_manager_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_manager_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_manager_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_capacity_manager_attributes"
    values={[
        { label: 'get_capacity_manager_attributes', value: 'get_capacity_manager_attributes' }
    ]}
>
<TabItem value="get_capacity_manager_attributes">

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
    <td><CopyableCode code="CapacityManagerStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of Capacity Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="DataExportCount" /></td>
    <td><code>integer</code></td>
    <td>The number of active data export configurations for this account. This count includes all data exports regardless of their current delivery status.</td>
</tr>
<tr>
    <td><CopyableCode code="EarliestDatapointTimestamp" /></td>
    <td><code>string</code></td>
    <td>The timestamp of the earliest data point available in Capacity Manager, in milliseconds since epoch. This indicates how far back historical data is available for queries.</td>
</tr>
<tr>
    <td><CopyableCode code="IngestionStatus" /></td>
    <td><code>string</code></td>
    <td>The current data ingestion status. Initial ingestion may take several hours after enabling Capacity Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="IngestionStatusMessage" /></td>
    <td><code>string</code></td>
    <td>A descriptive message providing additional details about the current ingestion status. This may include error information if ingestion has failed or progress details during initial setup.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestDatapointTimestamp" /></td>
    <td><code>string</code></td>
    <td>The timestamp of the most recent data point ingested by Capacity Manager, in milliseconds since epoch. This indicates how current your capacity data is.</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationsAccess" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Organizations access is enabled for cross-account data aggregation.</td>
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
    <td><a href="#get_capacity_manager_attributes"><CopyableCode code="get_capacity_manager_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Retrieves the current configuration and status of EC2 Capacity Manager for your account, including enablement status, Organizations access settings, and data ingestion status.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_capacity_manager_attributes"
    values={[
        { label: 'get_capacity_manager_attributes', value: 'get_capacity_manager_attributes' }
    ]}
>
<TabItem value="get_capacity_manager_attributes">

Retrieves the current configuration and status of EC2 Capacity Manager for your account, including enablement status, Organizations access settings, and data ingestion status.

```sql
SELECT
CapacityManagerStatus,
DataExportCount,
EarliestDatapointTimestamp,
IngestionStatus,
IngestionStatusMessage,
LatestDatapointTimestamp,
OrganizationsAccess
FROM aws.ec2.capacity_manager_attributes
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>

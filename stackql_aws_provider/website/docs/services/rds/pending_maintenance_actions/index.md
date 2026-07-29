--- 
title: pending_maintenance_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - pending_maintenance_actions
  - rds
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

Creates, updates, deletes, gets or lists a <code>pending_maintenance_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pending_maintenance_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.pending_maintenance_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_pending_maintenance_actions"
    values={[
        { label: 'describe_pending_maintenance_actions', value: 'describe_pending_maintenance_actions' }
    ]}
>
<TabItem value="describe_pending_maintenance_actions">

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
    <td><CopyableCode code="pending_maintenance_action_details" /></td>
    <td><code>string</code></td>
    <td>A list that provides details about the pending maintenance actions for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource that has pending maintenance actions.</td>
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
    <td><a href="#describe_pending_maintenance_actions"><CopyableCode code="describe_pending_maintenance_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ResourceIdentifier"><code>ResourceIdentifier</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Returns a list of resources (for example, DB instances) that have at least one pending maintenance action. This API follows an eventual consistency model. This means that the result of the DescribePendingMaintenanceActions command might not be immediately visible to all subsequent RDS commands. Keep this in mind when you use DescribePendingMaintenanceActions immediately after using a previous API command such as ApplyPendingMaintenanceActions.</td>
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
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more resources to return pending maintenance actions for. Supported filters: db-cluster-id - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list only includes pending maintenance actions for the DB clusters identified by these ARNs. db-instance-id - Accepts DB instance identifiers and DB instance ARNs. The results list only includes pending maintenance actions for the DB instances identified by these ARNs.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribePendingMaintenanceActions request. If this parameter is specified, the response includes only records beyond the marker, up to a number of records specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-ResourceIdentifier">
    <td><CopyableCode code="ResourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ARN of a resource to return pending maintenance actions for.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_pending_maintenance_actions"
    values={[
        { label: 'describe_pending_maintenance_actions', value: 'describe_pending_maintenance_actions' }
    ]}
>
<TabItem value="describe_pending_maintenance_actions">

Returns a list of resources (for example, DB instances) that have at least one pending maintenance action. This API follows an eventual consistency model. This means that the result of the DescribePendingMaintenanceActions command might not be immediately visible to all subsequent RDS commands. Keep this in mind when you use DescribePendingMaintenanceActions immediately after using a previous API command such as ApplyPendingMaintenanceActions.

```sql
SELECT
pending_maintenance_action_details,
resource_identifier
FROM aws.rds.pending_maintenance_actions
WHERE region = '{{ region }}' -- required
AND ResourceIdentifier = '{{ ResourceIdentifier }}'
AND Filters = '{{ Filters }}'
AND Marker = '{{ Marker }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>

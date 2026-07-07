--- 
title: domain_maintenance_status
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_maintenance_status
  - opensearch
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

Creates, updates, deletes, gets or lists a <code>domain_maintenance_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_maintenance_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.domain_maintenance_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain_maintenance_status"
    values={[
        { label: 'get_domain_maintenance_status', value: 'get_domain_maintenance_status' }
    ]}
>
<TabItem value="get_domain_maintenance_status">

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
    <td><CopyableCode code="Action" /></td>
    <td><code>string</code></td>
    <td>The action name. (REBOOT_NODE, RESTART_SEARCH_PROCESS, RESTART_DASHBOARD)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the action was created.</td>
</tr>
<tr>
    <td><CopyableCode code="NodeId" /></td>
    <td><code>string</code></td>
    <td>The node ID of the maintenance action.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the maintenance action. (PENDING, IN_PROGRESS, COMPLETED, FAILED, TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>The status message of the maintenance action. (pattern: &lt;code&gt;^(&#91;\s\S&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the action was updated.</td>
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
    <td><a href="#get_domain_maintenance_status"><CopyableCode code="get_domain_maintenance_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-maintenanceId"><code>maintenanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The status of the maintenance action.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain.</td>
</tr>
<tr id="parameter-maintenanceId">
    <td><CopyableCode code="maintenanceId" /></td>
    <td><code>string</code></td>
    <td>The request ID of the maintenance action.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_domain_maintenance_status"
    values={[
        { label: 'get_domain_maintenance_status', value: 'get_domain_maintenance_status' }
    ]}
>
<TabItem value="get_domain_maintenance_status">

The status of the maintenance action.

```sql
SELECT
Action,
CreatedAt,
NodeId,
Status,
StatusMessage,
UpdatedAt
FROM aws.opensearch.domain_maintenance_status
WHERE domain_name = '{{ domain_name }}' -- required
AND maintenanceId = '{{ maintenanceId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

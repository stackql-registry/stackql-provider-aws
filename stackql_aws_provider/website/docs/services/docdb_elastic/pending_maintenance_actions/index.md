--- 
title: pending_maintenance_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - pending_maintenance_actions
  - docdb_elastic
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.docdb_elastic.pending_maintenance_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pending_maintenance_action"
    values={[
        { label: 'get_pending_maintenance_action', value: 'get_pending_maintenance_action' },
        { label: 'list_pending_maintenance_actions', value: 'list_pending_maintenance_actions' }
    ]}
>
<TabItem value="get_pending_maintenance_action">

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
    <td><CopyableCode code="pendingMaintenanceActionDetails" /></td>
    <td><code>array</code></td>
    <td>Provides information about a pending maintenance action for a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon DocumentDB Amazon Resource Name (ARN) of the resource to which the pending maintenance action applies.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_pending_maintenance_actions">

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
    <td><CopyableCode code="pendingMaintenanceActionDetails" /></td>
    <td><code>array</code></td>
    <td>Provides information about a pending maintenance action for a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon DocumentDB Amazon Resource Name (ARN) of the resource to which the pending maintenance action applies.</td>
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
    <td><a href="#get_pending_maintenance_action"><CopyableCode code="get_pending_maintenance_action" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all maintenance actions that are pending.</td>
</tr>
<tr>
    <td><a href="#list_pending_maintenance_actions"><CopyableCode code="list_pending_maintenance_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a list of all maintenance actions that are pending.</td>
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
<tr id="parameter-resource_arn">
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>Retrieves pending maintenance actions for a specific Amazon Resource Name (ARN).</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to include in the response. If more records exist than the specified maxResults value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by maxResults.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_pending_maintenance_action"
    values={[
        { label: 'get_pending_maintenance_action', value: 'get_pending_maintenance_action' },
        { label: 'list_pending_maintenance_actions', value: 'list_pending_maintenance_actions' }
    ]}
>
<TabItem value="get_pending_maintenance_action">

Retrieves all maintenance actions that are pending.

```sql
SELECT
pendingMaintenanceActionDetails,
resourceArn
FROM aws.docdb_elastic.pending_maintenance_actions
WHERE resource_arn = '{{ resource_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_pending_maintenance_actions">

Retrieves a list of all maintenance actions that are pending.

```sql
SELECT
pendingMaintenanceActionDetails,
resourceArn
FROM aws.docdb_elastic.pending_maintenance_actions
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>

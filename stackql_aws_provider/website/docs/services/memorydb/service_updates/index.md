--- 
title: service_updates
hide_title: false
hide_table_of_contents: false
keywords:
  - service_updates
  - memorydb
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

Creates, updates, deletes, gets or lists a <code>service_updates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_updates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.memorydb.service_updates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_service_updates"
    values={[
        { label: 'describe_service_updates', value: 'describe_service_updates' }
    ]}
>
<TabItem value="describe_service_updates">

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
    <td><CopyableCode code="AutoUpdateStartDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date at which the service update will be automatically applied</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterName" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster to which the service update applies</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Provides details of the service update</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The name of the engine for which a service update is available.</td>
</tr>
<tr>
    <td><CopyableCode code="NodesUpdated" /></td>
    <td><code>string</code></td>
    <td>A list of nodes updated by the service update</td>
</tr>
<tr>
    <td><CopyableCode code="ReleaseDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the service update is initially available</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceUpdateName" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the service update</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the service update (available, in-progress, complete, scheduled)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>Reflects the nature of the service update (security-update)</td>
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
    <td><a href="#describe_service_updates"><CopyableCode code="describe_service_updates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details of the service updates.</td>
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
    defaultValue="describe_service_updates"
    values={[
        { label: 'describe_service_updates', value: 'describe_service_updates' }
    ]}
>
<TabItem value="describe_service_updates">

Returns details of the service updates.

```sql
SELECT
AutoUpdateStartDate,
ClusterName,
Description,
Engine,
NodesUpdated,
ReleaseDate,
ServiceUpdateName,
Status,
Type
FROM aws.memorydb.service_updates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

--- 
title: service_sync_blocker_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - service_sync_blocker_summaries
  - proton
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

Creates, updates, deletes, gets or lists a <code>service_sync_blocker_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_sync_blocker_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.service_sync_blocker_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_sync_blocker_summary"
    values={[
        { label: 'get_service_sync_blocker_summary', value: 'get_service_sync_blocker_summary' }
    ]}
>
<TabItem value="get_service_sync_blocker_summary">

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
    <td><CopyableCode code="latest_blockers" /></td>
    <td><code>array</code></td>
    <td>The latest active blockers for the synced service.</td>
</tr>
<tr>
    <td><CopyableCode code="service_instance_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service instance that you want sync your service configuration with.</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service that you want to get the sync blocker summary for. If given a service instance name and a service name, it will return the blockers only applying to the instance that is blocked. If given only a service name, it will return the blockers that apply to all of the instances. In order to get the blockers for a single instance, you will need to make two distinct calls, one to get the sync blocker summary for the service and the other to get the sync blocker for the service instance.</td>
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
    <td><a href="#get_service_sync_blocker_summary"><CopyableCode code="get_service_sync_blocker_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get detailed data for the service sync blocker summary.</td>
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
    defaultValue="get_service_sync_blocker_summary"
    values={[
        { label: 'get_service_sync_blocker_summary', value: 'get_service_sync_blocker_summary' }
    ]}
>
<TabItem value="get_service_sync_blocker_summary">

Get detailed data for the service sync blocker summary.

```sql
SELECT
latest_blockers,
service_instance_name,
service_name
FROM aws.proton.service_sync_blocker_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

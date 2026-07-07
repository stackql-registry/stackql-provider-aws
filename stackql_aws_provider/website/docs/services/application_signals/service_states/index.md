--- 
title: service_states
hide_title: false
hide_table_of_contents: false
keywords:
  - service_states
  - application_signals
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

Creates, updates, deletes, gets or lists a <code>service_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_states" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_signals.service_states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_service_states"
    values={[
        { label: 'list_service_states', value: 'list_service_states' }
    ]}
>
<TabItem value="list_service_states">

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
    <td><CopyableCode code="AttributeFilters" /></td>
    <td><code>array</code></td>
    <td>The attribute filters that were applied when retrieving this service state information.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestChangeEvents" /></td>
    <td><code>array</code></td>
    <td>An array containing the most recent change events for this service, such as deployments, with information about when they occurred and who initiated them.</td>
</tr>
<tr>
    <td><CopyableCode code="Service" /></td>
    <td><code>object</code></td>
    <td>The key attributes that identify this service, including Type, Name, and Environment information.</td>
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
    <td><a href="#list_service_states"><CopyableCode code="list_service_states" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the last deployment and other change states of services. This API provides visibility into recent changes that may have affected service performance, helping with troubleshooting and change correlation.</td>
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
    defaultValue="list_service_states"
    values={[
        { label: 'list_service_states', value: 'list_service_states' }
    ]}
>
<TabItem value="list_service_states">

Returns information about the last deployment and other change states of services. This API provides visibility into recent changes that may have affected service performance, helping with troubleshooting and change correlation.

```sql
SELECT
AttributeFilters,
LatestChangeEvents,
Service
FROM aws.application_signals.service_states
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

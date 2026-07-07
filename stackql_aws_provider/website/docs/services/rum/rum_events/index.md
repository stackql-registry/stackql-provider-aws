--- 
title: rum_events
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_events
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

Creates, updates, deletes, gets or lists a <code>rum_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rum.rum_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#put_rum_events"><CopyableCode code="put_rum_events" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BatchId"><code>BatchId</code></a>, <a href="#parameter-AppMonitorDetails"><code>AppMonitorDetails</code></a>, <a href="#parameter-UserDetails"><code>UserDetails</code></a>, <a href="#parameter-RumEvents"><code>RumEvents</code></a></td>
    <td></td>
    <td>Sends telemetry events about your application performance and user behavior to CloudWatch RUM. The code snippet that RUM generates for you to add to your application includes PutRumEvents operations to send this data to RUM. Each PutRumEvents operation can send a batch of events from one user session.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the app monitor that is sending this data.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `REPLACE` examples

<Tabs
    defaultValue="put_rum_events"
    values={[
        { label: 'put_rum_events', value: 'put_rum_events' }
    ]}
>
<TabItem value="put_rum_events">

Sends telemetry events about your application performance and user behavior to CloudWatch RUM. The code snippet that RUM generates for you to add to your application includes PutRumEvents operations to send this data to RUM. Each PutRumEvents operation can send a batch of events from one user session.

```sql
REPLACE aws.rum.rum_events
SET 
BatchId = '{{ BatchId }}',
AppMonitorDetails = '{{ AppMonitorDetails }}',
UserDetails = '{{ UserDetails }}',
RumEvents = '{{ RumEvents }}',
Alias = '{{ Alias }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND BatchId = '{{ BatchId }}' --required
AND AppMonitorDetails = '{{ AppMonitorDetails }}' --required
AND UserDetails = '{{ UserDetails }}' --required
AND RumEvents = '{{ RumEvents }}' --required;
```
</TabItem>
</Tabs>

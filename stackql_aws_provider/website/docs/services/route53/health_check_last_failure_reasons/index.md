--- 
title: health_check_last_failure_reasons
hide_title: false
hide_table_of_contents: false
keywords:
  - health_check_last_failure_reasons
  - route53
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

Creates, updates, deletes, gets or lists a <code>health_check_last_failure_reasons</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="health_check_last_failure_reasons" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.health_check_last_failure_reasons" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_health_check_last_failure_reason"
    values={[
        { label: 'get_health_check_last_failure_reason', value: 'get_health_check_last_failure_reason' }
    ]}
>
<TabItem value="get_health_check_last_failure_reason">

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
    <td><CopyableCode code="health_check_observations" /></td>
    <td><code>string</code></td>
    <td>A list that contains one Observation element for each Amazon Route 53 health checker that is reporting a last failure reason.</td>
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
    <td><a href="#get_health_check_last_failure_reason"><CopyableCode code="get_health_check_last_failure_reason" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-health_check_id"><code>health_check_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the reason that a specified health check failed most recently.</td>
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
<tr id="parameter-health_check_id">
    <td><CopyableCode code="health_check_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the health check for which you want the last failure reason. When you created the health check, CreateHealthCheck returned the ID in the response, in the HealthCheckId element. If you want to get the last failure reason for a calculated health check, you must use the Amazon Route 53 console or the CloudWatch console. You can't use GetHealthCheckLastFailureReason for a calculated health check.</td>
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
    defaultValue="get_health_check_last_failure_reason"
    values={[
        { label: 'get_health_check_last_failure_reason', value: 'get_health_check_last_failure_reason' }
    ]}
>
<TabItem value="get_health_check_last_failure_reason">

Gets the reason that a specified health check failed most recently.

```sql
SELECT
health_check_observations
FROM aws.route53.health_check_last_failure_reasons
WHERE health_check_id = '{{ health_check_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

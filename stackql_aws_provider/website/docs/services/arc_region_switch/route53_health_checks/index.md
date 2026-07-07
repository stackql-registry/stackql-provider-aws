--- 
title: route53_health_checks
hide_title: false
hide_table_of_contents: false
keywords:
  - route53_health_checks
  - arc_region_switch
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

Creates, updates, deletes, gets or lists a <code>route53_health_checks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="route53_health_checks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.arc_region_switch.route53_health_checks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_route53_health_checks"
    values={[
        { label: 'list_route53_health_checks', value: 'list_route53_health_checks' }
    ]}
>
<TabItem value="list_route53_health_checks">

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
    <td><CopyableCode code="healthCheckId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Route 53 health check ID.</td>
</tr>
<tr>
    <td><CopyableCode code="hostedZoneId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Route 53 health check hosted zone ID.</td>
</tr>
<tr>
    <td><CopyableCode code="recordName" /></td>
    <td><code>string</code></td>
    <td>The Amazon Route 53 record name.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Route 53 Region. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;-&#91;a-z-&#93;+-\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The Amazon Route 53 health check status. (healthy, unhealthy, unknown)</td>
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
    <td><a href="#list_route53_health_checks"><CopyableCode code="list_route53_health_checks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the Amazon Route 53 health checks.</td>
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
    defaultValue="list_route53_health_checks"
    values={[
        { label: 'list_route53_health_checks', value: 'list_route53_health_checks' }
    ]}
>
<TabItem value="list_route53_health_checks">

List the Amazon Route 53 health checks.

```sql
SELECT
healthCheckId,
hostedZoneId,
recordName,
region,
status
FROM aws.arc_region_switch.route53_health_checks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

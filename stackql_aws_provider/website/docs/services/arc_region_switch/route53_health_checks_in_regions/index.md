--- 
title: route53_health_checks_in_regions
hide_title: false
hide_table_of_contents: false
keywords:
  - route53_health_checks_in_regions
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

Creates, updates, deletes, gets or lists a <code>route53_health_checks_in_regions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="route53_health_checks_in_regions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.arc_region_switch.route53_health_checks_in_regions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_route53_health_checks_in_region"
    values={[
        { label: 'list_route53_health_checks_in_region', value: 'list_route53_health_checks_in_region' }
    ]}
>
<TabItem value="list_route53_health_checks_in_region">

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
    <td><CopyableCode code="health_check_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Route 53 health check ID.</td>
</tr>
<tr>
    <td><CopyableCode code="hosted_zone_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Route 53 health check hosted zone ID.</td>
</tr>
<tr>
    <td><CopyableCode code="record_name" /></td>
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
    <td><a href="#list_route53_health_checks_in_region"><CopyableCode code="list_route53_health_checks_in_region" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the Amazon Route 53 health checks in a specific Amazon Web Services Region.</td>
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
    defaultValue="list_route53_health_checks_in_region"
    values={[
        { label: 'list_route53_health_checks_in_region', value: 'list_route53_health_checks_in_region' }
    ]}
>
<TabItem value="list_route53_health_checks_in_region">

List the Amazon Route 53 health checks in a specific Amazon Web Services Region.

```sql
SELECT
health_check_id,
hosted_zone_id,
record_name,
region,
status
FROM aws.arc_region_switch.route53_health_checks_in_regions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

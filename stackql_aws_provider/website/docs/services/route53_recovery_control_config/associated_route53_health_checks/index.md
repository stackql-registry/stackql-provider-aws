--- 
title: associated_route53_health_checks
hide_title: false
hide_table_of_contents: false
keywords:
  - associated_route53_health_checks
  - route53_recovery_control_config
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

Creates, updates, deletes, gets or lists an <code>associated_route53_health_checks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="associated_route53_health_checks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53_recovery_control_config.associated_route53_health_checks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_associated_route53_health_checks"
    values={[
        { label: 'list_associated_route53_health_checks', value: 'list_associated_route53_health_checks' }
    ]}
>
<TabItem value="list_associated_route53_health_checks">

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
    <td>Identifiers for the health checks.</td>
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
    <td><a href="#list_associated_route53_health_checks"><CopyableCode code="list_associated_route53_health_checks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-routing_control_arn"><code>routing_control_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns an array of all Amazon Route 53 health checks associated with a specific routing control.</td>
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
<tr id="parameter-routing_control_arn">
    <td><CopyableCode code="routing_control_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the routing control.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of objects that you want to return with this call.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies which batch of results you want to see.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_associated_route53_health_checks"
    values={[
        { label: 'list_associated_route53_health_checks', value: 'list_associated_route53_health_checks' }
    ]}
>
<TabItem value="list_associated_route53_health_checks">

Returns an array of all Amazon Route 53 health checks associated with a specific routing control.

```sql
SELECT
health_check_id
FROM aws.route53_recovery_control_config.associated_route53_health_checks
WHERE routing_control_arn = '{{ routing_control_arn }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>

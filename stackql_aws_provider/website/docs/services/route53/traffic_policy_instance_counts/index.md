--- 
title: traffic_policy_instance_counts
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_policy_instance_counts
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

Creates, updates, deletes, gets or lists a <code>traffic_policy_instance_counts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traffic_policy_instance_counts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.traffic_policy_instance_counts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_traffic_policy_instance_count"
    values={[
        { label: 'get_traffic_policy_instance_count', value: 'get_traffic_policy_instance_count' }
    ]}
>
<TabItem value="get_traffic_policy_instance_count">

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
    <td><CopyableCode code="TrafficPolicyInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of traffic policy instances that are associated with the current Amazon Web Services account.</td>
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
    <td><a href="#get_traffic_policy_instance_count"><CopyableCode code="get_traffic_policy_instance_count" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the number of traffic policy instances that are associated with the current Amazon Web Services account.</td>
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
    defaultValue="get_traffic_policy_instance_count"
    values={[
        { label: 'get_traffic_policy_instance_count', value: 'get_traffic_policy_instance_count' }
    ]}
>
<TabItem value="get_traffic_policy_instance_count">

Gets the number of traffic policy instances that are associated with the current Amazon Web Services account.

```sql
SELECT
TrafficPolicyInstanceCount
FROM aws.route53.traffic_policy_instance_counts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

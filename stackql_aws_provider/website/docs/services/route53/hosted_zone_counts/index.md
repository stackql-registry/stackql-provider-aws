--- 
title: hosted_zone_counts
hide_title: false
hide_table_of_contents: false
keywords:
  - hosted_zone_counts
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

Creates, updates, deletes, gets or lists a <code>hosted_zone_counts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hosted_zone_counts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.hosted_zone_counts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_hosted_zone_count"
    values={[
        { label: 'get_hosted_zone_count', value: 'get_hosted_zone_count' }
    ]}
>
<TabItem value="get_hosted_zone_count">

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
    <td><CopyableCode code="HostedZoneCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of public and private hosted zones that are associated with the current Amazon Web Services account.</td>
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
    <td><a href="#get_hosted_zone_count"><CopyableCode code="get_hosted_zone_count" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the number of hosted zones that are associated with the current Amazon Web Services account.</td>
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
    defaultValue="get_hosted_zone_count"
    values={[
        { label: 'get_hosted_zone_count', value: 'get_hosted_zone_count' }
    ]}
>
<TabItem value="get_hosted_zone_count">

Retrieves the number of hosted zones that are associated with the current Amazon Web Services account.

```sql
SELECT
HostedZoneCount
FROM aws.route53.hosted_zone_counts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

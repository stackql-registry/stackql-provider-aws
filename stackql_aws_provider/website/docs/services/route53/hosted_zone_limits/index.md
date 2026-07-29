--- 
title: hosted_zone_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - hosted_zone_limits
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

Creates, updates, deletes, gets or lists a <code>hosted_zone_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hosted_zone_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.hosted_zone_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_hosted_zone_limit"
    values={[
        { label: 'get_hosted_zone_limit', value: 'get_hosted_zone_limit' }
    ]}
>
<TabItem value="get_hosted_zone_limit">

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
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>The current number of entities that you have created of the specified type. For example, if you specified MAX_RRSETS_BY_ZONE for the value of Type in the request, the value of Count is the current number of records that you have created in the specified hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="limit" /></td>
    <td><code>string</code></td>
    <td>The current setting for the specified limit. For example, if you specified MAX_RRSETS_BY_ZONE for the value of Type in the request, the value of Limit is the maximum number of records that you can create in the specified hosted zone.</td>
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
    <td><a href="#get_hosted_zone_limit"><CopyableCode code="get_hosted_zone_limit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified limit for a specified hosted zone, for example, the maximum number of records that you can create in the hosted zone. For the default limit, see Limits in the Amazon Route 53 Developer Guide. To request a higher limit, open a case.</td>
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
    <td>The ID of the hosted zone that you want to get a limit for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The limit that you want to get. Valid values include the following: MAX_RRSETS_BY_ZONE: The maximum number of records that you can create in the specified hosted zone. MAX_VPCS_ASSOCIATED_BY_ZONE: The maximum number of Amazon VPCs that you can associate with the specified private hosted zone.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_hosted_zone_limit"
    values={[
        { label: 'get_hosted_zone_limit', value: 'get_hosted_zone_limit' }
    ]}
>
<TabItem value="get_hosted_zone_limit">

Gets the specified limit for a specified hosted zone, for example, the maximum number of records that you can create in the hosted zone. For the default limit, see Limits in the Amazon Route 53 Developer Guide. To request a higher limit, open a case.

```sql
SELECT
count,
limit
FROM aws.route53.hosted_zone_limits
WHERE type = '{{ type }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

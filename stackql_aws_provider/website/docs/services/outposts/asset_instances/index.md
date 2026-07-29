--- 
title: asset_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_instances
  - outposts
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

Creates, updates, deletes, gets or lists an <code>asset_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.outposts.asset_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_asset_instances"
    values={[
        { label: 'list_asset_instances', value: 'list_asset_instances' }
    ]}
>
<TabItem value="list_asset_instances">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset. An Outpost asset can be a single server within an Outposts rack or an Outposts server configuration. (pattern: &lt;code&gt;^(\w+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_service_name" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service name of the instance. (AWS, EC2, ELASTICACHE, ELB, RDS, ROUTE53)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance. (pattern: &lt;code&gt;^i-&#91;0-9a-z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The type of instance. (pattern: &lt;code&gt;&#91;a-z0-9\-\.&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_asset_instances"><CopyableCode code="list_asset_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-outpost_id"><code>outpost_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AssetIdFilter"><code>AssetIdFilter</code></a>, <a href="#parameter-InstanceTypeFilter"><code>InstanceTypeFilter</code></a>, <a href="#parameter-AccountIdFilter"><code>AccountIdFilter</code></a>, <a href="#parameter-AwsServiceFilter"><code>AwsServiceFilter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>A list of Amazon EC2 instances, belonging to all accounts, running on the specified Outpost. Does not include Amazon EBS or Amazon S3 instances.</td>
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
<tr id="parameter-outpost_id">
    <td><CopyableCode code="outpost_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Outpost.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AccountIdFilter">
    <td><CopyableCode code="AccountIdFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by account ID.</td>
</tr>
<tr id="parameter-AssetIdFilter">
    <td><CopyableCode code="AssetIdFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by asset ID.</td>
</tr>
<tr id="parameter-AwsServiceFilter">
    <td><CopyableCode code="AwsServiceFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by Amazon Web Services service.</td>
</tr>
<tr id="parameter-InstanceTypeFilter">
    <td><CopyableCode code="InstanceTypeFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by instance ID.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_asset_instances"
    values={[
        { label: 'list_asset_instances', value: 'list_asset_instances' }
    ]}
>
<TabItem value="list_asset_instances">

A list of Amazon EC2 instances, belonging to all accounts, running on the specified Outpost. Does not include Amazon EBS or Amazon S3 instances.

```sql
SELECT
account_id,
asset_id,
aws_service_name,
instance_id,
instance_type
FROM aws.outposts.asset_instances
WHERE outpost_id = '{{ outpost_id }}' -- required
AND region = '{{ region }}' -- required
AND AssetIdFilter = '{{ AssetIdFilter }}'
AND InstanceTypeFilter = '{{ InstanceTypeFilter }}'
AND AccountIdFilter = '{{ AccountIdFilter }}'
AND AwsServiceFilter = '{{ AwsServiceFilter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>

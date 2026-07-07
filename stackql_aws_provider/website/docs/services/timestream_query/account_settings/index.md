--- 
title: account_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - account_settings
  - timestream_query
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

Creates, updates, deletes, gets or lists an <code>account_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.timestream_query.account_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account_settings"
    values={[
        { label: 'describe_account_settings', value: 'describe_account_settings' }
    ]}
>
<TabItem value="describe_account_settings">

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
    <td><CopyableCode code="MaxQueryTCU" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of Timestream compute units (TCUs) the service will use at any point in time to serve your queries. To run queries, you must set a minimum capacity of 4 TCU. You can set the maximum number of TCU in multiples of 4, for example, 4, 8, 16, 32, and so on. This configuration is applicable only for on-demand usage of (TCUs).</td>
</tr>
<tr>
    <td><CopyableCode code="QueryCompute" /></td>
    <td><code>object</code></td>
    <td>An object that contains the usage settings for Timestream Compute Units (TCUs) in your account for the query workload.</td>
</tr>
<tr>
    <td><CopyableCode code="QueryPricingModel" /></td>
    <td><code>string</code></td>
    <td>The pricing model for queries in your account. The QueryPricingModel parameter is used by several Timestream operations; however, the UpdateAccountSettings API operation doesn't recognize any values other than COMPUTE_UNITS. (BYTES_SCANNED, COMPUTE_UNITS)</td>
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
    <td><a href="#describe_account_settings"><CopyableCode code="describe_account_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the settings for your account that include the query pricing model and the configured maximum TCUs the service can use for your query workload. You're charged only for the duration of compute units used for your workloads.</td>
</tr>
<tr>
    <td><a href="#update_account_settings"><CopyableCode code="update_account_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Transitions your account to use TCUs for query pricing and modifies the maximum query compute units that you've configured. If you reduce the value of MaxQueryTCU to a desired configuration, the new value can take up to 24 hours to be effective. After you've transitioned your account to use TCUs for query pricing, you can't transition to using bytes scanned for query pricing.</td>
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
    defaultValue="describe_account_settings"
    values={[
        { label: 'describe_account_settings', value: 'describe_account_settings' }
    ]}
>
<TabItem value="describe_account_settings">

Describes the settings for your account that include the query pricing model and the configured maximum TCUs the service can use for your query workload. You're charged only for the duration of compute units used for your workloads.

```sql
SELECT
MaxQueryTCU,
QueryCompute,
QueryPricingModel
FROM aws.timestream_query.account_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account_settings"
    values={[
        { label: 'update_account_settings', value: 'update_account_settings' }
    ]}
>
<TabItem value="update_account_settings">

Transitions your account to use TCUs for query pricing and modifies the maximum query compute units that you've configured. If you reduce the value of MaxQueryTCU to a desired configuration, the new value can take up to 24 hours to be effective. After you've transitioned your account to use TCUs for query pricing, you can't transition to using bytes scanned for query pricing.

```sql
UPDATE aws.timestream_query.account_settings
SET 
MaxQueryTCU = {{ MaxQueryTCU }},
QueryPricingModel = '{{ QueryPricingModel }}',
QueryCompute = '{{ QueryCompute }}'
WHERE 
region = '{{ region }}' --required
RETURNING
MaxQueryTCU,
QueryCompute,
QueryPricingModel;
```
</TabItem>
</Tabs>

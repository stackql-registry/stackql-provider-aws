--- 
title: usage_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_limits
  - redshift_serverless
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

Creates, updates, deletes, gets or lists a <code>usage_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_serverless.usage_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_usage_limit"
    values={[
        { label: 'get_usage_limit', value: 'get_usage_limit' },
        { label: 'list_usage_limits', value: 'list_usage_limits' }
    ]}
>
<TabItem value="get_usage_limit">

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
    <td><CopyableCode code="amount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The limit amount. If time-based, this amount is in RPUs consumed per hour. If data-based, this amount is in terabytes (TB). The value must be a positive number.</td>
</tr>
<tr>
    <td><CopyableCode code="breachAction" /></td>
    <td><code>string</code></td>
    <td>The action that Amazon Redshift Serverless takes when the limit is reached. (log, emit-metric, deactivate)</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>string</code></td>
    <td>The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly. (daily, weekly, monthly)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the Amazon Redshift Serverless resource.</td>
</tr>
<tr>
    <td><CopyableCode code="usageLimitArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource associated with the usage limit.</td>
</tr>
<tr>
    <td><CopyableCode code="usageLimitId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the usage limit.</td>
</tr>
<tr>
    <td><CopyableCode code="usageType" /></td>
    <td><code>string</code></td>
    <td>The Amazon Redshift Serverless feature to limit. (serverless-compute, cross-region-datasharing)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_usage_limits">

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
    <td><CopyableCode code="amount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The limit amount. If time-based, this amount is in RPUs consumed per hour. If data-based, this amount is in terabytes (TB). The value must be a positive number.</td>
</tr>
<tr>
    <td><CopyableCode code="breachAction" /></td>
    <td><code>string</code></td>
    <td>The action that Amazon Redshift Serverless takes when the limit is reached. (log, emit-metric, deactivate)</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>string</code></td>
    <td>The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly. (daily, weekly, monthly)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the Amazon Redshift Serverless resource.</td>
</tr>
<tr>
    <td><CopyableCode code="usageLimitArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource associated with the usage limit.</td>
</tr>
<tr>
    <td><CopyableCode code="usageLimitId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the usage limit.</td>
</tr>
<tr>
    <td><CopyableCode code="usageType" /></td>
    <td><code>string</code></td>
    <td>The Amazon Redshift Serverless feature to limit. (serverless-compute, cross-region-datasharing)</td>
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
    <td><a href="#get_usage_limit"><CopyableCode code="get_usage_limit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a usage limit.</td>
</tr>
<tr>
    <td><a href="#list_usage_limits"><CopyableCode code="list_usage_limits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all usage limits within Amazon Redshift Serverless.</td>
</tr>
<tr>
    <td><a href="#create_usage_limit"><CopyableCode code="create_usage_limit" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-amount"><code>amount</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-usageType"><code>usageType</code></a></td>
    <td></td>
    <td>Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier.</td>
</tr>
<tr>
    <td><a href="#update_usage_limit"><CopyableCode code="update_usage_limit" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-usageLimitId"><code>usageLimitId</code></a></td>
    <td></td>
    <td>Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.</td>
</tr>
<tr>
    <td><a href="#delete_usage_limit"><CopyableCode code="delete_usage_limit" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a usage limit from Amazon Redshift Serverless.</td>
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
    defaultValue="get_usage_limit"
    values={[
        { label: 'get_usage_limit', value: 'get_usage_limit' },
        { label: 'list_usage_limits', value: 'list_usage_limits' }
    ]}
>
<TabItem value="get_usage_limit">

Returns information about a usage limit.

```sql
SELECT
amount,
breachAction,
period,
resourceArn,
usageLimitArn,
usageLimitId,
usageType
FROM aws.redshift_serverless.usage_limits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_usage_limits">

Lists all usage limits within Amazon Redshift Serverless.

```sql
SELECT
amount,
breachAction,
period,
resourceArn,
usageLimitArn,
usageLimitId,
usageType
FROM aws.redshift_serverless.usage_limits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_usage_limit"
    values={[
        { label: 'create_usage_limit', value: 'create_usage_limit' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_usage_limit">

Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier.

```sql
INSERT INTO aws.redshift_serverless.usage_limits (
amount,
breachAction,
period,
resourceArn,
usageType,
region
)
SELECT 
{{ amount }} /* required */,
'{{ breachAction }}',
'{{ period }}',
'{{ resourceArn }}' /* required */,
'{{ usageType }}' /* required */,
'{{ region }}'
RETURNING
usageLimit
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: usage_limits
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the usage_limits resource.
    - name: amount
      value: {{ amount }}
      description: |
        The limit amount. If time-based, this amount is in Redshift Processing Units (RPU) consumed per hour. If data-based, this amount is in terabytes (TB) of data transferred between Regions in cross-account sharing. The value must be a positive number.
    - name: breachAction
      value: "{{ breachAction }}"
      description: |
        The action that Amazon Redshift Serverless takes when the limit is reached. The default is log.
      valid_values: ['log', 'emit-metric', 'deactivate']
    - name: period
      value: "{{ period }}"
      description: |
        The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.
      valid_values: ['daily', 'weekly', 'monthly']
    - name: resourceArn
      value: "{{ resourceArn }}"
      description: |
        The Amazon Resource Name (ARN) of the Amazon Redshift Serverless resource to create the usage limit for.
    - name: usageType
      value: "{{ usageType }}"
      description: |
        The type of Amazon Redshift Serverless usage to create a usage limit for.
      valid_values: ['serverless-compute', 'cross-region-datasharing']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_usage_limit"
    values={[
        { label: 'update_usage_limit', value: 'update_usage_limit' }
    ]}
>
<TabItem value="update_usage_limit">

Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.

```sql
UPDATE aws.redshift_serverless.usage_limits
SET 
amount = {{ amount }},
breachAction = '{{ breachAction }}',
usageLimitId = '{{ usageLimitId }}'
WHERE 
region = '{{ region }}' --required
AND usageLimitId = '{{ usageLimitId }}' --required
RETURNING
usageLimit;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_usage_limit"
    values={[
        { label: 'delete_usage_limit', value: 'delete_usage_limit' }
    ]}
>
<TabItem value="delete_usage_limit">

Deletes a usage limit from Amazon Redshift Serverless.

```sql
DELETE FROM aws.redshift_serverless.usage_limits
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

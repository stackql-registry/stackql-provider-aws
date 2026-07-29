--- 
title: workload_estimates
hide_title: false
hide_table_of_contents: false
keywords:
  - workload_estimates
  - bcm_pricing_calculator
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

Creates, updates, deletes, gets or lists a <code>workload_estimates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workload_estimates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bcm_pricing_calculator.workload_estimates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workload_estimate"
    values={[
        { label: 'get_workload_estimate', value: 'get_workload_estimate' },
        { label: 'list_workload_estimates', value: 'list_workload_estimates' }
    ]}
>
<TabItem value="get_workload_estimate">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the retrieved workload estimate. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the retrieved workload estimate. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cost_currency" /></td>
    <td><code>string</code></td>
    <td>The currency of the estimated cost. (USD)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workload estimate was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workload estimate will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>An error message if the workload estimate retrieval failed.</td>
</tr>
<tr>
    <td><CopyableCode code="rate_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the pricing rates used for the estimate.</td>
</tr>
<tr>
    <td><CopyableCode code="rate_type" /></td>
    <td><code>string</code></td>
    <td>The type of pricing rates used for the estimate. (BEFORE_DISCOUNTS, AFTER_DISCOUNTS, AFTER_DISCOUNTS_AND_COMMITMENTS)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the workload estimate. (UPDATING, VALID, INVALID, ACTION_NEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="total_cost" /></td>
    <td><code>number (double)</code></td>
    <td>The total estimated cost for the workload.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workload_estimates">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workload estimate. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the workload estimate. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cost_currency" /></td>
    <td><code>string</code></td>
    <td>The currency of the estimated cost. (USD)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workload estimate was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workload estimate will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>An error message if the workload estimate creation or processing failed.</td>
</tr>
<tr>
    <td><CopyableCode code="rate_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the pricing rates used for the estimate.</td>
</tr>
<tr>
    <td><CopyableCode code="rate_type" /></td>
    <td><code>string</code></td>
    <td>The type of pricing rates used for the estimate. (BEFORE_DISCOUNTS, AFTER_DISCOUNTS, AFTER_DISCOUNTS_AND_COMMITMENTS)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the workload estimate. (UPDATING, VALID, INVALID, ACTION_NEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="total_cost" /></td>
    <td><code>number (double)</code></td>
    <td>The total estimated cost for the workload.</td>
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
    <td><a href="#get_workload_estimate"><CopyableCode code="get_workload_estimate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details of a specific workload estimate.</td>
</tr>
<tr>
    <td><a href="#list_workload_estimates"><CopyableCode code="list_workload_estimates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all workload estimates for the account.</td>
</tr>
<tr>
    <td><a href="#create_workload_estimate"><CopyableCode code="create_workload_estimate" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new workload estimate to model costs for a specific workload.</td>
</tr>
<tr>
    <td><a href="#update_workload_estimate"><CopyableCode code="update_workload_estimate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-identifier"><code>identifier</code></a></td>
    <td></td>
    <td>Updates an existing workload estimate.</td>
</tr>
<tr>
    <td><a href="#delete_workload_estimate"><CopyableCode code="delete_workload_estimate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing workload estimate.</td>
</tr>
<tr>
    <td><a href="#batch_create_workload_estimate_usage"><CopyableCode code="batch_create_workload_estimate_usage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-workloadEstimateId"><code>workloadEstimateId</code></a>, <a href="#parameter-usage"><code>usage</code></a></td>
    <td></td>
    <td>Create Amazon Web Services service usage that you want to model in a Workload Estimate. The BatchCreateWorkloadEstimateUsage operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:CreateWorkloadEstimateUsage in your policies.</td>
</tr>
<tr>
    <td><a href="#batch_delete_workload_estimate_usage"><CopyableCode code="batch_delete_workload_estimate_usage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-workloadEstimateId"><code>workloadEstimateId</code></a>, <a href="#parameter-ids"><code>ids</code></a></td>
    <td></td>
    <td>Delete usage that you have created in a Workload estimate. You can only delete usage that you had added and cannot model deletion (or removal) of a existing usage. If you want model removal of an existing usage, see BatchUpdateWorkloadEstimateUsage. The BatchDeleteWorkloadEstimateUsage operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:DeleteWorkloadEstimateUsage in your policies.</td>
</tr>
<tr>
    <td><a href="#batch_update_workload_estimate_usage"><CopyableCode code="batch_update_workload_estimate_usage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-workloadEstimateId"><code>workloadEstimateId</code></a>, <a href="#parameter-usage"><code>usage</code></a></td>
    <td></td>
    <td>Update a newly added or existing usage lines. You can update the usage amounts and usage group based on a usage ID and a Workload estimate ID. The BatchUpdateWorkloadEstimateUsage operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:UpdateWorkloadEstimateUsage in your policies.</td>
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
    defaultValue="get_workload_estimate"
    values={[
        { label: 'get_workload_estimate', value: 'get_workload_estimate' },
        { label: 'list_workload_estimates', value: 'list_workload_estimates' }
    ]}
>
<TabItem value="get_workload_estimate">

Retrieves details of a specific workload estimate.

```sql
SELECT
id,
name,
cost_currency,
created_at,
expires_at,
failure_message,
rate_timestamp,
rate_type,
status,
total_cost
FROM aws.bcm_pricing_calculator.workload_estimates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workload_estimates">

Lists all workload estimates for the account.

```sql
SELECT
id,
name,
cost_currency,
created_at,
expires_at,
failure_message,
rate_timestamp,
rate_type,
status,
total_cost
FROM aws.bcm_pricing_calculator.workload_estimates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workload_estimate"
    values={[
        { label: 'create_workload_estimate', value: 'create_workload_estimate' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workload_estimate">

Creates a new workload estimate to model costs for a specific workload.

```sql
INSERT INTO aws.bcm_pricing_calculator.workload_estimates (
name,
clientToken,
rateType,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ clientToken }}',
'{{ rateType }}',
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
cost_currency,
created_at,
expires_at,
failure_message,
rate_timestamp,
rate_type,
status,
total_cost
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workload_estimates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workload_estimates resource.
    - name: name
      value: "{{ name }}"
      description: |
        A descriptive name for the workload estimate.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier to ensure idempotency of the request.
    - name: rateType
      value: "{{ rateType }}"
      description: |
        The type of pricing rates to use for the estimate.
      valid_values: ['BEFORE_DISCOUNTS', 'AFTER_DISCOUNTS', 'AFTER_DISCOUNTS_AND_COMMITMENTS']
    - name: tags
      value: "{{ tags }}"
      description: |
        The tags to apply to the workload estimate.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workload_estimate"
    values={[
        { label: 'update_workload_estimate', value: 'update_workload_estimate' }
    ]}
>
<TabItem value="update_workload_estimate">

Updates an existing workload estimate.

```sql
UPDATE aws.bcm_pricing_calculator.workload_estimates
SET 
identifier = '{{ identifier }}',
name = '{{ name }}',
expiresAt = '{{ expiresAt }}'
WHERE 
region = '{{ region }}' --required
AND identifier = '{{ identifier }}' --required
RETURNING
id,
name,
cost_currency,
created_at,
expires_at,
failure_message,
rate_timestamp,
rate_type,
status,
total_cost;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workload_estimate"
    values={[
        { label: 'delete_workload_estimate', value: 'delete_workload_estimate' }
    ]}
>
<TabItem value="delete_workload_estimate">

Deletes an existing workload estimate.

```sql
DELETE FROM aws.bcm_pricing_calculator.workload_estimates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_create_workload_estimate_usage"
    values={[
        { label: 'batch_create_workload_estimate_usage', value: 'batch_create_workload_estimate_usage' },
        { label: 'batch_delete_workload_estimate_usage', value: 'batch_delete_workload_estimate_usage' },
        { label: 'batch_update_workload_estimate_usage', value: 'batch_update_workload_estimate_usage' }
    ]}
>
<TabItem value="batch_create_workload_estimate_usage">

Create Amazon Web Services service usage that you want to model in a Workload Estimate. The BatchCreateWorkloadEstimateUsage operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:CreateWorkloadEstimateUsage in your policies.

```sql
EXEC aws.bcm_pricing_calculator.workload_estimates.batch_create_workload_estimate_usage 
@region='{{ region }}' --required 
@@json=
'{
"workloadEstimateId": "{{ workloadEstimateId }}", 
"usage": "{{ usage }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_workload_estimate_usage">

Delete usage that you have created in a Workload estimate. You can only delete usage that you had added and cannot model deletion (or removal) of a existing usage. If you want model removal of an existing usage, see BatchUpdateWorkloadEstimateUsage. The BatchDeleteWorkloadEstimateUsage operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:DeleteWorkloadEstimateUsage in your policies.

```sql
EXEC aws.bcm_pricing_calculator.workload_estimates.batch_delete_workload_estimate_usage 
@region='{{ region }}' --required 
@@json=
'{
"workloadEstimateId": "{{ workloadEstimateId }}", 
"ids": "{{ ids }}"
}'
;
```
</TabItem>
<TabItem value="batch_update_workload_estimate_usage">

Update a newly added or existing usage lines. You can update the usage amounts and usage group based on a usage ID and a Workload estimate ID. The BatchUpdateWorkloadEstimateUsage operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:UpdateWorkloadEstimateUsage in your policies.

```sql
EXEC aws.bcm_pricing_calculator.workload_estimates.batch_update_workload_estimate_usage 
@region='{{ region }}' --required 
@@json=
'{
"workloadEstimateId": "{{ workloadEstimateId }}", 
"usage": "{{ usage }}"
}'
;
```
</TabItem>
</Tabs>

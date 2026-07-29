--- 
title: bill_scenarios
hide_title: false
hide_table_of_contents: false
keywords:
  - bill_scenarios
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

Creates, updates, deletes, gets or lists a <code>bill_scenarios</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bill_scenarios" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bcm_pricing_calculator.bill_scenarios" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bill_scenario"
    values={[
        { label: 'get_bill_scenario', value: 'get_bill_scenario' },
        { label: 'list_bill_scenarios', value: 'list_bill_scenarios' }
    ]}
>
<TabItem value="get_bill_scenario">

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
    <td>The unique identifier of the retrieved bill scenario. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the retrieved bill scenario. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bill_interval" /></td>
    <td><code>object</code></td>
    <td>The time period covered by the bill scenario.</td>
</tr>
<tr>
    <td><CopyableCode code="cost_category_group_sharing_preference_arn" /></td>
    <td><code>string</code></td>
    <td>The arn of the cost category used in the reserved and prioritized group sharing. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:ce::&#91;0-9&#93;&#123;12&#125;:costcategory/&#91;a-f0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the bill scenario was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the bill scenario will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>An error message if the bill scenario retrieval failed.</td>
</tr>
<tr>
    <td><CopyableCode code="group_sharing_preference" /></td>
    <td><code>string</code></td>
    <td>The setting for the reserved instance and savings plan group sharing used in this estimate. (OPEN, PRIORITIZED, RESTRICTED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the bill scenario. (READY, LOCKED, FAILED, STALE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_bill_scenarios">

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
    <td>The unique identifier of the bill scenario. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the bill scenario. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bill_interval" /></td>
    <td><code>object</code></td>
    <td>The time period covered by the bill scenario.</td>
</tr>
<tr>
    <td><CopyableCode code="cost_category_group_sharing_preference_arn" /></td>
    <td><code>string</code></td>
    <td>The arn of the cost category used in the reserved and prioritized group sharing. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:ce::&#91;0-9&#93;&#123;12&#125;:costcategory/&#91;a-f0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the bill scenario was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the bill scenario will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>An error message if the bill scenario creation or processing failed.</td>
</tr>
<tr>
    <td><CopyableCode code="group_sharing_preference" /></td>
    <td><code>string</code></td>
    <td>The setting for the reserved instance and savings plan group sharing used in this estimate. (OPEN, PRIORITIZED, RESTRICTED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the bill scenario. (READY, LOCKED, FAILED, STALE)</td>
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
    <td><a href="#get_bill_scenario"><CopyableCode code="get_bill_scenario" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details of a specific bill scenario.</td>
</tr>
<tr>
    <td><a href="#list_bill_scenarios"><CopyableCode code="list_bill_scenarios" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all bill scenarios for the account.</td>
</tr>
<tr>
    <td><a href="#create_bill_scenario"><CopyableCode code="create_bill_scenario" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new bill scenario to model potential changes to Amazon Web Services usage and costs.</td>
</tr>
<tr>
    <td><a href="#update_bill_scenario"><CopyableCode code="update_bill_scenario" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-identifier"><code>identifier</code></a></td>
    <td></td>
    <td>Updates an existing bill scenario.</td>
</tr>
<tr>
    <td><a href="#delete_bill_scenario"><CopyableCode code="delete_bill_scenario" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing bill scenario.</td>
</tr>
<tr>
    <td><a href="#batch_create_bill_scenario_commitment_modification"><CopyableCode code="batch_create_bill_scenario_commitment_modification" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-billScenarioId"><code>billScenarioId</code></a>, <a href="#parameter-commitmentModifications"><code>commitmentModifications</code></a></td>
    <td></td>
    <td>Create Compute Savings Plans, EC2 Instance Savings Plans, or EC2 Reserved Instances commitments that you want to model in a Bill Scenario. The BatchCreateBillScenarioCommitmentModification operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:CreateBillScenarioCommitmentModification in your policies.</td>
</tr>
<tr>
    <td><a href="#batch_create_bill_scenario_usage_modification"><CopyableCode code="batch_create_bill_scenario_usage_modification" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-billScenarioId"><code>billScenarioId</code></a>, <a href="#parameter-usageModifications"><code>usageModifications</code></a></td>
    <td></td>
    <td>Create Amazon Web Services service usage that you want to model in a Bill Scenario. The BatchCreateBillScenarioUsageModification operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:CreateBillScenarioUsageModification in your policies.</td>
</tr>
<tr>
    <td><a href="#batch_delete_bill_scenario_commitment_modification"><CopyableCode code="batch_delete_bill_scenario_commitment_modification" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-billScenarioId"><code>billScenarioId</code></a>, <a href="#parameter-ids"><code>ids</code></a></td>
    <td></td>
    <td>Delete commitment that you have created in a Bill Scenario. You can only delete a commitment that you had added and cannot model deletion (or removal) of a existing commitment. If you want model deletion of an existing commitment, see the negate BillScenarioCommitmentModificationAction of BatchCreateBillScenarioCommitmentModification operation. The BatchDeleteBillScenarioCommitmentModification operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:DeleteBillScenarioCommitmentModification in your policies.</td>
</tr>
<tr>
    <td><a href="#batch_delete_bill_scenario_usage_modification"><CopyableCode code="batch_delete_bill_scenario_usage_modification" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-billScenarioId"><code>billScenarioId</code></a>, <a href="#parameter-ids"><code>ids</code></a></td>
    <td></td>
    <td>Delete usage that you have created in a Bill Scenario. You can only delete usage that you had added and cannot model deletion (or removal) of a existing usage. If you want model removal of an existing usage, see BatchUpdateBillScenarioUsageModification. The BatchDeleteBillScenarioUsageModification operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:DeleteBillScenarioUsageModification in your policies.</td>
</tr>
<tr>
    <td><a href="#batch_update_bill_scenario_commitment_modification"><CopyableCode code="batch_update_bill_scenario_commitment_modification" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-billScenarioId"><code>billScenarioId</code></a>, <a href="#parameter-commitmentModifications"><code>commitmentModifications</code></a></td>
    <td></td>
    <td>Update a newly added or existing commitment. You can update the commitment group based on a commitment ID and a Bill scenario ID. The BatchUpdateBillScenarioCommitmentModification operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:UpdateBillScenarioCommitmentModification in your policies.</td>
</tr>
<tr>
    <td><a href="#batch_update_bill_scenario_usage_modification"><CopyableCode code="batch_update_bill_scenario_usage_modification" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-billScenarioId"><code>billScenarioId</code></a>, <a href="#parameter-usageModifications"><code>usageModifications</code></a></td>
    <td></td>
    <td>Update a newly added or existing usage lines. You can update the usage amounts, usage hour, and usage group based on a usage ID and a Bill scenario ID. The BatchUpdateBillScenarioUsageModification operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:UpdateBillScenarioUsageModification in your policies.</td>
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
    defaultValue="get_bill_scenario"
    values={[
        { label: 'get_bill_scenario', value: 'get_bill_scenario' },
        { label: 'list_bill_scenarios', value: 'list_bill_scenarios' }
    ]}
>
<TabItem value="get_bill_scenario">

Retrieves details of a specific bill scenario.

```sql
SELECT
id,
name,
bill_interval,
cost_category_group_sharing_preference_arn,
created_at,
expires_at,
failure_message,
group_sharing_preference,
status
FROM aws.bcm_pricing_calculator.bill_scenarios
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_bill_scenarios">

Lists all bill scenarios for the account.

```sql
SELECT
id,
name,
bill_interval,
cost_category_group_sharing_preference_arn,
created_at,
expires_at,
failure_message,
group_sharing_preference,
status
FROM aws.bcm_pricing_calculator.bill_scenarios
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bill_scenario"
    values={[
        { label: 'create_bill_scenario', value: 'create_bill_scenario' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bill_scenario">

Creates a new bill scenario to model potential changes to Amazon Web Services usage and costs.

```sql
INSERT INTO aws.bcm_pricing_calculator.bill_scenarios (
name,
clientToken,
tags,
groupSharingPreference,
costCategoryGroupSharingPreferenceArn,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ groupSharingPreference }}',
'{{ costCategoryGroupSharingPreferenceArn }}',
'{{ region }}'
RETURNING
id,
name,
bill_interval,
cost_category_group_sharing_preference_arn,
created_at,
expires_at,
failure_message,
group_sharing_preference,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bill_scenarios
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bill_scenarios resource.
    - name: name
      value: "{{ name }}"
      description: |
        A descriptive name for the bill scenario.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier to ensure idempotency of the request.
    - name: tags
      value: "{{ tags }}"
      description: |
        The tags to apply to the bill scenario.
    - name: groupSharingPreference
      value: "{{ groupSharingPreference }}"
      description: |
        The setting for the reserved instance and savings plan group sharing used in this estimate.
      valid_values: ['OPEN', 'PRIORITIZED', 'RESTRICTED']
    - name: costCategoryGroupSharingPreferenceArn
      value: "{{ costCategoryGroupSharingPreferenceArn }}"
      description: |
        The arn of the cost category used in the reserved and prioritized group sharing.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_bill_scenario"
    values={[
        { label: 'update_bill_scenario', value: 'update_bill_scenario' }
    ]}
>
<TabItem value="update_bill_scenario">

Updates an existing bill scenario.

```sql
UPDATE aws.bcm_pricing_calculator.bill_scenarios
SET 
identifier = '{{ identifier }}',
name = '{{ name }}',
expiresAt = '{{ expiresAt }}',
groupSharingPreference = '{{ groupSharingPreference }}',
costCategoryGroupSharingPreferenceArn = '{{ costCategoryGroupSharingPreferenceArn }}'
WHERE 
region = '{{ region }}' --required
AND identifier = '{{ identifier }}' --required
RETURNING
id,
name,
bill_interval,
cost_category_group_sharing_preference_arn,
created_at,
expires_at,
failure_message,
group_sharing_preference,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bill_scenario"
    values={[
        { label: 'delete_bill_scenario', value: 'delete_bill_scenario' }
    ]}
>
<TabItem value="delete_bill_scenario">

Deletes an existing bill scenario.

```sql
DELETE FROM aws.bcm_pricing_calculator.bill_scenarios
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_create_bill_scenario_commitment_modification"
    values={[
        { label: 'batch_create_bill_scenario_commitment_modification', value: 'batch_create_bill_scenario_commitment_modification' },
        { label: 'batch_create_bill_scenario_usage_modification', value: 'batch_create_bill_scenario_usage_modification' },
        { label: 'batch_delete_bill_scenario_commitment_modification', value: 'batch_delete_bill_scenario_commitment_modification' },
        { label: 'batch_delete_bill_scenario_usage_modification', value: 'batch_delete_bill_scenario_usage_modification' },
        { label: 'batch_update_bill_scenario_commitment_modification', value: 'batch_update_bill_scenario_commitment_modification' },
        { label: 'batch_update_bill_scenario_usage_modification', value: 'batch_update_bill_scenario_usage_modification' }
    ]}
>
<TabItem value="batch_create_bill_scenario_commitment_modification">

Create Compute Savings Plans, EC2 Instance Savings Plans, or EC2 Reserved Instances commitments that you want to model in a Bill Scenario. The BatchCreateBillScenarioCommitmentModification operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:CreateBillScenarioCommitmentModification in your policies.

```sql
EXEC aws.bcm_pricing_calculator.bill_scenarios.batch_create_bill_scenario_commitment_modification 
@region='{{ region }}' --required 
@@json=
'{
"billScenarioId": "{{ billScenarioId }}", 
"commitmentModifications": "{{ commitmentModifications }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="batch_create_bill_scenario_usage_modification">

Create Amazon Web Services service usage that you want to model in a Bill Scenario. The BatchCreateBillScenarioUsageModification operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:CreateBillScenarioUsageModification in your policies.

```sql
EXEC aws.bcm_pricing_calculator.bill_scenarios.batch_create_bill_scenario_usage_modification 
@region='{{ region }}' --required 
@@json=
'{
"billScenarioId": "{{ billScenarioId }}", 
"usageModifications": "{{ usageModifications }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_bill_scenario_commitment_modification">

Delete commitment that you have created in a Bill Scenario. You can only delete a commitment that you had added and cannot model deletion (or removal) of a existing commitment. If you want model deletion of an existing commitment, see the negate BillScenarioCommitmentModificationAction of BatchCreateBillScenarioCommitmentModification operation. The BatchDeleteBillScenarioCommitmentModification operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:DeleteBillScenarioCommitmentModification in your policies.

```sql
EXEC aws.bcm_pricing_calculator.bill_scenarios.batch_delete_bill_scenario_commitment_modification 
@region='{{ region }}' --required 
@@json=
'{
"billScenarioId": "{{ billScenarioId }}", 
"ids": "{{ ids }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_bill_scenario_usage_modification">

Delete usage that you have created in a Bill Scenario. You can only delete usage that you had added and cannot model deletion (or removal) of a existing usage. If you want model removal of an existing usage, see BatchUpdateBillScenarioUsageModification. The BatchDeleteBillScenarioUsageModification operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:DeleteBillScenarioUsageModification in your policies.

```sql
EXEC aws.bcm_pricing_calculator.bill_scenarios.batch_delete_bill_scenario_usage_modification 
@region='{{ region }}' --required 
@@json=
'{
"billScenarioId": "{{ billScenarioId }}", 
"ids": "{{ ids }}"
}'
;
```
</TabItem>
<TabItem value="batch_update_bill_scenario_commitment_modification">

Update a newly added or existing commitment. You can update the commitment group based on a commitment ID and a Bill scenario ID. The BatchUpdateBillScenarioCommitmentModification operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:UpdateBillScenarioCommitmentModification in your policies.

```sql
EXEC aws.bcm_pricing_calculator.bill_scenarios.batch_update_bill_scenario_commitment_modification 
@region='{{ region }}' --required 
@@json=
'{
"billScenarioId": "{{ billScenarioId }}", 
"commitmentModifications": "{{ commitmentModifications }}"
}'
;
```
</TabItem>
<TabItem value="batch_update_bill_scenario_usage_modification">

Update a newly added or existing usage lines. You can update the usage amounts, usage hour, and usage group based on a usage ID and a Bill scenario ID. The BatchUpdateBillScenarioUsageModification operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission bcm-pricing-calculator:UpdateBillScenarioUsageModification in your policies.

```sql
EXEC aws.bcm_pricing_calculator.bill_scenarios.batch_update_bill_scenario_usage_modification 
@region='{{ region }}' --required 
@@json=
'{
"billScenarioId": "{{ billScenarioId }}", 
"usageModifications": "{{ usageModifications }}"
}'
;
```
</TabItem>
</Tabs>

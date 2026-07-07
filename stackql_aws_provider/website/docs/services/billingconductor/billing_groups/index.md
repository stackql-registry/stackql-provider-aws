--- 
title: billing_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_groups
  - billingconductor
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

Creates, updates, deletes, gets or lists a <code>billing_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billingconductor.billing_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_billing_groups"
    values={[
        { label: 'list_billing_groups', value: 'list_billing_groups' }
    ]}
>
<TabItem value="list_billing_groups">

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
    <td><CopyableCode code="AccountGrouping" /></td>
    <td><code>object</code></td>
    <td>Specifies if the billing group has automatic account association (AutoAssociate) enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) that can be used to uniquely identify the billing group. (pattern: &lt;code&gt;(arn:aws(-cn)?:billingconductor::&#91;0-9&#93;&#123;12&#125;:billinggroup/)?&#91;a-zA-Z0-9&#93;&#123;10,12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BillingGroupType" /></td>
    <td><code>string</code></td>
    <td>The type of billing group. (STANDARD, TRANSFER_BILLING)</td>
</tr>
<tr>
    <td><CopyableCode code="ComputationPreference" /></td>
    <td><code>object</code></td>
    <td>The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time when the billing group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the billing group.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The most recent time when the billing group was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the billing group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\+=\.\-@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PrimaryAccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID that serves as the main account in a billing group. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of accounts in the particular billing group.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The billing group status. Only one of the valid values can be used. (ACTIVE, PRIMARY_ACCOUNT_MISSING, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>The reason why the billing group is in its current status.</td>
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
    <td><a href="#list_billing_groups"><CopyableCode code="list_billing_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.</td>
</tr>
<tr>
    <td><a href="#create_billing_group"><CopyableCode code="create_billing_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountGrouping"><code>AccountGrouping</code></a>, <a href="#parameter-ComputationPreference"><code>ComputationPreference</code></a></td>
    <td><a href="#parameter-X-Amzn-Client-Token"><code>X-Amzn-Client-Token</code></a></td>
    <td>Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation.</td>
</tr>
<tr>
    <td><a href="#update_billing_group"><CopyableCode code="update_billing_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This updates an existing billing group.</td>
</tr>
<tr>
    <td><a href="#delete_billing_group"><CopyableCode code="delete_billing_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a billing group.</td>
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
<tr id="parameter-X-Amzn-Client-Token">
    <td><CopyableCode code="X-Amzn-Client-Token" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_billing_groups"
    values={[
        { label: 'list_billing_groups', value: 'list_billing_groups' }
    ]}
>
<TabItem value="list_billing_groups">

A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.

```sql
SELECT
AccountGrouping,
Arn,
BillingGroupType,
ComputationPreference,
CreationTime,
Description,
LastModifiedTime,
Name,
PrimaryAccountId,
Size,
Status,
StatusReason
FROM aws.billingconductor.billing_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_billing_group"
    values={[
        { label: 'create_billing_group', value: 'create_billing_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_billing_group">

Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation.

```sql
INSERT INTO aws.billingconductor.billing_groups (
Name,
AccountGrouping,
ComputationPreference,
PrimaryAccountId,
Description,
Tags,
region,
`X-Amzn-Client-Token`
)
SELECT 
'{{ Name }}',
'{{ AccountGrouping }}' /* required */,
'{{ ComputationPreference }}' /* required */,
'{{ PrimaryAccountId }}',
'{{ Description }}',
'{{ Tags }}',
'{{ region }}',
'{{ X-Amzn-Client-Token }}'
RETURNING
Arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: billing_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the billing_groups resource.
    - name: Name
      value: "{{ Name }}"
    - name: AccountGrouping
      description: |
        The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated billing family.
      value:
        LinkedAccountIds:
          - "{{ LinkedAccountIds }}"
        AutoAssociate: {{ AutoAssociate }}
        ResponsibilityTransferArn: "{{ ResponsibilityTransferArn }}"
    - name: ComputationPreference
      description: |
        The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
      value:
        PricingPlanArn: "{{ PricingPlanArn }}"
    - name: PrimaryAccountId
      value: "{{ PrimaryAccountId }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: X-Amzn-Client-Token
      value: "{{ X-Amzn-Client-Token }}"
      description: A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
      description: A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_billing_group"
    values={[
        { label: 'update_billing_group', value: 'update_billing_group' }
    ]}
>
<TabItem value="update_billing_group">

This updates an existing billing group.

```sql
UPDATE aws.billingconductor.billing_groups
SET 
Arn = '{{ Arn }}',
Name = '{{ Name }}',
Status = '{{ Status }}',
ComputationPreference = '{{ ComputationPreference }}',
Description = '{{ Description }}',
AccountGrouping = '{{ AccountGrouping }}'
WHERE 
region = '{{ region }}' --required
RETURNING
AccountGrouping,
Arn,
Description,
LastModifiedTime,
Name,
PricingPlanArn,
PrimaryAccountId,
Size,
Status,
StatusReason;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_billing_group"
    values={[
        { label: 'delete_billing_group', value: 'delete_billing_group' }
    ]}
>
<TabItem value="delete_billing_group">

Deletes a billing group.

```sql
DELETE FROM aws.billingconductor.billing_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

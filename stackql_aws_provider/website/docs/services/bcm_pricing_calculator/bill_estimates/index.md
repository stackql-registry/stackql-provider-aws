--- 
title: bill_estimates
hide_title: false
hide_table_of_contents: false
keywords:
  - bill_estimates
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

Creates, updates, deletes, gets or lists a <code>bill_estimates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bill_estimates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bcm_pricing_calculator.bill_estimates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bill_estimate"
    values={[
        { label: 'get_bill_estimate', value: 'get_bill_estimate' },
        { label: 'list_bill_estimates', value: 'list_bill_estimates' }
    ]}
>
<TabItem value="get_bill_estimate">

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
    <td>The unique identifier of the retrieved bill estimate. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the retrieved bill estimate. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billInterval" /></td>
    <td><code>object</code></td>
    <td>The time period covered by the bill estimate.</td>
</tr>
<tr>
    <td><CopyableCode code="costCategoryGroupSharingPreferenceArn" /></td>
    <td><code>string</code></td>
    <td>The arn of the cost category used in the reserved and prioritized group sharing. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:ce::&#91;0-9&#93;&#123;12&#125;:costcategory/&#91;a-f0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="costCategoryGroupSharingPreferenceEffectiveDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of the effective date of the cost category used in the group sharing settings.</td>
</tr>
<tr>
    <td><CopyableCode code="costSummary" /></td>
    <td><code>object</code></td>
    <td>A summary of the estimated costs.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the bill estimate was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expiresAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the bill estimate will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="failureMessage" /></td>
    <td><code>string</code></td>
    <td>An error message if the bill estimate retrieval failed.</td>
</tr>
<tr>
    <td><CopyableCode code="groupSharingPreference" /></td>
    <td><code>string</code></td>
    <td>The setting for the reserved instance and savings plan group sharing used in this estimate. (OPEN, PRIORITIZED, RESTRICTED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the bill estimate. (IN_PROGRESS, COMPLETE, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_bill_estimates">

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
    <td>The unique identifier of the bill estimate. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the bill estimate. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billInterval" /></td>
    <td><code>object</code></td>
    <td>The time period covered by the bill estimate.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the bill estimate was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expiresAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the bill estimate will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the bill estimate. (IN_PROGRESS, COMPLETE, FAILED)</td>
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
    <td><a href="#get_bill_estimate"><CopyableCode code="get_bill_estimate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details of a specific bill estimate.</td>
</tr>
<tr>
    <td><a href="#list_bill_estimates"><CopyableCode code="list_bill_estimates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all bill estimates for the account.</td>
</tr>
<tr>
    <td><a href="#create_bill_estimate"><CopyableCode code="create_bill_estimate" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-billScenarioId"><code>billScenarioId</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a Bill estimate from a Bill scenario. In the Bill scenario you can model usage addition, usage changes, and usage removal. You can also model commitment addition and commitment removal. After all changes in a Bill scenario is made satisfactorily, you can call this API with a Bill scenario ID to generate the Bill estimate. Bill estimate calculates the pre-tax cost for your consolidated billing family, incorporating all modeled usage and commitments alongside existing usage and commitments from your most recent completed anniversary bill, with any applicable discounts applied.</td>
</tr>
<tr>
    <td><a href="#update_bill_estimate"><CopyableCode code="update_bill_estimate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-identifier"><code>identifier</code></a></td>
    <td></td>
    <td>Updates an existing bill estimate.</td>
</tr>
<tr>
    <td><a href="#delete_bill_estimate"><CopyableCode code="delete_bill_estimate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing bill estimate.</td>
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
    defaultValue="get_bill_estimate"
    values={[
        { label: 'get_bill_estimate', value: 'get_bill_estimate' },
        { label: 'list_bill_estimates', value: 'list_bill_estimates' }
    ]}
>
<TabItem value="get_bill_estimate">

Retrieves details of a specific bill estimate.

```sql
SELECT
id,
name,
billInterval,
costCategoryGroupSharingPreferenceArn,
costCategoryGroupSharingPreferenceEffectiveDate,
costSummary,
createdAt,
expiresAt,
failureMessage,
groupSharingPreference,
status
FROM aws.bcm_pricing_calculator.bill_estimates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_bill_estimates">

Lists all bill estimates for the account.

```sql
SELECT
id,
name,
billInterval,
createdAt,
expiresAt,
status
FROM aws.bcm_pricing_calculator.bill_estimates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bill_estimate"
    values={[
        { label: 'create_bill_estimate', value: 'create_bill_estimate' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bill_estimate">

Create a Bill estimate from a Bill scenario. In the Bill scenario you can model usage addition, usage changes, and usage removal. You can also model commitment addition and commitment removal. After all changes in a Bill scenario is made satisfactorily, you can call this API with a Bill scenario ID to generate the Bill estimate. Bill estimate calculates the pre-tax cost for your consolidated billing family, incorporating all modeled usage and commitments alongside existing usage and commitments from your most recent completed anniversary bill, with any applicable discounts applied.

```sql
INSERT INTO aws.bcm_pricing_calculator.bill_estimates (
billScenarioId,
name,
clientToken,
tags,
region
)
SELECT 
'{{ billScenarioId }}' /* required */,
'{{ name }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
billInterval,
costCategoryGroupSharingPreferenceArn,
costCategoryGroupSharingPreferenceEffectiveDate,
costSummary,
createdAt,
expiresAt,
failureMessage,
groupSharingPreference,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bill_estimates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bill_estimates resource.
    - name: billScenarioId
      value: "{{ billScenarioId }}"
      description: |
        The ID of the Bill Scenario for which you want to create a Bill estimate.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the Bill estimate that will be created. Names must be unique for an account.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
    - name: tags
      value: "{{ tags }}"
      description: |
        An optional list of tags to associate with the specified BillEstimate. You can use resource tags to control access to your BillEstimate using IAM policies. Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags: Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services. The maximum length of a key is 128 characters. The maximum length of a value is 256 characters. Keys and values can only contain alphanumeric characters, spaces, and any of the following: _.:/=+@-. Keys and values are case sensitive. Keys and values are trimmed for any leading or trailing whitespaces. Don't use aws: as a prefix for your keys. This prefix is reserved for Amazon Web Services.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_bill_estimate"
    values={[
        { label: 'update_bill_estimate', value: 'update_bill_estimate' }
    ]}
>
<TabItem value="update_bill_estimate">

Updates an existing bill estimate.

```sql
UPDATE aws.bcm_pricing_calculator.bill_estimates
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
billInterval,
costCategoryGroupSharingPreferenceArn,
costCategoryGroupSharingPreferenceEffectiveDate,
costSummary,
createdAt,
expiresAt,
failureMessage,
groupSharingPreference,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bill_estimate"
    values={[
        { label: 'delete_bill_estimate', value: 'delete_bill_estimate' }
    ]}
>
<TabItem value="delete_bill_estimate">

Deletes an existing bill estimate.

```sql
DELETE FROM aws.bcm_pricing_calculator.bill_estimates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

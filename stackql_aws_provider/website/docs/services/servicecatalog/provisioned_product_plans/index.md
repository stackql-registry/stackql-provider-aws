--- 
title: provisioned_product_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - provisioned_product_plans
  - servicecatalog
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

Creates, updates, deletes, gets or lists a <code>provisioned_product_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="provisioned_product_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.provisioned_product_plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_provisioned_product_plan"
    values={[
        { label: 'describe_provisioned_product_plan', value: 'describe_provisioned_product_plan' },
        { label: 'list_provisioned_product_plans', value: 'list_provisioned_product_plans' }
    ]}
>
<TabItem value="describe_provisioned_product_plan">

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
    <td><CopyableCode code="NextPageToken" /></td>
    <td><code>string</code></td>
    <td>The page token to use to retrieve the next set of results. If there are no additional results, this value is null. (pattern: &lt;code&gt;&#91;\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProvisionedProductPlanDetails" /></td>
    <td><code>object</code></td>
    <td>Information about the plan.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceChanges" /></td>
    <td><code>array</code></td>
    <td>Information about the resource changes that will occur when the plan is executed.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_provisioned_product_plans">

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
    <td><CopyableCode code="PlanId" /></td>
    <td><code>string</code></td>
    <td>The plan identifier. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PlanName" /></td>
    <td><code>string</code></td>
    <td>The name of the plan.</td>
</tr>
<tr>
    <td><CopyableCode code="PlanType" /></td>
    <td><code>string</code></td>
    <td>The plan type. (CLOUDFORMATION)</td>
</tr>
<tr>
    <td><CopyableCode code="ProvisionProductId" /></td>
    <td><code>string</code></td>
    <td>The product identifier. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProvisionProductName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of the provisioned product. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9._-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProvisioningArtifactId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the provisioning artifact. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_provisioned_product_plan"><CopyableCode code="describe_provisioned_product_plan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the resource changes for the specified plan.</td>
</tr>
<tr>
    <td><a href="#list_provisioned_product_plans"><CopyableCode code="list_provisioned_product_plans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the plans for the specified provisioned product or all plans to which the user has access.</td>
</tr>
<tr>
    <td><a href="#create_provisioned_product_plan"><CopyableCode code="create_provisioned_product_plan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PlanName"><code>PlanName</code></a>, <a href="#parameter-PlanType"><code>PlanType</code></a>, <a href="#parameter-ProductId"><code>ProductId</code></a>, <a href="#parameter-ProvisionedProductName"><code>ProvisionedProductName</code></a>, <a href="#parameter-ProvisioningArtifactId"><code>ProvisioningArtifactId</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Creates a plan. A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed. You can create one plan for each provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILABLE or TAINTED. To view the resource changes in the change set, use DescribeProvisionedProductPlan. To create or modify the provisioned product, use ExecuteProvisionedProductPlan.</td>
</tr>
<tr>
    <td><a href="#delete_provisioned_product_plan"><CopyableCode code="delete_provisioned_product_plan" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified plan.</td>
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
    defaultValue="describe_provisioned_product_plan"
    values={[
        { label: 'describe_provisioned_product_plan', value: 'describe_provisioned_product_plan' },
        { label: 'list_provisioned_product_plans', value: 'list_provisioned_product_plans' }
    ]}
>
<TabItem value="describe_provisioned_product_plan">

Gets information about the resource changes for the specified plan.

```sql
SELECT
NextPageToken,
ProvisionedProductPlanDetails,
ResourceChanges
FROM aws.servicecatalog.provisioned_product_plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_provisioned_product_plans">

Lists the plans for the specified provisioned product or all plans to which the user has access.

```sql
SELECT
PlanId,
PlanName,
PlanType,
ProvisionProductId,
ProvisionProductName,
ProvisioningArtifactId
FROM aws.servicecatalog.provisioned_product_plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_provisioned_product_plan"
    values={[
        { label: 'create_provisioned_product_plan', value: 'create_provisioned_product_plan' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_provisioned_product_plan">

Creates a plan. A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed. You can create one plan for each provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILABLE or TAINTED. To view the resource changes in the change set, use DescribeProvisionedProductPlan. To create or modify the provisioned product, use ExecuteProvisionedProductPlan.

```sql
INSERT INTO aws.servicecatalog.provisioned_product_plans (
AcceptLanguage,
PlanName,
PlanType,
NotificationArns,
PathId,
ProductId,
ProvisionedProductName,
ProvisioningArtifactId,
ProvisioningParameters,
IdempotencyToken,
Tags,
region
)
SELECT 
'{{ AcceptLanguage }}',
'{{ PlanName }}' /* required */,
'{{ PlanType }}' /* required */,
'{{ NotificationArns }}',
'{{ PathId }}',
'{{ ProductId }}' /* required */,
'{{ ProvisionedProductName }}' /* required */,
'{{ ProvisioningArtifactId }}' /* required */,
'{{ ProvisioningParameters }}',
'{{ IdempotencyToken }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
PlanId,
PlanName,
ProvisionProductId,
ProvisionedProductName,
ProvisioningArtifactId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: provisioned_product_plans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the provisioned_product_plans resource.
    - name: AcceptLanguage
      value: "{{ AcceptLanguage }}"
      description: |
        The language code. jp - Japanese zh - Chinese
    - name: PlanName
      value: "{{ PlanName }}"
      description: |
        The name of the plan.
    - name: PlanType
      value: "{{ PlanType }}"
      description: |
        The plan type.
      valid_values: ['CLOUDFORMATION']
    - name: NotificationArns
      value:
        - "{{ NotificationArns }}"
      description: |
        Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.
    - name: PathId
      value: "{{ PathId }}"
      description: |
        The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use ListLaunchPaths.
    - name: ProductId
      value: "{{ ProductId }}"
      description: |
        The product identifier.
    - name: ProvisionedProductName
      value: "{{ ProvisionedProductName }}"
      description: |
        A user-friendly name for the provisioned product. This value must be unique for the Amazon Web Services account and cannot be updated after the product is provisioned.
    - name: ProvisioningArtifactId
      value: "{{ ProvisioningArtifactId }}"
      description: |
        The identifier of the provisioning artifact.
    - name: ProvisioningParameters
      description: |
        Parameters specified by the administrator that are required for provisioning the product.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          UsePreviousValue: {{ UsePreviousValue }}
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
    - name: Tags
      description: |
        One or more tags. If the plan is for an existing provisioned product, the product must have a RESOURCE_UPDATE constraint with TagUpdatesOnProvisionedProduct set to ALLOWED to allow tag updates.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_provisioned_product_plan"
    values={[
        { label: 'delete_provisioned_product_plan', value: 'delete_provisioned_product_plan' }
    ]}
>
<TabItem value="delete_provisioned_product_plan">

Deletes the specified plan.

```sql
DELETE FROM aws.servicecatalog.provisioned_product_plans
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

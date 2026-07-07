--- 
title: custom_line_item_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_line_item_versions
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

Creates, updates, deletes, gets or lists a <code>custom_line_item_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_line_item_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billingconductor.custom_line_item_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_custom_line_item_versions"
    values={[
        { label: 'list_custom_line_item_versions', value: 'list_custom_line_item_versions' }
    ]}
>
<TabItem value="list_custom_line_item_versions">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account in which this custom line item will be applied to. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>A list of custom line item Amazon Resource Names (ARNs) to retrieve information. (pattern: &lt;code&gt;(arn:aws(-cn)?:billingconductor::&#91;0-9&#93;&#123;12&#125;:customlineitem/)?&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AssociationSize" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of resources that are associated with the custom line item.</td>
</tr>
<tr>
    <td><CopyableCode code="BillingGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the billing group that the custom line item applies to. (pattern: &lt;code&gt;(arn:aws(-cn)?:billingconductor::&#91;0-9&#93;&#123;12&#125;:billinggroup/)?&#91;a-zA-Z0-9&#93;&#123;10,12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ChargeDetails" /></td>
    <td><code>object</code></td>
    <td>A representation of the charge details of a custom line item.</td>
</tr>
<tr>
    <td><CopyableCode code="ComputationRule" /></td>
    <td><code>string</code></td>
    <td>The display settings of the custom line item (ITEMIZED, CONSOLIDATED)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time when the custom line item version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrencyCode" /></td>
    <td><code>string</code></td>
    <td>The charge value currency of the custom line item. (USD, CNY)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the custom line item.</td>
</tr>
<tr>
    <td><CopyableCode code="EndBillingPeriod" /></td>
    <td><code>string</code></td>
    <td>The end billing period of the custom line item version. (pattern: &lt;code&gt;\d&#123;4&#125;-(0?&#91;1-9&#93;|1&#91;012&#93;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The most recent time that the custom line item version was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom line item. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\+=\.\-@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PresentationDetails" /></td>
    <td><code>object</code></td>
    <td>An object that defines how custom line item charges are presented in the bill, containing specifications for service presentation.</td>
</tr>
<tr>
    <td><CopyableCode code="ProductCode" /></td>
    <td><code>string</code></td>
    <td>The product code that’s associated with the custom line item.</td>
</tr>
<tr>
    <td><CopyableCode code="StartBillingPeriod" /></td>
    <td><code>string</code></td>
    <td>The start billing period of the custom line item version. (pattern: &lt;code&gt;\d&#123;4&#125;-(0?&#91;1-9&#93;|1&#91;012&#93;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The inclusive start time.</td>
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
    <td><a href="#list_custom_line_item_versions"><CopyableCode code="list_custom_line_item_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A paginated call to get a list of all custom line item versions.</td>
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
    defaultValue="list_custom_line_item_versions"
    values={[
        { label: 'list_custom_line_item_versions', value: 'list_custom_line_item_versions' }
    ]}
>
<TabItem value="list_custom_line_item_versions">

A paginated call to get a list of all custom line item versions.

```sql
SELECT
AccountId,
Arn,
AssociationSize,
BillingGroupArn,
ChargeDetails,
ComputationRule,
CreationTime,
CurrencyCode,
Description,
EndBillingPeriod,
LastModifiedTime,
Name,
PresentationDetails,
ProductCode,
StartBillingPeriod,
StartTime
FROM aws.billingconductor.custom_line_item_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

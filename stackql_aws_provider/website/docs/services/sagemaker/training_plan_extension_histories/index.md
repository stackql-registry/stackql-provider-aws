--- 
title: training_plan_extension_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - training_plan_extension_histories
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>training_plan_extension_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="training_plan_extension_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.training_plan_extension_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_training_plan_extension_history"
    values={[
        { label: 'describe_training_plan_extension_history', value: 'describe_training_plan_extension_history' }
    ]}
>
<TabItem value="describe_training_plan_extension_history">

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
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone of the extension.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone ID of the extension. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;3&#125;\d-az\d&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CurrencyCode" /></td>
    <td><code>string</code></td>
    <td>The currency code for the upfront fee (e.g., USD).</td>
</tr>
<tr>
    <td><CopyableCode code="DurationHours" /></td>
    <td><code>integer</code></td>
    <td>The duration of the extension in hours.</td>
</tr>
<tr>
    <td><CopyableCode code="EndDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date of the extension period.</td>
</tr>
<tr>
    <td><CopyableCode code="ExtendedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the extension was created.</td>
</tr>
<tr>
    <td><CopyableCode code="PaymentStatus" /></td>
    <td><code>string</code></td>
    <td>The payment processing status of the extension.</td>
</tr>
<tr>
    <td><CopyableCode code="StartDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date of the extension period.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the extension (e.g., Pending, Active, Scheduled, Failed, Expired).</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingPlanExtensionOfferingId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the extension offering that was used to create this extension.</td>
</tr>
<tr>
    <td><CopyableCode code="UpfrontFee" /></td>
    <td><code>string</code></td>
    <td>The upfront fee for the extension.</td>
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
    <td><a href="#describe_training_plan_extension_history"><CopyableCode code="describe_training_plan_extension_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the extension history for a specified training plan. The response includes details about each extension, such as the offering ID, start and end dates, status, payment status, and cost information.</td>
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
    defaultValue="describe_training_plan_extension_history"
    values={[
        { label: 'describe_training_plan_extension_history', value: 'describe_training_plan_extension_history' }
    ]}
>
<TabItem value="describe_training_plan_extension_history">

Retrieves the extension history for a specified training plan. The response includes details about each extension, such as the offering ID, start and end dates, status, payment status, and cost information.

```sql
SELECT
AvailabilityZone,
AvailabilityZoneId,
CurrencyCode,
DurationHours,
EndDate,
ExtendedAt,
PaymentStatus,
StartDate,
Status,
TrainingPlanExtensionOfferingId,
UpfrontFee
FROM aws.sagemaker.training_plan_extension_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

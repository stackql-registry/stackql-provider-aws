--- 
title: bill_estimate_input_commitment_modifications
hide_title: false
hide_table_of_contents: false
keywords:
  - bill_estimate_input_commitment_modifications
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

Creates, updates, deletes, gets or lists a <code>bill_estimate_input_commitment_modifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bill_estimate_input_commitment_modifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bcm_pricing_calculator.bill_estimate_input_commitment_modifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_bill_estimate_input_commitment_modifications"
    values={[
        { label: 'list_bill_estimate_input_commitment_modifications', value: 'list_bill_estimate_input_commitment_modifications' }
    ]}
>
<TabItem value="list_bill_estimate_input_commitment_modifications">

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
    <td>The unique identifier of the commitment modification. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="commitment_action" /></td>
    <td><code>object</code></td>
    <td>The specific commitment action taken in this modification.</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>The group identifier for the commitment modification. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with this commitment modification. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_bill_estimate_input_commitment_modifications"><CopyableCode code="list_bill_estimate_input_commitment_modifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the input commitment modifications associated with a bill estimate.</td>
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
    defaultValue="list_bill_estimate_input_commitment_modifications"
    values={[
        { label: 'list_bill_estimate_input_commitment_modifications', value: 'list_bill_estimate_input_commitment_modifications' }
    ]}
>
<TabItem value="list_bill_estimate_input_commitment_modifications">

Lists the input commitment modifications associated with a bill estimate.

```sql
SELECT
id,
commitment_action,
group,
usage_account_id
FROM aws.bcm_pricing_calculator.bill_estimate_input_commitment_modifications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

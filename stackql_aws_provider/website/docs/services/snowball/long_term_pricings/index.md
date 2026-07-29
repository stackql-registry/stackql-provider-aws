--- 
title: long_term_pricings
hide_title: false
hide_table_of_contents: false
keywords:
  - long_term_pricings
  - snowball
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

Creates, updates, deletes, gets or lists a <code>long_term_pricings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="long_term_pricings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.snowball.long_term_pricings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_long_term_pricing"
    values={[
        { label: 'list_long_term_pricing', value: 'list_long_term_pricing' }
    ]}
>
<TabItem value="list_long_term_pricing">

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
    <td><CopyableCode code="current_active_job" /></td>
    <td><code>string</code></td>
    <td>The current active jobs on the device the long-term pricing type. (pattern: &lt;code&gt;(M|J)ID&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="is_long_term_pricing_auto_renew" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, specifies that the current long-term pricing type for the device should be automatically renewed before the long-term pricing contract expires.</td>
</tr>
<tr>
    <td><CopyableCode code="job_ids" /></td>
    <td><code>array</code></td>
    <td>The IDs of the jobs that are associated with a long-term pricing type.</td>
</tr>
<tr>
    <td><CopyableCode code="long_term_pricing_end_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date the long-term pricing contract.</td>
</tr>
<tr>
    <td><CopyableCode code="long_term_pricing_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the long-term pricing type for the device. (pattern: &lt;code&gt;LTPID&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="long_term_pricing_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date of the long-term pricing contract.</td>
</tr>
<tr>
    <td><CopyableCode code="long_term_pricing_status" /></td>
    <td><code>string</code></td>
    <td>The status of the long-term pricing type. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="long_term_pricing_type" /></td>
    <td><code>string</code></td>
    <td>The type of long-term pricing that was selected for the device. (OneYear, ThreeYear, OneMonth)</td>
</tr>
<tr>
    <td><CopyableCode code="replacement_job" /></td>
    <td><code>string</code></td>
    <td>A new device that replaces a device that is ordered with long-term pricing. (pattern: &lt;code&gt;(M|J)ID&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="snowball_type" /></td>
    <td><code>string</code></td>
    <td>The type of Snow Family devices associated with this long-term pricing job. (STANDARD, EDGE, EDGE_C, EDGE_CG, EDGE_S, SNC1_HDD, SNC1_SSD, V3_5C, V3_5S, RACK_5U_C)</td>
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
    <td><a href="#list_long_term_pricing"><CopyableCode code="list_long_term_pricing" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all long-term pricing types.</td>
</tr>
<tr>
    <td><a href="#create_long_term_pricing"><CopyableCode code="create_long_term_pricing" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LongTermPricingType"><code>LongTermPricingType</code></a>, <a href="#parameter-SnowballType"><code>SnowballType</code></a></td>
    <td></td>
    <td>Creates a job with the long-term usage option for a device. The long-term usage is a 1-year or 3-year long-term pricing type for the device. You are billed upfront, and Amazon Web Services provides discounts for long-term pricing.</td>
</tr>
<tr>
    <td><a href="#update_long_term_pricing"><CopyableCode code="update_long_term_pricing" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LongTermPricingId"><code>LongTermPricingId</code></a></td>
    <td></td>
    <td>Updates the long-term pricing type.</td>
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
    defaultValue="list_long_term_pricing"
    values={[
        { label: 'list_long_term_pricing', value: 'list_long_term_pricing' }
    ]}
>
<TabItem value="list_long_term_pricing">

Lists all long-term pricing types.

```sql
SELECT
current_active_job,
is_long_term_pricing_auto_renew,
job_ids,
long_term_pricing_end_date,
long_term_pricing_id,
long_term_pricing_start_date,
long_term_pricing_status,
long_term_pricing_type,
replacement_job,
snowball_type
FROM aws.snowball.long_term_pricings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_long_term_pricing"
    values={[
        { label: 'create_long_term_pricing', value: 'create_long_term_pricing' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_long_term_pricing">

Creates a job with the long-term usage option for a device. The long-term usage is a 1-year or 3-year long-term pricing type for the device. You are billed upfront, and Amazon Web Services provides discounts for long-term pricing.

```sql
INSERT INTO aws.snowball.long_term_pricings (
LongTermPricingType,
IsLongTermPricingAutoRenew,
SnowballType,
region
)
SELECT 
'{{ LongTermPricingType }}' /* required */,
{{ IsLongTermPricingAutoRenew }},
'{{ SnowballType }}' /* required */,
'{{ region }}'
RETURNING
long_term_pricing_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: long_term_pricings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the long_term_pricings resource.
    - name: LongTermPricingType
      value: "{{ LongTermPricingType }}"
      description: |
        The type of long-term pricing option you want for the device, either 1-year or 3-year long-term pricing.
      valid_values: ['OneYear', 'ThreeYear', 'OneMonth']
    - name: IsLongTermPricingAutoRenew
      value: {{ IsLongTermPricingAutoRenew }}
      description: |
        Specifies whether the current long-term pricing type for the device should be renewed.
    - name: SnowballType
      value: "{{ SnowballType }}"
      description: |
        The type of Snow Family devices to use for the long-term pricing job.
      valid_values: ['STANDARD', 'EDGE', 'EDGE_C', 'EDGE_CG', 'EDGE_S', 'SNC1_HDD', 'SNC1_SSD', 'V3_5C', 'V3_5S', 'RACK_5U_C']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_long_term_pricing"
    values={[
        { label: 'update_long_term_pricing', value: 'update_long_term_pricing' }
    ]}
>
<TabItem value="update_long_term_pricing">

Updates the long-term pricing type.

```sql
UPDATE aws.snowball.long_term_pricings
SET 
LongTermPricingId = '{{ LongTermPricingId }}',
ReplacementJob = '{{ ReplacementJob }}',
IsLongTermPricingAutoRenew = {{ IsLongTermPricingAutoRenew }}
WHERE 
region = '{{ region }}' --required
AND LongTermPricingId = '{{ LongTermPricingId }}' --required;
```
</TabItem>
</Tabs>

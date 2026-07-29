--- 
title: page_receipts
hide_title: false
hide_table_of_contents: false
keywords:
  - page_receipts
  - ssm_contacts
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

Creates, updates, deletes, gets or lists a <code>page_receipts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="page_receipts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_contacts.page_receipts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_page_receipts"
    values={[
        { label: 'list_page_receipts', value: 'list_page_receipts' }
    ]}
>
<TabItem value="list_page_receipts">

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
    <td><CopyableCode code="contact_channel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the contact channel Incident Manager engaged. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="receipt_info" /></td>
    <td><code>string</code></td>
    <td>Information provided during the page acknowledgement. (pattern: &lt;code&gt;^&#91;.\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="receipt_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time receipt was SENT, DELIVERED, or READ.</td>
</tr>
<tr>
    <td><CopyableCode code="receipt_type" /></td>
    <td><code>string</code></td>
    <td>The type follows the engagement cycle, SENT, DELIVERED, and READ. (DELIVERED, ERROR, READ, SENT, STOP)</td>
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
    <td><a href="#list_page_receipts"><CopyableCode code="list_page_receipts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all of the engagements to contact channels that have been acknowledged.</td>
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
    defaultValue="list_page_receipts"
    values={[
        { label: 'list_page_receipts', value: 'list_page_receipts' }
    ]}
>
<TabItem value="list_page_receipts">

Lists all of the engagements to contact channels that have been acknowledged.

```sql
SELECT
contact_channel_arn,
receipt_info,
receipt_time,
receipt_type
FROM aws.ssm_contacts.page_receipts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

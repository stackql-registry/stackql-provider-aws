--- 
title: email_address_insights
hide_title: false
hide_table_of_contents: false
keywords:
  - email_address_insights
  - sesv2
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

Creates, updates, deletes, gets or lists an <code>email_address_insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="email_address_insights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.email_address_insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_email_address_insights"
    values={[
        { label: 'get_email_address_insights', value: 'get_email_address_insights' }
    ]}
>
<TabItem value="get_email_address_insights">

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
    <td><CopyableCode code="Evaluations" /></td>
    <td><code>object</code></td>
    <td>Specific validation checks performed on the email address.</td>
</tr>
<tr>
    <td><CopyableCode code="IsValid" /></td>
    <td><code>object</code></td>
    <td>Overall validity assessment with a conﬁdence verdict.</td>
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
    <td><a href="#get_email_address_insights"><CopyableCode code="get_email_address_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides validation insights about a specific email address, including syntax validation, DNS record checks, mailbox existence, and other deliverability factors.</td>
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
    defaultValue="get_email_address_insights"
    values={[
        { label: 'get_email_address_insights', value: 'get_email_address_insights' }
    ]}
>
<TabItem value="get_email_address_insights">

Provides validation insights about a specific email address, including syntax validation, DNS record checks, mailbox existence, and other deliverability factors.

```sql
SELECT
Evaluations,
IsValid
FROM aws.sesv2.email_address_insights
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

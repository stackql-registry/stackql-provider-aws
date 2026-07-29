--- 
title: origination_numbers
hide_title: false
hide_table_of_contents: false
keywords:
  - origination_numbers
  - sns
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

Creates, updates, deletes, gets or lists an <code>origination_numbers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="origination_numbers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sns.origination_numbers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_origination_numbers"
    values={[
        { label: 'list_origination_numbers', value: 'list_origination_numbers' }
    ]}
>
<TabItem value="list_origination_numbers">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The date and time when the phone number was created.</td>
</tr>
<tr>
    <td><CopyableCode code="iso_2_country_code" /></td>
    <td><code>string</code></td>
    <td>The two-character code for the country or region, in ISO 3166-1 alpha-2 format.</td>
</tr>
<tr>
    <td><CopyableCode code="number_capabilities" /></td>
    <td><code>string</code></td>
    <td>The capabilities of each phone number.</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number" /></td>
    <td><code>string</code></td>
    <td>The phone number.</td>
</tr>
<tr>
    <td><CopyableCode code="route_type" /></td>
    <td><code>string</code></td>
    <td>The list of supported routes.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the phone number.</td>
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
    <td><a href="#list_origination_numbers"><CopyableCode code="list_origination_numbers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Lists the calling Amazon Web Services account's dedicated origination numbers and their metadata. For more information about origination numbers, see Origination numbers in the Amazon SNS Developer Guide.</td>
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
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of origination numbers to return.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Token that the previous ListOriginationNumbers request returns.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_origination_numbers"
    values={[
        { label: 'list_origination_numbers', value: 'list_origination_numbers' }
    ]}
>
<TabItem value="list_origination_numbers">

Lists the calling Amazon Web Services account's dedicated origination numbers and their metadata. For more information about origination numbers, see Origination numbers in the Amazon SNS Developer Guide.

```sql
SELECT
created_at,
iso_2_country_code,
number_capabilities,
phone_number,
route_type,
status
FROM aws.sns.origination_numbers
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>

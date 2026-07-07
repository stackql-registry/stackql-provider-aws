--- 
title: available_phone_numbers
hide_title: false
hide_table_of_contents: false
keywords:
  - available_phone_numbers
  - chime
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

Creates, updates, deletes, gets or lists an <code>available_phone_numbers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="available_phone_numbers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.available_phone_numbers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_available_phone_numbers"
    values={[
        { label: 'search_available_phone_numbers', value: 'search_available_phone_numbers' }
    ]}
>
<TabItem value="search_available_phone_numbers">

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
    <td><CopyableCode code="e164_phone_number" /></td>
    <td><code>string</code></td>
    <td>List of phone numbers, in E.164 format.</td>
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
    <td><a href="#search_available_phone_numbers"><CopyableCode code="search_available_phone_numbers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-area-code"><code>area-code</code></a>, <a href="#parameter-city"><code>city</code></a>, <a href="#parameter-country"><code>country</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-toll-free-prefix"><code>toll-free-prefix</code></a>, <a href="#parameter-phone-number-type"><code>phone-number-type</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Searches for phone numbers that can be ordered. For US numbers, provide at least one of the following search filters: AreaCode, City, State, or TollFreePrefix. If you provide City, you must also provide State. Numbers outside the US only support the PhoneNumberType filter, which you must use.</td>
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
<tr id="parameter-area-code">
    <td><CopyableCode code="area-code" /></td>
    <td><code>string</code></td>
    <td>The area code used to filter results. Only applies to the US.</td>
</tr>
<tr id="parameter-city">
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>The city used to filter results. Only applies to the US.</td>
</tr>
<tr id="parameter-country">
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>The country used to filter results. Defaults to the US Format: ISO 3166-1 alpha-2.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results.</td>
</tr>
<tr id="parameter-phone-number-type">
    <td><CopyableCode code="phone-number-type" /></td>
    <td><code>string</code></td>
    <td>The phone number type used to filter results. Required for non-US numbers.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state used to filter results. Required only if you provide City. Only applies to the US.</td>
</tr>
<tr id="parameter-toll-free-prefix">
    <td><CopyableCode code="toll-free-prefix" /></td>
    <td><code>string</code></td>
    <td>The toll-free prefix that you use to filter results. Only applies to the US.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="search_available_phone_numbers"
    values={[
        { label: 'search_available_phone_numbers', value: 'search_available_phone_numbers' }
    ]}
>
<TabItem value="search_available_phone_numbers">

Searches for phone numbers that can be ordered. For US numbers, provide at least one of the following search filters: AreaCode, City, State, or TollFreePrefix. If you provide City, you must also provide State. Numbers outside the US only support the PhoneNumberType filter, which you must use.

```sql
SELECT
e164_phone_number
FROM aws.chime.available_phone_numbers
WHERE region = '{{ region }}' -- required
AND `area-code` = '{{ area-code }}'
AND city = '{{ city }}'
AND country = '{{ country }}'
AND state = '{{ state }}'
AND `toll-free-prefix` = '{{ toll-free-prefix }}'
AND `phone-number-type` = '{{ phone-number-type }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>

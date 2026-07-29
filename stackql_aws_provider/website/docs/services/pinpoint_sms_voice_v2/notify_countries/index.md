--- 
title: notify_countries
hide_title: false
hide_table_of_contents: false
keywords:
  - notify_countries
  - pinpoint_sms_voice_v2
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

Creates, updates, deletes, gets or lists a <code>notify_countries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notify_countries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.notify_countries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_notify_countries"
    values={[
        { label: 'list_notify_countries', value: 'list_notify_countries' }
    ]}
>
<TabItem value="list_notify_countries">

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
    <td><CopyableCode code="country_name" /></td>
    <td><code>string</code></td>
    <td>The name of the country.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_owned_identity_required" /></td>
    <td><code>boolean</code></td>
    <td>Whether a customer-owned identity is required to send notify messages to this country.</td>
</tr>
<tr>
    <td><CopyableCode code="iso_country_code" /></td>
    <td><code>string</code></td>
    <td>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. (pattern: &lt;code&gt;&#91;A-Z&#93;&#123;2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="supported_channels" /></td>
    <td><code>array</code></td>
    <td>An array of supported channels for the country. Supported values include SMS and VOICE.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_tiers" /></td>
    <td><code>array</code></td>
    <td>An array of supported tiers for the country.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_use_cases" /></td>
    <td><code>array</code></td>
    <td>An array of supported use cases for the country.</td>
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
    <td><a href="#list_notify_countries"><CopyableCode code="list_notify_countries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists countries that support notify messaging. You can optionally filter by channel, use case, or tier.</td>
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
    defaultValue="list_notify_countries"
    values={[
        { label: 'list_notify_countries', value: 'list_notify_countries' }
    ]}
>
<TabItem value="list_notify_countries">

Lists countries that support notify messaging. You can optionally filter by channel, use case, or tier.

```sql
SELECT
country_name,
customer_owned_identity_required,
iso_country_code,
supported_channels,
supported_tiers,
supported_use_cases
FROM aws.pinpoint_sms_voice_v2.notify_countries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

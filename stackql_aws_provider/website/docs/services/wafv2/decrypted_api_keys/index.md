--- 
title: decrypted_api_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - decrypted_api_keys
  - wafv2
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

Creates, updates, deletes, gets or lists a <code>decrypted_api_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="decrypted_api_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.decrypted_api_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_decrypted_api_key"
    values={[
        { label: 'get_decrypted_api_key', value: 'get_decrypted_api_key' }
    ]}
>
<TabItem value="get_decrypted_api_key">

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
    <td><CopyableCode code="CreationTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the key was created.</td>
</tr>
<tr>
    <td><CopyableCode code="TokenDomains" /></td>
    <td><code>array</code></td>
    <td>The token domains that are defined in this API key.</td>
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
    <td><a href="#get_decrypted_api_key"><CopyableCode code="get_decrypted_api_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns your API key in decrypted form. Use this to check the token domains that you have defined for the key. API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see WAF client application integration in the WAF Developer Guide.</td>
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
    defaultValue="get_decrypted_api_key"
    values={[
        { label: 'get_decrypted_api_key', value: 'get_decrypted_api_key' }
    ]}
>
<TabItem value="get_decrypted_api_key">

Returns your API key in decrypted form. Use this to check the token domains that you have defined for the key. API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see WAF client application integration in the WAF Developer Guide.

```sql
SELECT
CreationTimestamp,
TokenDomains
FROM aws.wafv2.decrypted_api_keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

--- 
title: registration_codes
hide_title: false
hide_table_of_contents: false
keywords:
  - registration_codes
  - iot
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

Creates, updates, deletes, gets or lists a <code>registration_codes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registration_codes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.registration_codes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_registration_code"
    values={[
        { label: 'get_registration_code', value: 'get_registration_code' }
    ]}
>
<TabItem value="get_registration_code">

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
    <td><CopyableCode code="registrationCode" /></td>
    <td><code>string</code></td>
    <td>The CA certificate registration code. (pattern: &lt;code&gt;(0x)?&#91;a-fA-F0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_registration_code"><CopyableCode code="get_registration_code" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a registration code used to register a CA certificate with IoT. IoT will create a registration code as part of this API call if the registration code doesn't exist or has been deleted. If you already have a registration code, this API call will return the same registration code. Requires permission to access the GetRegistrationCode action.</td>
</tr>
<tr>
    <td><a href="#delete_registration_code"><CopyableCode code="delete_registration_code" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a CA certificate registration code. Requires permission to access the DeleteRegistrationCode action.</td>
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
    defaultValue="get_registration_code"
    values={[
        { label: 'get_registration_code', value: 'get_registration_code' }
    ]}
>
<TabItem value="get_registration_code">

Gets a registration code used to register a CA certificate with IoT. IoT will create a registration code as part of this API call if the registration code doesn't exist or has been deleted. If you already have a registration code, this API call will return the same registration code. Requires permission to access the GetRegistrationCode action.

```sql
SELECT
registrationCode
FROM aws.iot.registration_codes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_registration_code"
    values={[
        { label: 'delete_registration_code', value: 'delete_registration_code' }
    ]}
>
<TabItem value="delete_registration_code">

Deletes a CA certificate registration code. Requires permission to access the DeleteRegistrationCode action.

```sql
DELETE FROM aws.iot.registration_codes
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

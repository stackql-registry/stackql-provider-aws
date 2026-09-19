--- 
title: e911_addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - e911_addresses
  - chime_sdk_voice
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

Creates, updates, deletes, gets or lists an <code>e911_addresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="e911_addresses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.e911_addresses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#validate_e911_address"><CopyableCode code="validate_e911_address" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AwsAccountId"><code>AwsAccountId</code></a>, <a href="#parameter-StreetNumber"><code>StreetNumber</code></a>, <a href="#parameter-StreetInfo"><code>StreetInfo</code></a>, <a href="#parameter-City"><code>City</code></a>, <a href="#parameter-State"><code>State</code></a>, <a href="#parameter-Country"><code>Country</code></a>, <a href="#parameter-PostalCode"><code>PostalCode</code></a></td>
    <td></td>
    <td>Validates an address to be used for 911 calls made with Amazon Chime SDK Voice Connectors. You can use validated addresses in a Presence Information Data Format Location Object file that you include in SIP requests. That helps ensure that addresses are routed to the appropriate Public Safety Answering Point.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="validate_e911_address"
    values={[
        { label: 'validate_e911_address', value: 'validate_e911_address' }
    ]}
>
<TabItem value="validate_e911_address">

Validates an address to be used for 911 calls made with Amazon Chime SDK Voice Connectors. You can use validated addresses in a Presence Information Data Format Location Object file that you include in SIP requests. That helps ensure that addresses are routed to the appropriate Public Safety Answering Point.

```sql
EXEC aws.chime_sdk_voice.e911_addresses.validate_e911_address 
@region='{{ region }}' --required 
@@json=
'{
"AwsAccountId": "{{ AwsAccountId }}", 
"StreetNumber": "{{ StreetNumber }}", 
"StreetInfo": "{{ StreetInfo }}", 
"City": "{{ City }}", 
"State": "{{ State }}", 
"Country": "{{ Country }}", 
"PostalCode": "{{ PostalCode }}"
}'
;
```
</TabItem>
</Tabs>

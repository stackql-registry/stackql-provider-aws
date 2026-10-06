--- 
title: payloads
hide_title: false
hide_table_of_contents: false
keywords:
  - payloads
  - signer
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

Creates, updates, deletes, gets or lists a <code>payloads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="payloads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.signer.payloads" /></td></tr>
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
    <td><a href="#sign_payload"><CopyableCode code="sign_payload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-profileName"><code>profileName</code></a>, <a href="#parameter-payload"><code>payload</code></a>, <a href="#parameter-payloadFormat"><code>payloadFormat</code></a></td>
    <td></td>
    <td>Signs a binary payload and returns a signature envelope.</td>
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
    defaultValue="sign_payload"
    values={[
        { label: 'sign_payload', value: 'sign_payload' }
    ]}
>
<TabItem value="sign_payload">

Signs a binary payload and returns a signature envelope.

```sql
EXEC aws.signer.payloads.sign_payload 
@region='{{ region }}' --required 
@@json=
'{
"profileName": "{{ profileName }}", 
"profileOwner": "{{ profileOwner }}", 
"payload": "{{ payload }}", 
"payloadFormat": "{{ payloadFormat }}"
}'
;
```
</TabItem>
</Tabs>

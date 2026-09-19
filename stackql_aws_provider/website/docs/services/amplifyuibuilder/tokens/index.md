--- 
title: tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - tokens
  - amplifyuibuilder
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

Creates, updates, deletes, gets or lists a <code>tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplifyuibuilder.tokens" /></td></tr>
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
    <td><a href="#exchange_code_for_token"><CopyableCode code="exchange_code_for_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-provider"><code>provider</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-request"><code>request</code></a></td>
    <td></td>
    <td>This is for internal use. Amplify uses this action to exchange an access code for a token.</td>
</tr>
<tr>
    <td><a href="#refresh_token"><CopyableCode code="refresh_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-provider"><code>provider</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-refreshTokenBody"><code>refreshTokenBody</code></a></td>
    <td></td>
    <td>This is for internal use. Amplify uses this action to refresh a previously issued access token that might have expired.</td>
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
<tr id="parameter-provider">
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The third-party provider for the token. The only valid value is figma.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="exchange_code_for_token"
    values={[
        { label: 'exchange_code_for_token', value: 'exchange_code_for_token' },
        { label: 'refresh_token', value: 'refresh_token' }
    ]}
>
<TabItem value="exchange_code_for_token">

This is for internal use. Amplify uses this action to exchange an access code for a token.

```sql
EXEC aws.amplifyuibuilder.tokens.exchange_code_for_token 
@provider='{{ provider }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"request": "{{ request }}"
}'
;
```
</TabItem>
<TabItem value="refresh_token">

This is for internal use. Amplify uses this action to refresh a previously issued access token that might have expired.

```sql
EXEC aws.amplifyuibuilder.tokens.refresh_token 
@provider='{{ provider }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"refreshTokenBody": "{{ refreshTokenBody }}"
}'
;
```
</TabItem>
</Tabs>

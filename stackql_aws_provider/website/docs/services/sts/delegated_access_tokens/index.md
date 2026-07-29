--- 
title: delegated_access_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - delegated_access_tokens
  - sts
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

Creates, updates, deletes, gets or lists a <code>delegated_access_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="delegated_access_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sts.delegated_access_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_delegated_access_token"
    values={[
        { label: 'get_delegated_access_token', value: 'get_delegated_access_token' }
    ]}
>
<TabItem value="get_delegated_access_token">

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
    <td><CopyableCode code="assumed_principal" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the principal that was assumed when obtaining the delegated access token. This ARN identifies the IAM entity whose permissions are granted by the temporary credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="credentials" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services credentials for API authentication.</td>
</tr>
<tr>
    <td><CopyableCode code="packed_policy_size" /></td>
    <td><code>integer</code></td>
    <td>The percentage of the maximum policy size that is used by the session policy. The policy size is calculated as the sum of all the session policies and permission boundaries attached to the session. If the packed size exceeds 100%, the request fails.</td>
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
    <td><a href="#get_delegated_access_token"><CopyableCode code="get_delegated_access_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TradeInToken"><code>TradeInToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Exchanges a trade-in token for temporary Amazon Web Services credentials with the permissions associated with the assumed principal. This operation allows you to obtain credentials for a specific principal based on a trade-in token, enabling delegation of access to Amazon Web Services resources.</td>
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
<tr id="parameter-TradeInToken">
    <td><CopyableCode code="TradeInToken" /></td>
    <td><code>string</code></td>
    <td>The token to exchange for temporary Amazon Web Services credentials. This token must be valid and unexpired at the time of the request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_delegated_access_token"
    values={[
        { label: 'get_delegated_access_token', value: 'get_delegated_access_token' }
    ]}
>
<TabItem value="get_delegated_access_token">

Exchanges a trade-in token for temporary Amazon Web Services credentials with the permissions associated with the assumed principal. This operation allows you to obtain credentials for a specific principal based on a trade-in token, enabling delegation of access to Amazon Web Services resources.

```sql
SELECT
assumed_principal,
credentials,
packed_policy_size
FROM aws.sts.delegated_access_tokens
WHERE TradeInToken = '{{ TradeInToken }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

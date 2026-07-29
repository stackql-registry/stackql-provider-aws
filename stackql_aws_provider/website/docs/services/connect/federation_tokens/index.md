--- 
title: federation_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - federation_tokens
  - connect
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

Creates, updates, deletes, gets or lists a <code>federation_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="federation_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.federation_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_federation_token"
    values={[
        { label: 'get_federation_token', value: 'get_federation_token' }
    ]}
>
<TabItem value="get_federation_token">

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
    <td><CopyableCode code="credentials" /></td>
    <td><code>object</code></td>
    <td>The credentials to use for federation.</td>
</tr>
<tr>
    <td><CopyableCode code="sign_in_url" /></td>
    <td><code>string</code></td>
    <td>The URL to sign into the user's instance.</td>
</tr>
<tr>
    <td><CopyableCode code="user_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the user. This can be the ID or the ARN of the user.</td>
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
    <td><a href="#get_federation_token"><CopyableCode code="get_federation_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Supports SAML sign-in for Amazon Connect. Retrieves a token for federation. The token is for the Amazon Connect user which corresponds to the IAM credentials that were used to invoke this action. For more information about how SAML sign-in works in Amazon Connect, see Configure SAML with IAM for Amazon Connect in the Amazon Connect Administrator Guide. This API doesn't support root users. If you try to invoke GetFederationToken with root credentials, an error message similar to the following one appears: Provided identity: Principal: .... User: .... cannot be used for federation with Amazon Connect</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
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
    defaultValue="get_federation_token"
    values={[
        { label: 'get_federation_token', value: 'get_federation_token' }
    ]}
>
<TabItem value="get_federation_token">

Supports SAML sign-in for Amazon Connect. Retrieves a token for federation. The token is for the Amazon Connect user which corresponds to the IAM credentials that were used to invoke this action. For more information about how SAML sign-in works in Amazon Connect, see Configure SAML with IAM for Amazon Connect in the Amazon Connect Administrator Guide. This API doesn't support root users. If you try to invoke GetFederationToken with root credentials, an error message similar to the following one appears: Provided identity: Principal: .... User: .... cannot be used for federation with Amazon Connect

```sql
SELECT
credentials,
sign_in_url,
user_arn,
user_id
FROM aws.connect.federation_tokens
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

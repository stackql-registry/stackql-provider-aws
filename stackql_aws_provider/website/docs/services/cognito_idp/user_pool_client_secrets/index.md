--- 
title: user_pool_client_secrets
hide_title: false
hide_table_of_contents: false
keywords:
  - user_pool_client_secrets
  - cognito_idp
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

Creates, updates, deletes, gets or lists a <code>user_pool_client_secrets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_pool_client_secrets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.user_pool_client_secrets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_user_pool_client_secrets"
    values={[
        { label: 'list_user_pool_client_secrets', value: 'list_user_pool_client_secrets' }
    ]}
>
<TabItem value="list_user_pool_client_secrets">

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
    <td><CopyableCode code="ClientSecrets" /></td>
    <td><code>array</code></td>
    <td>A list of client secret descriptors containing the identifier and creation date for each secret. For security reasons, the response never reveals the actual secret value in ClientSecretValue.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_user_pool_client_secrets"><CopyableCode code="list_user_pool_client_secrets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all client secrets associated with a user pool app client. Returns metadata about the secrets. The response does not include pagination tokens as there are only 2 secrets at any given time and we return both with every ListUserPoolClientSecrets call. For security reasons, the response never reveals the actual secret value in ClientSecretValue.</td>
</tr>
<tr>
    <td><a href="#add_user_pool_client_secret"><CopyableCode code="add_user_pool_client_secret" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-ClientId"><code>ClientId</code></a></td>
    <td></td>
    <td>Creates a new client secret for an existing confidential user pool app client. Supports up to 2 active secrets per app client for zero-downtime credential rotation workflows.</td>
</tr>
<tr>
    <td><a href="#delete_user_pool_client_secret"><CopyableCode code="delete_user_pool_client_secret" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specific client secret from a user pool app client. You cannot delete the last remaining secret for an app client.</td>
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
    defaultValue="list_user_pool_client_secrets"
    values={[
        { label: 'list_user_pool_client_secrets', value: 'list_user_pool_client_secrets' }
    ]}
>
<TabItem value="list_user_pool_client_secrets">

Lists all client secrets associated with a user pool app client. Returns metadata about the secrets. The response does not include pagination tokens as there are only 2 secrets at any given time and we return both with every ListUserPoolClientSecrets call. For security reasons, the response never reveals the actual secret value in ClientSecretValue.

```sql
SELECT
ClientSecrets,
NextToken
FROM aws.cognito_idp.user_pool_client_secrets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_user_pool_client_secret"
    values={[
        { label: 'add_user_pool_client_secret', value: 'add_user_pool_client_secret' }
    ]}
>
<TabItem value="add_user_pool_client_secret">

Creates a new client secret for an existing confidential user pool app client. Supports up to 2 active secrets per app client for zero-downtime credential rotation workflows.

```sql
UPDATE aws.cognito_idp.user_pool_client_secrets
SET 
UserPoolId = '{{ UserPoolId }}',
ClientId = '{{ ClientId }}',
ClientSecret = '{{ ClientSecret }}'
WHERE 
region = '{{ region }}' --required
AND UserPoolId = '{{ UserPoolId }}' --required
AND ClientId = '{{ ClientId }}' --required
RETURNING
ClientSecretDescriptor;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_pool_client_secret"
    values={[
        { label: 'delete_user_pool_client_secret', value: 'delete_user_pool_client_secret' }
    ]}
>
<TabItem value="delete_user_pool_client_secret">

Deletes a specific client secret from a user pool app client. You cannot delete the last remaining secret for an app client.

```sql
DELETE FROM aws.cognito_idp.user_pool_client_secrets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

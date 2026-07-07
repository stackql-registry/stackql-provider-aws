--- 
title: identities
hide_title: false
hide_table_of_contents: false
keywords:
  - identities
  - cognito_identity
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

Creates, updates, deletes, gets or lists an <code>identities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_identity.identities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_identities"
    values={[
        { label: 'list_identities', value: 'list_identities' },
        { label: 'describe_identity', value: 'describe_identity' }
    ]}
>
<TabItem value="list_identities">

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
    <td><CopyableCode code="Identities" /></td>
    <td><code>array</code></td>
    <td>An object containing a set of identities and associated mappings.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityPoolId" /></td>
    <td><code>string</code></td>
    <td>An identity pool ID in the format REGION:GUID. (pattern: &lt;code&gt;&#91;\w-&#93;+:&#91;0-9a-f-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_identity">

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
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date on which the identity was created.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier in the format REGION:GUID. (pattern: &lt;code&gt;&#91;\w-&#93;+:&#91;0-9a-f-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date on which the identity was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Logins" /></td>
    <td><code>array</code></td>
    <td>The provider names.</td>
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
    <td><a href="#list_identities"><CopyableCode code="list_identities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the identities in an identity pool. You must use Amazon Web Services developer credentials to call this operation.</td>
</tr>
<tr>
    <td><a href="#describe_identity"><CopyableCode code="describe_identity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns metadata related to the given identity, including when the identity was created and any associated linked logins. You must use Amazon Web Services developer credentials to call this operation.</td>
</tr>
<tr>
    <td><a href="#delete_identities"><CopyableCode code="delete_identities" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete. You must use Amazon Web Services developer credentials to call this operation.</td>
</tr>
<tr>
    <td><a href="#unlink_identity"><CopyableCode code="unlink_identity" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityId"><code>IdentityId</code></a>, <a href="#parameter-LoginsToRemove"><code>LoginsToRemove</code></a></td>
    <td></td>
    <td>Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible. This is a public API. You do not need any credentials to call this API.</td>
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
    defaultValue="list_identities"
    values={[
        { label: 'list_identities', value: 'list_identities' },
        { label: 'describe_identity', value: 'describe_identity' }
    ]}
>
<TabItem value="list_identities">

Lists the identities in an identity pool. You must use Amazon Web Services developer credentials to call this operation.

```sql
SELECT
Identities,
IdentityPoolId,
NextToken
FROM aws.cognito_identity.identities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_identity">

Returns metadata related to the given identity, including when the identity was created and any associated linked logins. You must use Amazon Web Services developer credentials to call this operation.

```sql
SELECT
CreationDate,
IdentityId,
LastModifiedDate,
Logins
FROM aws.cognito_identity.identities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_identities"
    values={[
        { label: 'delete_identities', value: 'delete_identities' }
    ]}
>
<TabItem value="delete_identities">

Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete. You must use Amazon Web Services developer credentials to call this operation.

```sql
DELETE FROM aws.cognito_identity.identities
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="unlink_identity"
    values={[
        { label: 'unlink_identity', value: 'unlink_identity' }
    ]}
>
<TabItem value="unlink_identity">

Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible. This is a public API. You do not need any credentials to call this API.

```sql
EXEC aws.cognito_identity.identities.unlink_identity 
@region='{{ region }}' --required 
@@json=
'{
"IdentityId": "{{ IdentityId }}", 
"Logins": "{{ Logins }}", 
"LoginsToRemove": "{{ LoginsToRemove }}"
}'
;
```
</TabItem>
</Tabs>

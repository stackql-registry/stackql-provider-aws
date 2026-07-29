--- 
title: access_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - access_tokens
  - codecatalyst
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

Creates, updates, deletes, gets or lists an <code>access_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecatalyst.access_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_access_tokens"
    values={[
        { label: 'list_access_tokens', value: 'list_access_tokens' }
    ]}
>
<TabItem value="list_access_tokens">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The system-generated ID of the personal access token.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the personal access token.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the personal access token will expire, in coordinated universal time (UTC) timestamp format as specified in RFC 3339.</td>
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
    <td><a href="#list_access_tokens"><CopyableCode code="list_access_tokens" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your Amazon Web Services Builder ID.</td>
</tr>
<tr>
    <td><a href="#create_access_token"><CopyableCode code="create_access_token" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password. It is associated with your user identity for use across all spaces and projects in Amazon CodeCatalyst. You use PATs to access CodeCatalyst from resources that include integrated development environments (IDEs) and Git-based source repositories. PATs represent you in Amazon CodeCatalyst and you can manage them in your user settings.For more information, see Managing personal access tokens in Amazon CodeCatalyst.</td>
</tr>
<tr>
    <td><a href="#delete_access_token"><CopyableCode code="delete_access_token" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the personal access token to delete. You can find the IDs of all PATs associated with your Amazon Web Services Builder ID in a space by calling ListAccessTokens.</td>
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
    defaultValue="list_access_tokens"
    values={[
        { label: 'list_access_tokens', value: 'list_access_tokens' }
    ]}
>
<TabItem value="list_access_tokens">

Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your Amazon Web Services Builder ID.

```sql
SELECT
id,
name,
expires_time
FROM aws.codecatalyst.access_tokens
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access_token"
    values={[
        { label: 'create_access_token', value: 'create_access_token' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access_token">

Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password. It is associated with your user identity for use across all spaces and projects in Amazon CodeCatalyst. You use PATs to access CodeCatalyst from resources that include integrated development environments (IDEs) and Git-based source repositories. PATs represent you in Amazon CodeCatalyst and you can manage them in your user settings.For more information, see Managing personal access tokens in Amazon CodeCatalyst.

```sql
INSERT INTO aws.codecatalyst.access_tokens (
name,
expiresTime,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ expiresTime }}',
'{{ region }}'
RETURNING
name,
access_token_id,
expires_time,
secret
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_tokens
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_tokens resource.
    - name: name
      value: "{{ name }}"
    - name: expiresTime
      value: "{{ expiresTime }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_token"
    values={[
        { label: 'delete_access_token', value: 'delete_access_token' }
    ]}
>
<TabItem value="delete_access_token">

Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it.

```sql
DELETE FROM aws.codecatalyst.access_tokens
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

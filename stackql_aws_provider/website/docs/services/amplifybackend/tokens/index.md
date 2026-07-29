--- 
title: tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - tokens
  - amplifybackend
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplifybackend.tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_token"
    values={[
        { label: 'get_token', value: 'get_token' }
    ]}
>
<TabItem value="get_token">

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
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The app ID.</td>
</tr>
<tr>
    <td><CopyableCode code="challenge_code" /></td>
    <td><code>string</code></td>
    <td>The one-time challenge code for authenticating into the Amplify Admin UI.</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>A unique ID provided when creating a new challenge token.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string</code></td>
    <td>The expiry time for the one-time generated token code.</td>
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
    <td><a href="#get_token"><CopyableCode code="get_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the challenge token based on the given appId and sessionId.</td>
</tr>
<tr>
    <td><a href="#create_token"><CopyableCode code="create_token" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.</td>
</tr>
<tr>
    <td><a href="#delete_token"><CopyableCode code="delete_token" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the challenge token based on the given appId and sessionId.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The app ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The session ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_token"
    values={[
        { label: 'get_token', value: 'get_token' }
    ]}
>
<TabItem value="get_token">

Gets the challenge token based on the given appId and sessionId.

```sql
SELECT
app_id,
challenge_code,
session_id,
ttl
FROM aws.amplifybackend.tokens
WHERE app_id = '{{ app_id }}' -- required
AND session_id = '{{ session_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_token"
    values={[
        { label: 'create_token', value: 'create_token' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_token">

Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.

```sql
INSERT INTO aws.amplifybackend.tokens (
app_id,
region
)
SELECT 
'{{ app_id }}',
'{{ region }}'
RETURNING
app_id,
challenge_code,
session_id,
ttl
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tokens
  props:
    - name: app_id
      value: "{{ app_id }}"
      description: Required parameter for the tokens resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tokens resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_token"
    values={[
        { label: 'delete_token', value: 'delete_token' }
    ]}
>
<TabItem value="delete_token">

Deletes the challenge token based on the given appId and sessionId.

```sql
DELETE FROM aws.amplifybackend.tokens
WHERE app_id = '{{ app_id }}' --required
AND session_id = '{{ session_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

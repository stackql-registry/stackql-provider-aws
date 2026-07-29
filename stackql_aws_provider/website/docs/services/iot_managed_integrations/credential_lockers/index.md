--- 
title: credential_lockers
hide_title: false
hide_table_of_contents: false
keywords:
  - credential_lockers
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists a <code>credential_lockers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="credential_lockers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.credential_lockers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_credential_locker"
    values={[
        { label: 'get_credential_locker', value: 'get_credential_locker' },
        { label: 'list_credential_lockers', value: 'list_credential_lockers' }
    ]}
>
<TabItem value="get_credential_locker">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the credential locker. (pattern: &lt;code&gt;arn:aws:iotmanagedintegrations:&#91;0-9a-zA-Z-&#93;+:&#91;0-9&#93;+:credential-locker/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value of when the credential locker requset occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the credential locker. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the credential locker. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A set of key/value pairs that are used to manage the credential locker.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_credential_lockers">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the credential locker. (pattern: &lt;code&gt;arn:aws:iotmanagedintegrations:&#91;0-9a-zA-Z-&#93;+:&#91;0-9&#93;+:credential-locker/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestampe value of when the credential locker was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The id of the credential locker. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the credential locker. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_credential_locker"><CopyableCode code="get_credential_locker" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get information on an existing credential locker</td>
</tr>
<tr>
    <td><a href="#list_credential_lockers"><CopyableCode code="list_credential_lockers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>List information on an existing credential locker.</td>
</tr>
<tr>
    <td><a href="#create_credential_locker"><CopyableCode code="create_credential_locker" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a credential locker. This operation will not trigger the creation of all the manufacturing resources.</td>
</tr>
<tr>
    <td><a href="#delete_credential_locker"><CopyableCode code="delete_credential_locker" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a credential locker. This operation can't be undone and any existing device won't be able to use IoT managed integrations.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the credential locker.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be used to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_credential_locker"
    values={[
        { label: 'get_credential_locker', value: 'get_credential_locker' },
        { label: 'list_credential_lockers', value: 'list_credential_lockers' }
    ]}
>
<TabItem value="get_credential_locker">

Get information on an existing credential locker

```sql
SELECT
arn,
created_at,
id,
name,
tags
FROM aws.iot_managed_integrations.credential_lockers
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_credential_lockers">

List information on an existing credential locker.

```sql
SELECT
arn,
created_at,
id,
name
FROM aws.iot_managed_integrations.credential_lockers
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_credential_locker"
    values={[
        { label: 'create_credential_locker', value: 'create_credential_locker' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_credential_locker">

Create a credential locker. This operation will not trigger the creation of all the manufacturing resources.

```sql
INSERT INTO aws.iot_managed_integrations.credential_lockers (
Name,
ClientToken,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
arn,
created_at,
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: credential_lockers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the credential_lockers resource.
    - name: Name
      value: "{{ Name }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_credential_locker"
    values={[
        { label: 'delete_credential_locker', value: 'delete_credential_locker' }
    ]}
>
<TabItem value="delete_credential_locker">

Delete a credential locker. This operation can't be undone and any existing device won't be able to use IoT managed integrations.

```sql
DELETE FROM aws.iot_managed_integrations.credential_lockers
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

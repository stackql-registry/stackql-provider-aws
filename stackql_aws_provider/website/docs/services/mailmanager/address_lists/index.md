--- 
title: address_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - address_lists
  - mailmanager
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

Creates, updates, deletes, gets or lists an <code>address_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="address_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mailmanager.address_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_address_list"
    values={[
        { label: 'get_address_list', value: 'get_address_list' },
        { label: 'list_address_lists', value: 'list_address_lists' }
    ]}
>
<TabItem value="get_address_list">

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
    <td><CopyableCode code="address_list_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the address list resource.</td>
</tr>
<tr>
    <td><CopyableCode code="address_list_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the address list resource. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="address_list_name" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the address list resource. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date of when then address list was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date of when the address list was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_address_lists">

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
    <td><CopyableCode code="address_list_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the address list.</td>
</tr>
<tr>
    <td><CopyableCode code="address_list_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the address list. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="address_list_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of the address list. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the address list was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the address list was last updated.</td>
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
    <td><a href="#get_address_list"><CopyableCode code="get_address_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetch attributes of an address list.</td>
</tr>
<tr>
    <td><a href="#list_address_lists"><CopyableCode code="list_address_lists" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists address lists for this account.</td>
</tr>
<tr>
    <td><a href="#register_member_to_address_list"><CopyableCode code="register_member_to_address_list" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AddressListId"><code>AddressListId</code></a>, <a href="#parameter-Address"><code>Address</code></a></td>
    <td></td>
    <td>Adds a member to an address list.</td>
</tr>
<tr>
    <td><a href="#create_address_list"><CopyableCode code="create_address_list" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AddressListName"><code>AddressListName</code></a></td>
    <td></td>
    <td>Creates a new address list.</td>
</tr>
<tr>
    <td><a href="#deregister_member_from_address_list"><CopyableCode code="deregister_member_from_address_list" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a member from an address list.</td>
</tr>
<tr>
    <td><a href="#delete_address_list"><CopyableCode code="delete_address_list" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an address list.</td>
</tr>
<tr>
    <td><a href="#start_address_list_import_job"><CopyableCode code="start_address_list_import_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobId"><code>JobId</code></a></td>
    <td></td>
    <td>Starts an import job for an address list.</td>
</tr>
<tr>
    <td><a href="#stop_address_list_import_job"><CopyableCode code="stop_address_list_import_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobId"><code>JobId</code></a></td>
    <td></td>
    <td>Stops an ongoing import job for an address list.</td>
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
    defaultValue="get_address_list"
    values={[
        { label: 'get_address_list', value: 'get_address_list' },
        { label: 'list_address_lists', value: 'list_address_lists' }
    ]}
>
<TabItem value="get_address_list">

Fetch attributes of an address list.

```sql
SELECT
address_list_arn,
address_list_id,
address_list_name,
created_timestamp,
last_updated_timestamp
FROM aws.mailmanager.address_lists
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_address_lists">

Lists address lists for this account.

```sql
SELECT
address_list_arn,
address_list_id,
address_list_name,
created_timestamp,
last_updated_timestamp
FROM aws.mailmanager.address_lists
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_member_to_address_list"
    values={[
        { label: 'register_member_to_address_list', value: 'register_member_to_address_list' },
        { label: 'create_address_list', value: 'create_address_list' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_member_to_address_list">

Adds a member to an address list.

```sql
INSERT INTO aws.mailmanager.address_lists (
AddressListId,
Address,
region
)
SELECT 
'{{ AddressListId }}' /* required */,
'{{ Address }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="create_address_list">

Creates a new address list.

```sql
INSERT INTO aws.mailmanager.address_lists (
ClientToken,
AddressListName,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ AddressListName }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
address_list_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: address_lists
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the address_lists resource.
    - name: AddressListId
      value: "{{ AddressListId }}"
      description: |
        The unique identifier of the address list where the address should be added.
    - name: Address
      value: "{{ Address }}"
      description: |
        The address to be added to the address list.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique token that Amazon SES uses to recognize subsequent retries of the same request.
    - name: AddressListName
      value: "{{ AddressListName }}"
      description: |
        A user-friendly name for the address list.
    - name: Tags
      description: |
        The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_member_from_address_list"
    values={[
        { label: 'deregister_member_from_address_list', value: 'deregister_member_from_address_list' },
        { label: 'delete_address_list', value: 'delete_address_list' }
    ]}
>
<TabItem value="deregister_member_from_address_list">

Removes a member from an address list.

```sql
DELETE FROM aws.mailmanager.address_lists
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_address_list">

Deletes an address list.

```sql
DELETE FROM aws.mailmanager.address_lists
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_address_list_import_job"
    values={[
        { label: 'start_address_list_import_job', value: 'start_address_list_import_job' },
        { label: 'stop_address_list_import_job', value: 'stop_address_list_import_job' }
    ]}
>
<TabItem value="start_address_list_import_job">

Starts an import job for an address list.

```sql
EXEC aws.mailmanager.address_lists.start_address_list_import_job 
@region='{{ region }}' --required 
@@json=
'{
"JobId": "{{ JobId }}"
}'
;
```
</TabItem>
<TabItem value="stop_address_list_import_job">

Stops an ongoing import job for an address list.

```sql
EXEC aws.mailmanager.address_lists.stop_address_list_import_job 
@region='{{ region }}' --required 
@@json=
'{
"JobId": "{{ JobId }}"
}'
;
```
</TabItem>
</Tabs>

--- 
title: keys
hide_title: false
hide_table_of_contents: false
keywords:
  - keys
  - location
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

Creates, updates, deletes, gets or lists a <code>keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_key"
    values={[
        { label: 'describe_key', value: 'describe_key' },
        { label: 'list_keys', value: 'list_keys' }
    ]}
>
<TabItem value="describe_key">

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
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the API key resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The optional description for the API key resource.</td>
</tr>
<tr>
    <td><CopyableCode code="expire_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the API key resource will expire in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The key value/string of an API key.</td>
</tr>
<tr>
    <td><CopyableCode code="key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the API key resource. Used when you need to specify a resource across all Amazon Web Services. Format example: arn:aws:geo:region:account-id:key/ExampleKey (pattern: &lt;code&gt;arn(:&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)&#123;2&#125;(:(&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)?)&#123;2&#125;:(&#91;^/&#93;.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="key_name" /></td>
    <td><code>string</code></td>
    <td>The name of the API key resource. (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="restrictions" /></td>
    <td><code>object</code></td>
    <td>API Restrictions on the allowed actions, resources, and referers for an API key resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the API key resource.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the API key resource was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_keys">

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
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the API key was created, in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The optional description for the API key resource.</td>
</tr>
<tr>
    <td><CopyableCode code="expire_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the API key resource will expire, in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
</tr>
<tr>
    <td><CopyableCode code="key_name" /></td>
    <td><code>string</code></td>
    <td>The name of the API key resource. (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="restrictions" /></td>
    <td><code>object</code></td>
    <td>API Restrictions on the allowed actions, resources, and referers for an API key resource.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the API key was last updated, in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
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
    <td><a href="#describe_key"><CopyableCode code="describe_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-key_name"><code>key_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the API key resource details. For more information, see Use API keys to authenticate in the Amazon Location Service Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_keys"><CopyableCode code="list_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists API key resources in your Amazon Web Services account. For more information, see Use API keys to authenticate in the Amazon Location Service Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_key"><CopyableCode code="create_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyName"><code>KeyName</code></a></td>
    <td></td>
    <td>Creates an API key resource in your Amazon Web Services account, which lets you grant actions for Amazon Location resources to the API key bearer. For more information, see Use API keys to authenticate in the Amazon Location Service Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_key"><CopyableCode code="update_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-key_name"><code>key_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified properties of a given API key resource.</td>
</tr>
<tr>
    <td><a href="#delete_key"><CopyableCode code="delete_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-key_name"><code>key_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-forceDelete"><code>forceDelete</code></a></td>
    <td>Deletes the specified API key. The API key must have been deactivated more than 90 days previously. For more information, see Use API keys to authenticate in the Amazon Location Service Developer Guide.</td>
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
<tr id="parameter-key_name">
    <td><CopyableCode code="key_name" /></td>
    <td><code>string</code></td>
    <td>The name of the API key to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-forceDelete">
    <td><CopyableCode code="forceDelete" /></td>
    <td><code>boolean</code></td>
    <td>ForceDelete bypasses an API key's expiry conditions and deletes the key. Set the parameter true to delete the key or to false to not preemptively delete the API key. Valid values: true, or false. Required: No This action is irreversible. Only use ForceDelete if you are certain the key is no longer in use.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_key"
    values={[
        { label: 'describe_key', value: 'describe_key' },
        { label: 'list_keys', value: 'list_keys' }
    ]}
>
<TabItem value="describe_key">

Retrieves the API key resource details. For more information, see Use API keys to authenticate in the Amazon Location Service Developer Guide.

```sql
SELECT
create_time,
description,
expire_time,
key,
key_arn,
key_name,
restrictions,
tags,
update_time
FROM aws.location.keys
WHERE key_name = '{{ key_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_keys">

Lists API key resources in your Amazon Web Services account. For more information, see Use API keys to authenticate in the Amazon Location Service Developer Guide.

```sql
SELECT
create_time,
description,
expire_time,
key_name,
restrictions,
update_time
FROM aws.location.keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_key"
    values={[
        { label: 'create_key', value: 'create_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_key">

Creates an API key resource in your Amazon Web Services account, which lets you grant actions for Amazon Location resources to the API key bearer. For more information, see Use API keys to authenticate in the Amazon Location Service Developer Guide.

```sql
INSERT INTO aws.location.keys (
KeyName,
Restrictions,
Description,
ExpireTime,
NoExpiry,
Tags,
region
)
SELECT 
'{{ KeyName }}' /* required */,
'{{ Restrictions }}',
'{{ Description }}',
'{{ ExpireTime }}',
{{ NoExpiry }},
'{{ Tags }}',
'{{ region }}'
RETURNING
create_time,
key,
key_arn,
key_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: keys
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the keys resource.
    - name: KeyName
      value: "{{ KeyName }}"
    - name: Restrictions
      description: |
        API Restrictions on the allowed actions, resources, and referers for an API key resource.
      value:
        AllowActions:
          - "{{ AllowActions }}"
        AllowResources:
          - "{{ AllowResources }}"
        AllowReferers:
          - "{{ AllowReferers }}"
        AllowAndroidApps:
          - Package: "{{ Package }}"
            CertificateFingerprint: "{{ CertificateFingerprint }}"
        AllowAppleApps:
          - BundleId: "{{ BundleId }}"
    - name: Description
      value: "{{ Description }}"
    - name: ExpireTime
      value: "{{ ExpireTime }}"
    - name: NoExpiry
      value: {{ NoExpiry }}
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_key"
    values={[
        { label: 'update_key', value: 'update_key' }
    ]}
>
<TabItem value="update_key">

Updates the specified properties of a given API key resource.

```sql
UPDATE aws.location.keys
SET 
Description = '{{ Description }}',
ExpireTime = '{{ ExpireTime }}',
NoExpiry = {{ NoExpiry }},
ForceUpdate = {{ ForceUpdate }},
Restrictions = '{{ Restrictions }}'
WHERE 
key_name = '{{ key_name }}' --required
AND region = '{{ region }}' --required
RETURNING
key_arn,
key_name,
update_time;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_key"
    values={[
        { label: 'delete_key', value: 'delete_key' }
    ]}
>
<TabItem value="delete_key">

Deletes the specified API key. The API key must have been deactivated more than 90 days previously. For more information, see Use API keys to authenticate in the Amazon Location Service Developer Guide.

```sql
DELETE FROM aws.location.keys
WHERE key_name = '{{ key_name }}' --required
AND region = '{{ region }}' --required
AND forceDelete = '{{ forceDelete }}'
;
```
</TabItem>
</Tabs>

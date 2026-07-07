--- 
title: connection_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_groups
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>connection_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connection_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.connection_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connection_group"
    values={[
        { label: 'get_connection_group', value: 'get_connection_group' },
        { label: 'list_connection_groups', value: 'list_connection_groups' }
    ]}
>
<TabItem value="get_connection_group">

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
    <td><CopyableCode code="AnycastIpListId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Anycast static IP list.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connection group.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the connection group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the connection group is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the connection group.</td>
</tr>
<tr>
    <td><CopyableCode code="Ipv6Enabled" /></td>
    <td><code>boolean</code></td>
    <td>IPv6 is enabled for the connection group.</td>
</tr>
<tr>
    <td><CopyableCode code="IsDefault" /></td>
    <td><code>boolean</code></td>
    <td>Whether the connection group is the default connection group for the distribution tenants.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the connection group was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the connection group.</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingEndpoint" /></td>
    <td><code>string</code></td>
    <td>The routing endpoint (also known as the DNS name) that is assigned to the connection group, such as d111111abcdef8.cloudfront.net.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the connection group.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains zero or more Tag elements.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connection_groups">

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
    <td><CopyableCode code="AnycastIpListId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Anycast static IP list.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connection group.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the connection group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ETag" /></td>
    <td><code>string</code></td>
    <td>The current version of the connection group.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the connection group is enabled</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the connection group.</td>
</tr>
<tr>
    <td><CopyableCode code="IsDefault" /></td>
    <td><code>boolean</code></td>
    <td>Whether the connection group is the default connection group for the distribution tenants.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the connection group was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the connection group.</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingEndpoint" /></td>
    <td><code>string</code></td>
    <td>The routing endpoint (also known as the DNS name) that is assigned to the connection group, such as d111111abcdef8.cloudfront.net.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the connection group.</td>
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
    <td><a href="#get_connection_group"><CopyableCode code="get_connection_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a connection group.</td>
</tr>
<tr>
    <td><a href="#list_connection_groups"><CopyableCode code="list_connection_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the connection groups in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_connection_group"><CopyableCode code="create_connection_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a connection group.</td>
</tr>
<tr>
    <td><a href="#update_connection_group"><CopyableCode code="update_connection_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a connection group.</td>
</tr>
<tr>
    <td><a href="#delete_connection_group"><CopyableCode code="delete_connection_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a connection group.</td>
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
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The value of the ETag header that you received when retrieving the connection group to delete.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the connection group to delete.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID, name, or Amazon Resource Name (ARN) of the connection group.</td>
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
    defaultValue="get_connection_group"
    values={[
        { label: 'get_connection_group', value: 'get_connection_group' },
        { label: 'list_connection_groups', value: 'list_connection_groups' }
    ]}
>
<TabItem value="get_connection_group">

Gets information about a connection group.

```sql
SELECT
AnycastIpListId,
Arn,
CreatedTime,
Enabled,
Id,
Ipv6Enabled,
IsDefault,
LastModifiedTime,
Name,
RoutingEndpoint,
Status,
Tags
FROM aws.cloudfront.connection_groups
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_connection_groups">

Lists the connection groups in your Amazon Web Services account.

```sql
SELECT
AnycastIpListId,
Arn,
CreatedTime,
ETag,
Enabled,
Id,
IsDefault,
LastModifiedTime,
Name,
RoutingEndpoint,
Status
FROM aws.cloudfront.connection_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connection_group"
    values={[
        { label: 'create_connection_group', value: 'create_connection_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connection_group">

Creates a connection group.

```sql
INSERT INTO aws.cloudfront.connection_groups (
Name,
Ipv6Enabled,
Tags,
AnycastIpListId,
Enabled,
region
)
SELECT 
'{{ Name }}',
{{ Ipv6Enabled }},
'{{ Tags }}',
'{{ AnycastIpListId }}',
{{ Enabled }},
'{{ region }}'
RETURNING
AnycastIpListId,
Arn,
CreatedTime,
Enabled,
Id,
Ipv6Enabled,
IsDefault,
LastModifiedTime,
Name,
RoutingEndpoint,
Status,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connection_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connection_groups resource.
    - name: Name
      value: "{{ Name }}"
    - name: Ipv6Enabled
      value: {{ Ipv6Enabled }}
    - name: Tags
      description: |
        A complex type that contains zero or more Tag elements.
      value:
        Items:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
    - name: AnycastIpListId
      value: "{{ AnycastIpListId }}"
    - name: Enabled
      value: {{ Enabled }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connection_group"
    values={[
        { label: 'update_connection_group', value: 'update_connection_group' }
    ]}
>
<TabItem value="update_connection_group">

Updates a connection group.

```sql
UPDATE aws.cloudfront.connection_groups
SET 
Ipv6Enabled = {{ Ipv6Enabled }},
AnycastIpListId = '{{ AnycastIpListId }}',
Enabled = {{ Enabled }}
WHERE 
id = '{{ id }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
RETURNING
AnycastIpListId,
Arn,
CreatedTime,
Enabled,
Id,
Ipv6Enabled,
IsDefault,
LastModifiedTime,
Name,
RoutingEndpoint,
Status,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connection_group"
    values={[
        { label: 'delete_connection_group', value: 'delete_connection_group' }
    ]}
>
<TabItem value="delete_connection_group">

Deletes a connection group.

```sql
DELETE FROM aws.cloudfront.connection_groups
WHERE id = '{{ id }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

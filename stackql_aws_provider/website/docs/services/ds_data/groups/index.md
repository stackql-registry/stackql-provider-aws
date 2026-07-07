--- 
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
  - ds_data
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

Creates, updates, deletes, gets or lists a <code>groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds_data.groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_groups"
    values={[
        { label: 'search_groups', value: 'search_groups' },
        { label: 'describe_group', value: 'describe_group' },
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="search_groups">

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
    <td><CopyableCode code="DistinguishedName" /></td>
    <td><code>string</code></td>
    <td>The distinguished name of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupScope" /></td>
    <td><code>string</code></td>
    <td>The scope of the AD group. For details, see Active Directory security groups (DomainLocal, Global, Universal, BuiltinLocal)</td>
</tr>
<tr>
    <td><CopyableCode code="GroupType" /></td>
    <td><code>string</code></td>
    <td>The AD group type. For details, see Active Directory security group type. (Distribution, Security)</td>
</tr>
<tr>
    <td><CopyableCode code="OtherAttributes" /></td>
    <td><code>object</code></td>
    <td>An expression of one or more attributes, data types, and the values of a group.</td>
</tr>
<tr>
    <td><CopyableCode code="SAMAccountName" /></td>
    <td><code>string</code></td>
    <td>The name of the group. (pattern: &lt;code&gt;^&#91;^:;|=+"*?&lt;&gt;/\\,\&#91;\&#93;@&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SID" /></td>
    <td><code>string</code></td>
    <td>The unique security identifier (SID) of the group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_group">

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
    <td><CopyableCode code="DirectoryId" /></td>
    <td><code>string</code></td>
    <td>The identifier (ID) of the directory that's associated with the group. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DistinguishedName" /></td>
    <td><code>string</code></td>
    <td>The distinguished name of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupScope" /></td>
    <td><code>string</code></td>
    <td>The scope of the AD group. For details, see Active Directory security groups. (DomainLocal, Global, Universal, BuiltinLocal)</td>
</tr>
<tr>
    <td><CopyableCode code="GroupType" /></td>
    <td><code>string</code></td>
    <td>The AD group type. For details, see Active Directory security group type. (Distribution, Security)</td>
</tr>
<tr>
    <td><CopyableCode code="OtherAttributes" /></td>
    <td><code>object</code></td>
    <td>The attribute values that are returned for the attribute names that are included in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="Realm" /></td>
    <td><code>string</code></td>
    <td>The domain name that's associated with the group. (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9&#93;+&#91;\\.-&#93;)+(&#91;a-zA-Z0-9&#93;)+&#91;.&#93;?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SAMAccountName" /></td>
    <td><code>string</code></td>
    <td>The name of the group. (pattern: &lt;code&gt;^&#91;^:;|=+"*?&lt;&gt;/\\,\&#91;\&#93;@&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SID" /></td>
    <td><code>string</code></td>
    <td>The unique security identifier (SID) of the group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_groups">

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
    <td><CopyableCode code="GroupScope" /></td>
    <td><code>string</code></td>
    <td>The scope of the AD group. For details, see Active Directory security groups. (DomainLocal, Global, Universal, BuiltinLocal)</td>
</tr>
<tr>
    <td><CopyableCode code="GroupType" /></td>
    <td><code>string</code></td>
    <td>The AD group type. For details, see Active Directory security group type. (Distribution, Security)</td>
</tr>
<tr>
    <td><CopyableCode code="SAMAccountName" /></td>
    <td><code>string</code></td>
    <td>The name of the group. (pattern: &lt;code&gt;^&#91;^:;|=+"*?&lt;&gt;/\\,\&#91;\&#93;@&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SID" /></td>
    <td><code>string</code></td>
    <td>The unique security identifier (SID) of the group.</td>
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
    <td><a href="#search_groups"><CopyableCode code="search_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches the specified directory for a group. You can find groups that match the SearchString parameter with the value of their attributes included in the SearchString parameter. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the SearchGroups.NextToken member contains a token that you pass in the next call to SearchGroups. This retrieves the next set of items. You can also specify a maximum number of return results with the MaxResults parameter.</td>
</tr>
<tr>
    <td><a href="#describe_group"><CopyableCode code="describe_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific group.</td>
</tr>
<tr>
    <td><a href="#list_groups"><CopyableCode code="list_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns group information for the specified directory. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the ListGroups.NextToken member contains a token that you pass in the next call to ListGroups. This retrieves the next set of items. You can also specify a maximum number of return results with the MaxResults parameter.</td>
</tr>
<tr>
    <td><a href="#create_group"><CopyableCode code="create_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SAMAccountName"><code>SAMAccountName</code></a></td>
    <td></td>
    <td>Creates a new group.</td>
</tr>
<tr>
    <td><a href="#update_group"><CopyableCode code="update_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SAMAccountName"><code>SAMAccountName</code></a></td>
    <td></td>
    <td>Updates group information.</td>
</tr>
<tr>
    <td><a href="#delete_group"><CopyableCode code="delete_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a group.</td>
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
<tr id="parameter-DirectoryId">
    <td><CopyableCode code="DirectoryId" /></td>
    <td><code>string</code></td>
    <td>The identifier (ID) of the directory that's associated with the group.</td>
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
    defaultValue="search_groups"
    values={[
        { label: 'search_groups', value: 'search_groups' },
        { label: 'describe_group', value: 'describe_group' },
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="search_groups">

Searches the specified directory for a group. You can find groups that match the SearchString parameter with the value of their attributes included in the SearchString parameter. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the SearchGroups.NextToken member contains a token that you pass in the next call to SearchGroups. This retrieves the next set of items. You can also specify a maximum number of return results with the MaxResults parameter.

```sql
SELECT
DistinguishedName,
GroupScope,
GroupType,
OtherAttributes,
SAMAccountName,
SID
FROM aws.ds_data.groups
WHERE DirectoryId = '{{ DirectoryId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_group">

Returns information about a specific group.

```sql
SELECT
DirectoryId,
DistinguishedName,
GroupScope,
GroupType,
OtherAttributes,
Realm,
SAMAccountName,
SID
FROM aws.ds_data.groups
WHERE DirectoryId = '{{ DirectoryId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_groups">

Returns group information for the specified directory. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the ListGroups.NextToken member contains a token that you pass in the next call to ListGroups. This retrieves the next set of items. You can also specify a maximum number of return results with the MaxResults parameter.

```sql
SELECT
GroupScope,
GroupType,
SAMAccountName,
SID
FROM aws.ds_data.groups
WHERE DirectoryId = '{{ DirectoryId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_group"
    values={[
        { label: 'create_group', value: 'create_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_group">

Creates a new group.

```sql
INSERT INTO aws.ds_data.groups (
ClientToken,
GroupScope,
GroupType,
OtherAttributes,
SAMAccountName,
DirectoryId,
region
)
SELECT 
'{{ ClientToken }}',
'{{ GroupScope }}',
'{{ GroupType }}',
'{{ OtherAttributes }}',
'{{ SAMAccountName }}' /* required */,
'{{ DirectoryId }}',
'{{ region }}'
RETURNING
DirectoryId,
SAMAccountName,
SID
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: groups
  props:
    - name: DirectoryId
      value: "{{ DirectoryId }}"
      description: Required parameter for the groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the groups resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: GroupScope
      value: "{{ GroupScope }}"
      valid_values: ['DomainLocal', 'Global', 'Universal', 'BuiltinLocal']
    - name: GroupType
      value: "{{ GroupType }}"
      valid_values: ['Distribution', 'Security']
    - name: OtherAttributes
      value: "{{ OtherAttributes }}"
    - name: SAMAccountName
      value: "{{ SAMAccountName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_group"
    values={[
        { label: 'update_group', value: 'update_group' }
    ]}
>
<TabItem value="update_group">

Updates group information.

```sql
UPDATE aws.ds_data.groups
SET 
ClientToken = '{{ ClientToken }}',
GroupScope = '{{ GroupScope }}',
GroupType = '{{ GroupType }}',
OtherAttributes = '{{ OtherAttributes }}',
SAMAccountName = '{{ SAMAccountName }}',
UpdateType = '{{ UpdateType }}'
WHERE 
DirectoryId = '{{ DirectoryId }}' --required
AND region = '{{ region }}' --required
AND SAMAccountName = '{{ SAMAccountName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_group"
    values={[
        { label: 'delete_group', value: 'delete_group' }
    ]}
>
<TabItem value="delete_group">

Deletes a group.

```sql
DELETE FROM aws.ds_data.groups
WHERE DirectoryId = '{{ DirectoryId }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

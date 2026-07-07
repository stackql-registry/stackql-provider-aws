--- 
title: groups_for_members
hide_title: false
hide_table_of_contents: false
keywords:
  - groups_for_members
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

Creates, updates, deletes, gets or lists a <code>groups_for_members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="groups_for_members" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds_data.groups_for_members" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_groups_for_member"
    values={[
        { label: 'list_groups_for_member', value: 'list_groups_for_member' }
    ]}
>
<TabItem value="list_groups_for_member">

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
    <td><a href="#list_groups_for_member"><CopyableCode code="list_groups_for_member" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns group information for the specified member. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the ListGroupsForMember.NextToken member contains a token that you pass in the next call to ListGroupsForMember. This retrieves the next set of items. You can also specify a maximum number of return results with the MaxResults parameter.</td>
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
    <td>The identifier (ID) of the directory that's associated with the member.</td>
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
    defaultValue="list_groups_for_member"
    values={[
        { label: 'list_groups_for_member', value: 'list_groups_for_member' }
    ]}
>
<TabItem value="list_groups_for_member">

Returns group information for the specified member. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the ListGroupsForMember.NextToken member contains a token that you pass in the next call to ListGroupsForMember. This retrieves the next set of items. You can also specify a maximum number of return results with the MaxResults parameter.

```sql
SELECT
GroupScope,
GroupType,
SAMAccountName,
SID
FROM aws.ds_data.groups_for_members
WHERE DirectoryId = '{{ DirectoryId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

--- 
title: childrens
hide_title: false
hide_table_of_contents: false
keywords:
  - childrens
  - organizations
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

Creates, updates, deletes, gets or lists a <code>childrens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="childrens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.childrens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_children"
    values={[
        { label: 'list_children', value: 'list_children' }
    ]}
>
<TabItem value="list_children">

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
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of this child entity. The regex pattern for a child ID string requires one of the following: Account - A string that consists of exactly 12 digits. Organizational unit (OU) - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits. (pattern: &lt;code&gt;^(\d&#123;12&#125;)|(ou-&#91;0-9a-z&#93;&#123;4,32&#125;-&#91;a-z0-9&#93;&#123;8,32&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of this child entity. (ACCOUNT, ORGANIZATIONAL_UNIT)</td>
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
    <td><a href="#list_children"><CopyableCode code="list_children" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all of the organizational units (OUs) or accounts that are contained in the specified parent OU or root. This operation, along with ListParents enables you to traverse the tree structure that makes up this root. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
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
    defaultValue="list_children"
    values={[
        { label: 'list_children', value: 'list_children' }
    ]}
>
<TabItem value="list_children">

Lists all of the organizational units (OUs) or accounts that are contained in the specified parent OU or root. This operation, along with ListParents enables you to traverse the tree structure that makes up this root. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
SELECT
Id,
Type
FROM aws.organizations.childrens
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

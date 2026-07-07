--- 
title: members
hide_title: false
hide_table_of_contents: false
keywords:
  - members
  - cleanrooms
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

Creates, updates, deletes, gets or lists a <code>members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="members" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.members" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_members"
    values={[
        { label: 'list_members', value: 'list_members' }
    ]}
>
<TabItem value="list_members">

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
    <td><CopyableCode code="abilities" /></td>
    <td><code>array</code></td>
    <td>The abilities granted to the collaboration member.</td>
</tr>
<tr>
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the member was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The member's display name. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipArn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the member's associated membership, if present. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the member's associated membership, if present. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="mlAbilities" /></td>
    <td><code>object</code></td>
    <td>The ML member abilities for a collaboration member.</td>
</tr>
<tr>
    <td><CopyableCode code="paymentConfiguration" /></td>
    <td><code>object</code></td>
    <td>An object representing the collaboration member's payment responsibilities set by the collaboration creator.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the member. (INVITED, ACTIVE, LEFT, REMOVED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the member metadata was last updated.</td>
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
    <td><a href="#list_members"><CopyableCode code="list_members" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all members within a collaboration.</td>
</tr>
<tr>
    <td><a href="#delete_member"><CopyableCode code="delete_member" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified member from a collaboration. The removed member is placed in the Removed status and can't interact with the collaboration. The removed member's data is inaccessible to active members of the collaboration.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The account ID of the member to remove.</td>
</tr>
<tr id="parameter-collaboration_identifier">
    <td><CopyableCode code="collaboration_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the associated collaboration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_members"
    values={[
        { label: 'list_members', value: 'list_members' }
    ]}
>
<TabItem value="list_members">

Lists all members within a collaboration.

```sql
SELECT
abilities,
accountId,
createTime,
displayName,
membershipArn,
membershipId,
mlAbilities,
paymentConfiguration,
status,
updateTime
FROM aws.cleanrooms.members
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_member"
    values={[
        { label: 'delete_member', value: 'delete_member' }
    ]}
>
<TabItem value="delete_member">

Removes the specified member from a collaboration. The removed member is placed in the Removed status and can't interact with the collaboration. The removed member's data is inaccessible to active members of the collaboration.

```sql
DELETE FROM aws.cleanrooms.members
WHERE collaboration_identifier = '{{ collaboration_identifier }}' --required
AND account_id = '{{ account_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

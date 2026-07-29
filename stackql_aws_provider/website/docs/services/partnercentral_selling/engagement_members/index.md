--- 
title: engagement_members
hide_title: false
hide_table_of_contents: false
keywords:
  - engagement_members
  - partnercentral_selling
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

Creates, updates, deletes, gets or lists an <code>engagement_members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="engagement_members" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_selling.engagement_members" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_engagement_members"
    values={[
        { label: 'list_engagement_members', value: 'list_engagement_members' }
    ]}
>
<TabItem value="list_engagement_members">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>This is the unique identifier for the AWS account associated with the member organization. It's used for AWS-related operations and identity verification. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;12&#125;|\w&#123;1,12&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="company_name" /></td>
    <td><code>string</code></td>
    <td>The official name of the member's company or organization. (pattern: &lt;code&gt;(?s).&#123;1,120&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="website_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the member company's website. This offers a way to find more information about the member organization and serves as an additional identifier.</td>
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
    <td><a href="#list_engagement_members"><CopyableCode code="list_engagement_members" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of member partners in an Engagement. This operation can only be invoked by members of the Engagement. The ListEngagementMembers operation allows you to fetch information about the members of a specific Engagement. This action is restricted to members of the Engagement being queried.</td>
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
    defaultValue="list_engagement_members"
    values={[
        { label: 'list_engagement_members', value: 'list_engagement_members' }
    ]}
>
<TabItem value="list_engagement_members">

Retrieves the details of member partners in an Engagement. This operation can only be invoked by members of the Engagement. The ListEngagementMembers operation allows you to fetch information about the members of a specific Engagement. This action is restricted to members of the Engagement being queried.

```sql
SELECT
account_id,
company_name,
website_url
FROM aws.partnercentral_selling.engagement_members
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
